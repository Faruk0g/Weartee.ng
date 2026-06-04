// api/verify-payment.js
// Vercel serverless function — verifies Paystack payment, decrements stock,
// and saves order to Supabase orders table.

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { reference, cartItems, location, zone, deliveryFee } = req.body;

    if (!reference) return res.status(400).json({ error: 'No payment reference' });
    if (!cartItems || !cartItems.length) return res.status(400).json({ error: 'No cart items' });

    try {
        // ── STEP 1: Verify payment with Paystack ──────────────────────────────
        const psRes  = await fetch(
            `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
            { headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` } }
        );
        const psData = await psRes.json();

        if (!psData.status || !psData.data || psData.data.status !== 'success') {
            return res.status(400).json({
                error: 'Payment not confirmed by Paystack',
                details: psData.message || 'Unknown error'
            });
        }

        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
        const headers     = {
            apikey:         supabaseKey,
            Authorization:  `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json',
            Prefer:         'return=minimal',
        };

        // ── STEP 2: Decrement stock for each item ─────────────────────────────
        await Promise.all(cartItems.map(item =>
            fetch(`${supabaseUrl}/rest/v1/rpc/decrement_stock`, {
                method:  'POST',
                headers,
                body:    JSON.stringify({ product_id: item.id, qty: item.qty }),
            })
        ));

        // ── STEP 3: Save order to Supabase ────────────────────────────────────
        const subtotal = cartItems.reduce((a, b) => a + (b.price * b.qty), 0);
        const fee      = deliveryFee || 0;
        const total    = subtotal + fee;

        await fetch(`${supabaseUrl}/rest/v1/orders`, {
            method:  'POST',
            headers,
            body: JSON.stringify({
                ref:          reference,
                location:     location || 'Not provided',
                zone:         zone     || 'Unknown',
                items:        cartItems,
                subtotal:     subtotal,
                delivery_fee: fee,
                total:        total,
                status:       'paid',
            }),
        });

        return res.status(200).json({
            ok:        true,
            reference: psData.data.reference,
            amount:    psData.data.amount / 100,
        });

    } catch (err) {
        console.error('verify-payment error:', err);
        return res.status(500).json({ error: 'Server error during verification' });
    }
}
