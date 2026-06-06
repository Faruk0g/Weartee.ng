// ─────────────────────────────────────────────────────────────────────────────
// WearTee.ng — products.js (streamlined checkout + all 3 payment methods)
// ─────────────────────────────────────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════════════════════
// 🔑  PAYSTACK CONFIG
// ══════════════════════════════════════════════════════════════════════════════
const PAYSTACK_PUBLIC_KEY = 'pk_test_REPLACE_WITH_YOUR_PAYSTACK_PUBLIC_KEY';

// ══════════════════════════════════════════════════════════════════════════════
// 🗄️  SUPABASE CONFIG
// ══════════════════════════════════════════════════════════════════════════════
const SUPABASE_URL      = 'https://noomrucdhechdsfhoxzr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vb21ydWNkaGVjaGRzZmhveHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0NDkzODYsImV4cCI6MjA5NjAyNTM4Nn0.oq8L6VoFUTiDVZ-nSaISDotGUSSv0nvaWTep3A1cobU';

// ══════════════════════════════════════════════════════════════════════════════
// 🏦  BANK DETAILS (shown to buyer when they select Manual Bank Transfer)
// ══════════════════════════════════════════════════════════════════════════════
const BANK_DETAILS = {
    bank:    'Moniepoint',
    account: '6650194873',
    name:    'Olowoeyo Fatima Bukola',
};

// ══════════════════════════════════════════════════════════════════════════════
// 🚚  DELIVERY ZONES
// ══════════════════════════════════════════════════════════════════════════════
const DELIVERY_ZONES = [
    {
        name: 'Lagos', fee: 3000,
        keywords: ['lagos','ikeja','lekki','ajah','victoria island','vi','surulere',
            'yaba','mainland','island','mushin','oshodi','festac','agege',
            'ojodu','berger','magodo','gbagada','maryland','ikorodu',
            'badagry','epe','alimosho','iyana','ojota','mile 12',
            'mile12','ketu','kosofe','ojo','apapa','amuwo','abule egba',
            'ibeju','sangotedo','chevron','idumota','balogun'],
    },
    {
        name: 'Ilorin', fee: 2500,
        keywords: ['ilorin','kwara','gra ilorin','tanke','fate','maraba',
            'amilegbe','oloje','pakata','balogun fulani','sawmill'],
    },
    {
        name: 'Abuja', fee: 5000,
        keywords: ['abuja','fct','garki','wuse','maitama','asokoro','gwarinpa',
            'kubwa','nyanya','gwagwalada','kuje','bwari','jabi',
            'lugbe','lokogoma','apo','gudu','life camp','lifecamp'],
    },
    {
        name: 'Port Harcourt', fee: 5000,
        keywords: ['port harcourt','portharcourt','ph','rivers','rumuola',
            'rumuokwuta','diobu','ada george','trans-amadi','elekahia','gra ph'],
    },
    {
        name: 'Ibadan', fee: 4000,
        keywords: ['ibadan','oyo','bodija','ui','challenge','ring road',
            'mokola','agodi','felele','dugbe','ojoo','apata'],
    },
    { name: 'Kano', fee: 5500, keywords: ['kano','sabon gari','bompai','nassarawa','fagge'] },
    {
        name: 'Enugu', fee: 5000,
        keywords: ['enugu','independence layout','new haven','trans ekulu','abakpa','emene','uwani'],
    },
    {
        name: 'Benin City', fee: 5000,
        keywords: ['benin','benin city','edo','upper sakponba','ugbowo','uselu','new benin','ikpoba'],
    },
    {
        name: 'Warri', fee: 5000,
        keywords: ['warri','delta','effurun','ughelli','sapele','asaba'],
    },
    {
        name: 'Ogun', fee: 4000,
        keywords: ['ogun','abeokuta','sagamu','ijebu ode','ota','sango','mowe','ofada','ifo','agbara'],
    },
    { name: 'Other States (Nationwide)', fee: 6000, keywords: [] },
];

// ══════════════════════════════════════════════════════════════════════════════
// PRODUCTS
// ══════════════════════════════════════════════════════════════════════════════
const PRODUCTS = [
    // BASIC TOPS
    { name: "Asymmetric Pleated Top (Black)", price: 12000, img: "images/Asymmetric Pleated Top(black).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Asymmetric Pleated Top (Red)", price: 12000, img: "images/Asymmetric Pleated Top(red).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Backless Top (Black)", price: 10000, img: "images/Backless Top(black).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Backless Top (Wine)", price: 10000, img: "images/Backless Top(wine).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Basic Top (Lotus)", price: 10000, img: "images/Heart Shaped Basic Top(lotus).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Basic Top (Pink)", price: 10000, img: "images/Heart Shaped Basic Top(pink).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Black Tank Top", price: 7000, img: "images/Black Tank Top.JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Black V-Neck Short Sleeve Basic Top", price: 10000, img: "images/Black V-neck Short Sleeve Basic Top.JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Brown Tank Top", price: 7000, img: "images/Brown Tank Top.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Grey Tank Top", price: 7000, img: "images/Grey Tank Top.JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Long Basic Top (Blue)", price: 10000, img: "images/Long Basic Top(blue).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Long Basic Top (Rose Red)", price: 10000, img: "images/Long Basic Top(rose red).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Long Off Shoulder Top (Grey)", price: 10000, img: "images/Long Off Shoulder Top(grey).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Long Off Shoulder Top (Red)", price: 10000, img: "images/Long Off Shoulder Top(red).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Long Sleeve Basic Top", price: 10000, img: "images/Long Sleeve Basic Top.JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Long Sleeve Basic Top (Brown)", price: 10000, img: "images/Long Sleeve Basic Top(brown).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Long Sleeve Wrap Top", price: 12000, img: "images/Long Sleeve Wrap Top.JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Long Sleeve Wrap Top (Black Stripe)", price: 12000, img: "images/Long sleeve Wrap Top (black stripe).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Long Sleeve Wrap Top (Pink)", price: 12000, img: "images/Long Sleeve Wrap Top(pink).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Long Sleeve Wrap Top (Style 2)", price: 12000, img: "images/Long Sleeve Wrap-Top.JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Mesh Top (Style 1)", price: 8000, img: "images/Mesh Top.JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Mesh Top (Style 2)", price: 8000, img: "images/Mesh Top (2).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Mesh Top (Style 3)", price: 8000, img: "images/Mesh Top (3).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Mesh Top (Style 4)", price: 8000, img: "images/Mesh Top (4).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Navy Blue Tee", price: 15000, img: "images/Navy Blue Tee.JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Ribbed Top (Caramel)", price: 10000, img: "images/Ribbed Top(camel).JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "Ribbed Top (Purple)", price: 10000, img: "images/Ribbed Top(purple).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Short Basic Top (Black)", price: 10000, img: "images/Short Basic Top(black).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Short Basic Top (Grey)", price: 10000, img: "images/Short Basic Top(grey).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Short Basic Top (Pink)", price: 10000, img: "images/Short Basic Top(pink).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "U-Neck Basic Top", price: 9000, img: "images/U NEck Basic Top.JPG", stock: 1, cat: "basic tops", isNew: true },
    { name: "V-Neck Short Sleeve Basic Top (Yellow)", price: 9000, img: "images/Yellow V-neck Short Sleeve Basic Top.JPG", stock: 1, cat: "basic tops", isNew: true },
    // TEES
    { name: "Black Graphic Tee", price: 10000, img: "images/Black Graphics Tee.JPG", stock: 0, cat: "tee", isNew: true },
    { name: "Black Plain Tee", price: 9500, img: "images/Black Plain Tee.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Black Tee (Style 1)", price: 10000, img: "images/Black Tee.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Black Tee (Style 2)", price: 15000, img: "images/Black Tee (2).JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Blue Tee", price: 15000, img: "images/Blue Tee.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Cream Color Tee", price: 10000, img: "images/Cream Color Tee.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Green Tee", price: 15000, img: "images/Green TEe.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Grey Tee", price: 15000, img: "images/Grey Tee.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Jerry Graphics Tee", price: 15000, img: "images/Mickey Graphics Tee.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Khaki Button-Up Shirt (Style 1)", price: 15000, img: "images/Khaki Button-up Shirt.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Khaki Button-Up Shirt (Style 2)", price: 15000, img: "images/Khaki Button-up Shirt (2).JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Leopard Print Roundneck", price: 15000, img: "images/Leopard Print Roundneck.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Leopard Print Roundneck (Pink)", price: 15000, img: "images/Leopard Print Roundneck(pink).JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Long Sleeve Button-Up Shirt (Black)", price: 20000, img: "images/Long Sleeve Button-up Shirt(black).JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Long Sleeve Button-Up Shirt (Brown)", price: 20000, img: "images/Long Sleeve Button-up Shirt(brown).JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Long Sleeve Graphics Tee", price: 20000, img: "images/Long Sleeve Graphics Tee.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Long Sleeve Graphics Tee (Brown)", price: 20000, img: "images/Long Sleeve Graphics Tee(brown).JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Long Sleeve Graphics Tee (Wine)", price: 20000, img: "images/Long Sleeve Graphics Tee(wine).JPG", stock: 1, cat: "tee", isNew: true },
    { name: "One Piece Black Tee", price: 15000, img: "images/One Piece Black Tee.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "Printed Tee (Black)", price: 15000, img: "images/Printed Tee(black).JPG", stock: 0, cat: "tee", isNew: true },
    { name: "Tom & Jerry Round Neck Tee", price: 15000, img: "images/Mickey Round Neck Tee.JPG", stock: 0, cat: "tee", isNew: true },
    { name: "White Button-Up Shirt", price: 15000, img: "images/White Button-up Shirt.JPG", stock: 1, cat: "tee", isNew: true },
    { name: "White Plain Tee", price: 10000, img: "images/White Plain Tee.JPG", stock: 0, cat: "tee", isNew: true },
    // SNAPBACKS
    { name: "Black Strapless Cap (Style 1)", price: 15000, img: "images/Black Strapless Cap.JPG", stock: 1, cat: "snapback", isNew: true },
    { name: "Black Strapless Cap (Style 2)", price: 15000, img: "images/Black Strapless Cap (2).JPG", stock: 1, cat: "snapback", isNew: true },
    { name: "Black Strapless Cap (Style 3)", price: 15000, img: "images/Black Strapless Cap (3).JPG", stock: 1, cat: "snapback", isNew: true },
    { name: "Blue Strapless Cap (Style 1)", price: 15000, img: "images/Blue Strapless Cap.JPG", stock: 1, cat: "snapback", isNew: true },
    { name: "Blue Strapless Cap (Style 2)", price: 15000, img: "images/Blue Strapless Cap (2).JPG", stock: 1, cat: "snapback", isNew: true },
    { name: "Cream Strapless Cap", price: 15000, img: "images/Cream Strapless Cap.JPG", stock: 1, cat: "snapback", isNew: true },
    { name: "Green Strapless Cap", price: 15000, img: "images/Green Strapless Cap.JPG", stock: 1, cat: "snapback", isNew: true },
    // JOGGERS
    { name: "Blue Velvet Joggers", price: 15000, img: "images/Blue Velvet Joggers.JPG", stock: 0, cat: "joggers", isNew: true },
    { name: "Brown Velvet Joggers", price: 15000, img: "images/Brown Velvet Joggers.JPG", stock: 0, cat: "joggers", isNew: true },
    { name: "Velvet Joggers (Burgundy)", price: 15000, img: "images/Velvet Joggers(burgundy).JPG", stock: 1, cat: "joggers", isNew: true },
    // PANTS
    { name: "Blue Wide Leg Pant", price: 9000, img: "images/Blue Wide Leg Pant.JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Linen Free Pant (Black)", price: 9000, img: "images/Linen Free Pant(black).JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Linen Free Pant (Brown)", price: 9000, img: "images/Linen Free Pant(brown).JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Linen Free Pant (Caramel)", price: 9000, img: "images/Linen Free Pant(caramel).JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Linen Free Pant (Grey)", price: 9000, img: "images/Linen Free Pant (grey).JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Unisex Cargo (Black) Style 1", price: 15000, img: "images/Unisex Cargo(black).JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Unisex Cargo (Black) Style 2", price: 15000, img: "images/Unisex Cargo(black 2).JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Unisex Cargo (Green) Style 1", price: 15000, img: "images/Unisex Cargo(green).JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Unisex Cargo (Green) Style 2", price: 15000, img: "images/Unisex Cargo(green) (2).JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Unisex Cargo (Grey)", price: 15000, img: "images/Unisex Cargo(grey).JPG", stock: 0, cat: "pant", isNew: true },
    { name: "Unisex Cargo (Khaki)", price: 15000, img: "images/Unisex Cargo(khaki).JPG", stock: 1, cat: "pant", isNew: true },
    { name: "Wide Leg Pant (Yellow)", price: 9000, img: "images/Yellow Wide Leg Pant.JPG", stock: 1, cat: "pant", isNew: true },
];

const SIZES_MAP = {
    tee:          ["S","M","L","XL","XXL"],
    snapback:     ["One Size"],
    pant:         ["S","M","L","XL","XXL"],
    joggers:      ["S","M","L","XL","XXL"],
    "basic tops": ["S","M","L","XL","XXL"],
};

PRODUCTS.forEach((p, i) => { p.id = i; });

// ══════════════════════════════════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════════════════════════════════
function hydrateCart(saved) {
    return (saved || []).map(s => {
        const p = PRODUCTS.find(x => x.id === s.id);
        if (!p) return null;
        return { ...p, size: s.size, qty: s.qty };
    }).filter(Boolean);
}

const _savedCart = JSON.parse(localStorage.getItem('wt_cart2')) || [];
let cart          = hydrateCart(_savedCart);
let selectedSizes = {};
let activeCategory = 'all';
let searchQuery    = '';
let deliveryFee    = 0;
let deliveryName   = 'Pickup';
let detectedZone   = null;
let paymentMethod  = 'card';
let checkoutOrderRef = '';

// ══════════════════════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════════════════════
function sanitize(str) {
    if (!str) return '';
    return String(str).replace(/[*_~`]/g, '').trim();
}

// ══════════════════════════════════════════════════════════════════════════════
// 🗄️  SAVE ORDER TO SUPABASE (used by all 3 payment methods)
// ══════════════════════════════════════════════════════════════════════════════
async function saveOrderToSupabase(ref, status, locationVal) {
    try {
        const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
        const total    = subtotal + deliveryFee;
        await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
            method:  'POST',
            headers: {
                apikey:         SUPABASE_ANON_KEY,
                Authorization:  `Bearer ${SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json',
                Prefer:         'return=minimal',
            },
            body: JSON.stringify({
                ref:          ref,
                location:     locationVal || 'Not provided',
                zone:         deliveryName,
                items:        cart.map(i => ({ id: i.id, name: i.name, size: i.size, qty: i.qty, price: i.price })),
                subtotal:     subtotal,
                delivery_fee: deliveryFee,
                total:        total,
                status:       status,
            }),
        });
    } catch (err) {
        console.warn('Could not save order to Supabase:', err);
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// 🚚  DELIVERY ZONE DETECTION
// ══════════════════════════════════════════════════════════════════════════════
function detectZone(locationText) {
    if (!locationText || !locationText.trim()) return null;
    const lower = locationText.toLowerCase().trim();
    for (const zone of DELIVERY_ZONES) {
        if (zone.keywords.length === 0) continue;
        if (zone.keywords.some(kw => lower.includes(kw))) return zone;
    }
    return DELIVERY_ZONES[DELIVERY_ZONES.length - 1];
}

function onLocationInput() {
    const val     = document.getElementById('f-location').value;
    const preview = document.getElementById('delivery-fee-preview');
    const payBtn  = document.getElementById('pay-now-btn');
    const zone    = detectZone(val);

    if (!val.trim()) {
        detectedZone = null;
        deliveryFee  = 0;
        deliveryName = 'Unknown';
        preview.innerHTML   = '';
        if (payBtn) payBtn.disabled = true;
        return;
    }

    detectedZone = zone;
    deliveryFee  = zone.fee;
    deliveryName = zone.name;

    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    const total    = subtotal + deliveryFee;

    preview.innerHTML = `
        <div class="fee-pill">
            <span class="fee-location">📍 ${zone.name}</span>
            <span class="fee-amount">${zone.fee === 0 ? 'FREE' : '₦' + zone.fee.toLocaleString()} delivery</span>
        </div>
        <div class="fee-total">Total: <strong>₦${total.toLocaleString()}</strong></div>
    `;
    if (payBtn) payBtn.disabled = false;
}

// ══════════════════════════════════════════════════════════════════════════════
// 🛒  CHECKOUT — streamlined: location → payment method → done
// ══════════════════════════════════════════════════════════════════════════════
function openCheckout() {
    if (!cart.length) { showToast("Your cart is empty"); return; }
    closeCart();

    // Reset state
    document.getElementById('f-location').value        = '';
    document.getElementById('delivery-fee-preview').innerHTML = '';
    detectedZone  = null;
    deliveryFee   = 0;
    deliveryName  = 'Pickup';
    paymentMethod = 'card';

    // Reset payment method selection UI
    document.querySelectorAll('.pay-option').forEach(o => o.classList.remove('selected'));
    const cardOption = document.querySelector('.pay-option[data-method="card"]');
    if (cardOption) cardOption.classList.add('selected');

    const payBtn = document.getElementById('pay-now-btn');
    if (payBtn) payBtn.disabled = true;

    document.getElementById('checkout-modal').classList.add('show');
    document.getElementById('overlay').classList.add('show');
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

function selectPayment(el, method) {
    document.querySelectorAll('.pay-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    paymentMethod = method;

    // Update button text
    const btn = document.getElementById('pay-now-btn');
    if (!btn) return;
    if (method === 'card')     btn.textContent = 'Pay with Card / Bank →';
    else if (method === 'bank') btn.textContent = 'Get Bank Details →';
    else                        btn.textContent = 'Order via WhatsApp →';
}

function placeOrder() {
    // Validate location first
    const locVal    = sanitize(document.getElementById('f-location').value);
    const freshZone = detectZone(locVal);

    if (!locVal) {
        showToast('Please enter your delivery location');
        document.getElementById('f-location').focus();
        return;
    }
    if (!freshZone) {
        showToast("We couldn't detect your zone. Please be more specific.");
        return;
    }

    detectedZone = freshZone;
    deliveryFee  = freshZone.fee;
    deliveryName = freshZone.name;

    if (paymentMethod === 'card')     { initiatePaystackPayment(locVal); return; }
    if (paymentMethod === 'bank')     { handleBankTransfer(locVal);      return; }
    if (paymentMethod === 'whatsapp') { handleWhatsAppOrder(locVal);     return; }
}

// ── 1. PAYSTACK ───────────────────────────────────────────────────────────────
function loadPaystackScript(cb) {
    if (window.PaystackPop) { cb(); return; }
    const s  = document.createElement('script');
    s.src    = 'https://js.paystack.co/v1/inline.js';
    s.onload = cb;
    document.head.appendChild(s);
}

function initiatePaystackPayment(locVal) {
    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    const total    = subtotal + deliveryFee;
    const ref      = 'WT-' + Date.now();
    checkoutOrderRef = ref;

    loadPaystackScript(() => {
        const handler = PaystackPop.setup({
            key:      PAYSTACK_PUBLIC_KEY,
            email:    'orders@weartee.ng',
            amount:   total * 100,
            currency: 'NGN',
            ref:      ref,
            metadata: {
                custom_fields: [
                    { display_name: 'Delivery Zone',     variable_name: 'zone',     value: deliveryName },
                    { display_name: 'Delivery Location', variable_name: 'location', value: locVal },
                    { display_name: 'Items',             variable_name: 'items',    value: cart.map(i => `${i.name} (${i.size}) x${i.qty}`).join(', ') },
                ]
            },
            callback: async function (response) {
                showToast('Verifying payment... please wait');
                try {
                    const verify = await fetch('https://weartee-ng.vercel.app/api/verify-payment', {
                        method:  'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            reference:   response.reference,
                            cartItems:   cart.map(i => ({ id: i.id, qty: i.qty, price: i.price, name: i.name, size: i.size })),
                            location:    locVal,
                            zone:        deliveryName,
                            deliveryFee: deliveryFee,
                        })
                    });
                    const result = await verify.json();
                    if (!verify.ok || !result.ok) {
                        showToast('Payment could not be verified. Contact us with ref: ' + response.reference);
                        return;
                    }
                    checkoutOrderRef = response.reference;
                    showSuccessScreen(response.reference, 'card', locVal);
                    cart = []; saveCart(); updateCartUI();
                    showToast('Payment successful! 🎉');
                } catch (err) {
                    console.error('Verification error:', err);
                    showToast('Network error. Contact us with ref: ' + response.reference);
                }
            },
            onClose: function () {
                showToast('Payment cancelled. You can try again.');
            }
        });
        handler.openIframe();
    });
}

// ── 2. BANK TRANSFER ──────────────────────────────────────────────────────────
async function handleBankTransfer(locVal) {
    const ref        = 'WT-' + Date.now().toString().slice(-6);
    checkoutOrderRef = ref;

    // Save to admin as pending_bank
    await saveOrderToSupabase(ref, 'pending_bank', locVal);

    // Notify store owner via WhatsApp
    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    const total    = subtotal + deliveryFee;
    let msg = `New Bank Transfer Order — WearTee.ng\n`;
    msg += `Ref: ${ref}\n`;
    msg += `Location: ${locVal}\n`;
    msg += `Zone: ${deliveryName}\n\n`;
    msg += `Items:\n`;
    cart.forEach(i => { msg += `- ${i.name} [${i.size}] x${i.qty}: ₦${(i.price * i.qty).toLocaleString()}\n`; });
    msg += `\nDelivery: ${deliveryFee ? '₦' + deliveryFee.toLocaleString() : 'FREE'}\n`;
    msg += `Total: ₦${total.toLocaleString()}\n\n`;
    msg += `Please send them your bank details and confirm payment.`;
    window.open(`https://wa.me/2349067468815?text=${encodeURIComponent(msg)}`, '_blank');

    // Show success with bank details
    showSuccessScreen(ref, 'bank', locVal);
    cart = []; saveCart(); updateCartUI();
}

// ── 3. WHATSAPP ORDER ─────────────────────────────────────────────────────────
async function handleWhatsAppOrder(locVal) {
    const ref        = 'WT-' + Date.now().toString().slice(-6);
    checkoutOrderRef = ref;

    // Save to admin as whatsapp
    await saveOrderToSupabase(ref, 'whatsapp', locVal);

    // Open WhatsApp with full order details
    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    const total    = subtotal + deliveryFee;
    let msg = `New Order — WearTee.ng\n`;
    msg += `Ref: ${ref}\n`;
    msg += `Location: ${locVal}\n`;
    msg += `Zone: ${deliveryName}\n\n`;
    msg += `Items:\n`;
    cart.forEach(i => { msg += `- ${i.name} [${i.size}] x${i.qty}: ₦${(i.price * i.qty).toLocaleString()}\n`; });
    msg += `\nDelivery: ${deliveryFee ? '₦' + deliveryFee.toLocaleString() : 'FREE'}\n`;
    msg += `Total: ₦${total.toLocaleString()}\n\n`;
    msg += `Payment: WhatsApp Order`;
    window.open(`https://wa.me/2349067468815?text=${encodeURIComponent(msg)}`, '_blank');

    showSuccessScreen(ref, 'whatsapp', locVal);
    cart = []; saveCart(); updateCartUI();
}

// ── SUCCESS SCREEN ────────────────────────────────────────────────────────────
function showSuccessScreen(ref, method, locVal) {
    closeCheckout();

    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    const total    = subtotal + deliveryFee;

    // Build method-specific message
    let methodMsg = '';
    if (method === 'card') {
        methodMsg = `<div style="background:#EAF3DE;border-radius:10px;padding:14px;text-align:center;font-size:13px;color:#3B6D11;">
            ✅ Payment confirmed! Your order is being processed.
        </div>`;
    } else if (method === 'bank') {
        methodMsg = `<div style="background:#E6F1FB;border-radius:10px;padding:16px;font-size:13px;">
            <div style="font-weight:600;margin-bottom:10px;color:#185FA5;">🏦 Bank Transfer Details</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="display:flex;justify-content:space-between;"><span>Bank</span><strong>${BANK_DETAILS.bank}</strong></div>
                <div style="display:flex;justify-content:space-between;"><span>Account Number</span><strong>${BANK_DETAILS.account}</strong></div>
                <div style="display:flex;justify-content:space-between;"><span>Account Name</span><strong>${BANK_DETAILS.name}</strong></div>
                <div style="display:flex;justify-content:space-between;"><span>Amount</span><strong>₦${total.toLocaleString()}</strong></div>
            </div>
            <div style="margin-top:10px;font-size:12px;color:#185FA5;">
                After payment, send your proof of payment to our WhatsApp and we'll confirm your order.
            </div>
        </div>`;
    } else {
        methodMsg = `<div style="background:#EAF3DE;border-radius:10px;padding:14px;text-align:center;font-size:13px;color:#3B6D11;">
            ✅ Your order has been sent to our WhatsApp. We'll confirm shortly!
        </div>`;
    }

    // Build order summary
    const summaryHTML = `
        <div style="background:#f5f3ef;border-radius:10px;padding:14px;margin-bottom:12px;">
            <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Order Summary</div>
            ${cart.map(i => `
                <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;">
                    <span>${i.name} (${i.size}) ×${i.qty}</span>
                    <span>₦${(i.price * i.qty).toLocaleString()}</span>
                </div>`).join('')}
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;">
                <span>Delivery (${deliveryName})</span>
                <span>${deliveryFee ? '₦' + deliveryFee.toLocaleString() : 'FREE'}</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:14px;font-weight:600;border-top:1px solid #e8e4dc;padding-top:8px;margin-top:8px;">
                <span>Total</span><span>₦${total.toLocaleString()}</span>
            </div>
        </div>
    `;

    const successModal = document.getElementById('success-modal');
    const refEl        = document.getElementById('order-ref-display');
    const summaryEl    = document.getElementById('success-summary');
    const methodEl     = document.getElementById('success-method-msg');

    if (refEl)     refEl.textContent  = `Order Ref: ${ref}`;
    if (summaryEl) summaryEl.innerHTML = summaryHTML;
    if (methodEl)  methodEl.innerHTML  = methodMsg;

    if (successModal) {
        successModal.classList.add('show');
        document.getElementById('overlay').classList.add('show');
    }
}

function closeSuccess() {
    const m = document.getElementById('success-modal');
    if (m) m.classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

// ══════════════════════════════════════════════════════════════════════════════
// PRODUCT DETAIL MODAL
// ══════════════════════════════════════════════════════════════════════════════
function openProductDetail(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const sizes    = SIZES_MAP[p.cat] || ["S","M","L","XL","XXL"];
    const soldOut  = p.stock === 0;
    const lowStock = p.stock > 0 && p.stock <= 3;
    const selSize  = selectedSizes[p.id] || sizes[0];
    const modal    = document.getElementById('product-detail-modal');
    const content  = document.getElementById('pd-content');

    content.innerHTML = `
        <div class="pd-img-box">
            ${p.isNew ? `<div class="badge badge-new">NEW</div>` : ''}
            ${lowStock ? `<div class="badge badge-low">Only ${p.stock} left</div>` : ''}
            ${soldOut  ? `<div class="sold-overlay"><span>Sold Out</span></div>` : ''}
            <img id="pd-main-img" src="${p.img}" alt="${p.name}"
                onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22380%22><rect fill=%22%23ece8e0%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23bbb%22 x=%2250%25%22 y=%2250%25%22 font-size=%2213%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22sans-serif%22>${p.name}</text></svg>'">
        </div>
        <div class="pd-info">
            <div class="pd-brand">WEARTEE.NG</div>
            <h2 class="pd-name">${p.name}</h2>
            <div class="pd-price-row">
                <span class="pd-price">&#8358;${p.price.toLocaleString()}</span>
                ${p.isNew ? `<span class="pd-badge-new">NEW ARRIVAL</span>` : ''}
            </div>
            <div class="pd-stock-status ${soldOut ? 'out' : 'in'}">
                ${soldOut ? '&#10006; Out of Stock' : lowStock ? `&#9888; Only ${p.stock} left` : '&#10003; In Stock'}
            </div>
            <div class="pd-delivery-note">
                <span>&#128666;</span> Delivery across Nigeria &bull; fee based on your location
            </div>
            ${sizes.length > 1 ? `
            <div class="pd-size-section">
                <div class="pd-size-label">SELECT SIZE</div>
                <div class="pd-size-row" id="pd-sizes-${p.id}">
                    ${sizes.map(s => `<button class="pd-sz-btn${s === selSize ? ' selected' : ''}" onclick="pdSelectSize(${p.id}, '${s}')">${s}</button>`).join('')}
                </div>
            </div>` : `<div class="pd-size-section"><div class="pd-size-label">SIZE</div><div class="pd-one-size">ONE SIZE</div></div>`}
            <div class="pd-actions">
                <button class="pd-atc-btn" onclick="addToCartFromDetail(${p.id})" ${soldOut ? 'disabled' : ''}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    ${soldOut ? 'Sold Out' : 'Add to Cart'}
                </button>
                <button class="pd-wa-btn" onclick="orderViaWhatsAppDirect(${p.id})">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 0C5.373 0 0 5.373 0 12c0 2.115.554 4.1 1.522 5.823L0 24l6.335-1.508C8.025 23.452 9.975 24 11.998 24 18.625 24 24 18.627 24 12S18.625 0 11.998 0zm0 21.818c-1.872 0-3.633-.505-5.148-1.384l-.369-.219-3.761.895.952-3.652-.24-.378A9.79 9.79 0 0 1 2.18 12c0-5.413 4.406-9.818 9.818-9.818 5.413 0 9.818 4.405 9.818 9.818S17.411 21.818 11.998 21.818z"/></svg>
                    Order via WhatsApp
                </button>
            </div>
            <div class="pd-details">
                <div class="pd-detail-row"><span>Category</span><span>${p.cat.toUpperCase()}</span></div>
                <div class="pd-detail-row"><span>Brand</span><span>WEARTEE.NG</span></div>
                <div class="pd-detail-row"><span>Condition</span><span>Brand New</span></div>
            </div>
        </div>
    `;

    modal.classList.add('show');
    document.getElementById('overlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
    document.getElementById('product-detail-modal').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    document.body.style.overflow = '';
}

function pdSelectSize(id, size) {
    selectedSizes[id] = size;
    const row = document.getElementById(`pd-sizes-${id}`);
    if (!row) return;
    row.querySelectorAll('.pd-sz-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent === size);
    });
    const gridRow = document.getElementById(`sizes-${id}`);
    if (gridRow) {
        gridRow.querySelectorAll('.sz-btn').forEach(btn => {
            btn.classList.toggle('selected', btn.textContent === size);
        });
    }
}

function addToCartFromDetail(id) {
    closeProductDetail();
    addToCart(id);
}

function orderViaWhatsAppDirect(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const sizes = SIZES_MAP[p.cat] || ["S","M","L","XL","XXL"];
    const size  = sizes.length === 1 ? sizes[0] : (selectedSizes[id] || sizes[0]);
    const msg   = `Enquiry from WearTee.ng\n\nProduct: ${p.name}\nSize: ${size}\nPrice: ₦${p.price.toLocaleString()}\n\nI'd like to order this item.`;
    window.open(`https://wa.me/2349067468815?text=${encodeURIComponent(msg)}`, '_blank');
}

// ══════════════════════════════════════════════════════════════════════════════
// RENDER PRODUCTS
// ══════════════════════════════════════════════════════════════════════════════
function getFilteredProducts() {
    return PRODUCTS.filter(p => {
        const matchCat    = activeCategory === 'all' || p.cat === activeCategory;
        const matchSearch = !searchQuery ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.cat.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });
}

function renderProducts() {
    const grid     = document.getElementById('product-grid');
    const filtered = getFilteredProducts();
    document.getElementById('results-label').textContent =
        `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;

    if (!filtered.length) {
        grid.innerHTML = `<div class="no-results"><strong>EMPTY</strong>No results for "${searchQuery}"</div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const soldOut  = p.stock === 0;
        const lowStock = p.stock > 0 && p.stock <= 3;
        const sizes    = SIZES_MAP[p.cat] || ["S","M","L","XL","XXL"];
        const selSize  = selectedSizes[p.id] || sizes[0];

        return `
        <div class="card${soldOut ? ' disabled' : ''}">
            <div class="img-box" onclick="openProductDetail(${p.id})" style="cursor:pointer;">
                ${p.isNew ? `<div class="badge badge-new">NEW</div>` : ''}
                ${lowStock && !soldOut ? `<div class="badge badge-low">Only ${p.stock} left</div>` : ''}
                ${soldOut ? `<div class="sold-overlay"><span>Sold Out</span></div>` : ''}
                <img src="${p.img}" alt="${p.name}" loading="lazy"
                    onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22380%22><rect fill=%22%23ece8e0%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23bbb%22 x=%2250%25%22 y=%2250%25%22 font-size=%2213%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22sans-serif%22>${p.name}</text></svg>'">
            </div>
            <div class="card-body">
                <div class="card-meta" onclick="openProductDetail(${p.id})" style="cursor:pointer;">
                    <span class="card-name">${p.name}</span>
                    <span class="card-price">&#8358;${p.price.toLocaleString()}</span>
                </div>
                ${sizes.length > 1 ? `
                <div class="size-row" id="sizes-${p.id}">
                    ${sizes.map(s => `<button class="sz-btn${s === selSize ? ' selected' : ''}" onclick="selectSize(${p.id}, '${s}')">${s}</button>`).join('')}
                </div>` : `<div style="font-size:11px;color:var(--mid);margin-bottom:10px;font-family:'DM Mono',monospace;">ONE SIZE</div>`}
                <button class="atc-btn" onclick="addToCart(${p.id})" ${soldOut ? 'disabled' : ''}>
                    ${soldOut ? '&#8212; Sold Out &#8212;' : 'Add to Cart'}
                </button>
            </div>
        </div>`;
    }).join('');
}

function selectSize(id, size) {
    selectedSizes[id] = size;
    const row = document.getElementById(`sizes-${id}`);
    if (!row) return;
    row.querySelectorAll('.sz-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent === size);
    });
}

// ══════════════════════════════════════════════════════════════════════════════
// CART
// ══════════════════════════════════════════════════════════════════════════════
function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const sizes  = SIZES_MAP[p.cat] || ["S","M","L","XL","XXL"];
    const size   = sizes.length === 1 ? sizes[0] : (selectedSizes[id] || sizes[0]);
    const inCart = cart.filter(i => i.id === id && i.size === size).reduce((a, b) => a + b.qty, 0);

    if (p.stock !== undefined && inCart >= p.stock) {
        showToast(`Only ${p.stock} available in this size`);
        return;
    }

    const item = cart.find(i => i.id === id && i.size === size);
    if (item) { item.qty++; } else { cart.push({ ...p, size, qty: 1 }); }
    saveCart(); updateCartUI(); openCart();
    showToast(`${p.name.toUpperCase()} added ✓`);
}

function removeFromCart(id, size) {
    cart = cart.filter(i => !(i.id === id && i.size === size));
    saveCart(); updateCartUI();
}

function changeQty(id, size, delta) {
    const item = cart.find(i => i.id === id && i.size === size);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id, size);
    else { saveCart(); updateCartUI(); }
}

function clearCart() {
    if (!cart.length) return;
    if (confirm("Clear all items?")) { cart = []; saveCart(); updateCartUI(); }
}

function saveCart() {
    localStorage.setItem('wt_cart2', JSON.stringify(cart.map(i => ({ id: i.id, size: i.size, qty: i.qty }))));
}

function updateCartUI() {
    const count    = cart.reduce((a, b) => a + b.qty, 0);
    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    document.getElementById('cart-count').textContent    = count;
    document.getElementById('cart-subtotal').textContent = `₦${subtotal.toLocaleString()}`;
    document.getElementById('cart-total').textContent    = `₦${subtotal.toLocaleString()}`;

    const list = document.getElementById('cart-list');
    if (!cart.length) {
        list.innerHTML = `<div class="cart-empty"><div class="e-icon">🛒</div><div>Your cart is empty</div></div>`;
        return;
    }
    list.innerHTML = cart.map(i => `
        <div class="cart-item">
            <img src="${i.img}" alt="${i.name}" onerror="this.style.background='#ece8e0'">
            <div class="ci-info">
                <div class="ci-name">${i.name}</div>
                <div class="ci-size">SIZE: ${i.size}</div>
                <div class="ci-qty">
                    <button class="qty-btn" onclick="changeQty(${i.id},'${i.size}',-1)">−</button>
                    <span class="qty-num">${i.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${i.id},'${i.size}',1)">+</button>
                </div>
                <button class="rm-btn" onclick="removeFromCart(${i.id},'${i.size}')">Remove</button>
            </div>
            <div class="ci-subtotal">₦${(i.price * i.qty).toLocaleString()}</div>
        </div>
    `).join('');
}

function openCart() {
    document.getElementById('sidebar').classList.add('show');
    document.getElementById('overlay').classList.add('show');
}
function closeCart() {
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

// ══════════════════════════════════════════════════════════════════════════════
// SEARCH & FILTER
// ══════════════════════════════════════════════════════════════════════════════
document.getElementById('search-input').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderProducts();
});

document.getElementById('filter-bar').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeCategory = chip.dataset.cat;
    renderProducts();
});

document.getElementById('cart-open').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
document.getElementById('overlay').addEventListener('click', () => {
    closeCart();
    closeCheckout();
    closeProductDetail();
    closeSuccess();
});

// ══════════════════════════════════════════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════════════════════════════════════════
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ══════════════════════════════════════════════════════════════════════════════
// 🗄️  LIVE STOCK SYNC
// ══════════════════════════════════════════════════════════════════════════════
async function syncStockFromSupabase() {
    try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/products?select=id,stock`, {
            headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` }
        });
        if (!res.ok) throw new Error('Stock fetch failed');
        const rows = await res.json();
        rows.forEach(row => {
            const p = PRODUCTS.find(x => x.id === row.id);
            if (p) p.stock = row.stock;
        });
        renderProducts();
    } catch (err) {
        console.warn('Could not sync stock from Supabase:', err);
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════════════════════
renderProducts();
updateCartUI();
syncStockFromSupabase();
