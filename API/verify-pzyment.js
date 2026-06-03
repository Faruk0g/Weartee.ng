// api/verify-payment.js
// Vercel serverless function — verifies Paystack payment and decrements stock in Supabase
// This file must live in the /api folder in the root of your repo

export default async function handler(req, res) {

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { reference, cartItems } = req.body;

    // Make sure we have a reference and cart items
    if (!reference) {
        return res.status(400).json({ error: 'No payment reference provided' });
    }
    if (!cartItems || !cartItems.length) {
        return res.status(400).json({ error: 'No cart items provided' });
    }

    try {
        // ── STEP 1: Verify payment with Paystack ──────────────────────────────
        const paystackRes = await fetch(
            `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        const paystackData = await paystackRes.json();

        // If Paystack says payment failed or is pending — reject
        if (
            !paystackData.status ||
            !paystackData.data ||
            paystackData.data.status !== 'success'
        ) {
            return res.status(400).json({
                error: 'Payment not confirmed by Paystack',
                details: paystackData.message || 'Unknown error'
            });
        }

        // ── STEP 2: Decrement stock in Supabase for each cart item ────────────
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

        const stockUpdates = cartItems.map(item =>
            fetch(`${supabaseUrl}/rest/v1/rpc/decrement_stock`, {
                method: 'POST',
                headers: {
                    apikey: supabaseKey,
                    Authorization: `Bearer ${supabaseKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_id: item.id,
                    qty: item.qty,
                })
            })
        );

        // Run all stock updates in parallel
        await Promise.all(stockUpdates);

        // ── STEP 3: Return success ────────────────────────────────────────────
        return res.status(200).json({
            ok: true,
            reference: paystackData.data.reference,
            amount: paystackData.data.amount / 100, // convert back from kobo
        });

    } catch (err) {
        console.error('verify-payment error:', err);
        return res.status(500).json({ error: 'Server error during payment verification' });
    };
};