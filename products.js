// ─────────────────────────────────────────────────────────────────────────────
// WearTee.ng — products.js
// Shared by index.html (shop grid) and product-detail.html (single product page)
// Cart lives in cart.html
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
// 🚚  DELIVERY ZONES
// ══════════════════════════════════════════════════════════════════════════════
const DELIVERY_ZONES = [
    { name:'Lagos',      fee:3000, keywords:['lagos','ikeja','lekki','ajah','victoria island','vi','surulere','yaba','mainland','island','mushin','oshodi','festac','agege','ojodu','berger','magodo','gbagada','maryland','ikorodu','badagry','epe','alimosho','iyana','ojota','mile 12','mile12','ketu','kosofe','ojo','apapa','amuwo','abule egba','ibeju','sangotedo','chevron','idumota','balogun'] },
    { name:'Ilorin',     fee:2500, keywords:['ilorin','kwara','gra ilorin','tanke','fate','maraba','amilegbe','oloje','pakata','balogun fulani','sawmill'] },
    { name:'Abuja',      fee:5000, keywords:['abuja','fct','garki','wuse','maitama','asokoro','gwarinpa','kubwa','nyanya','gwagwalada','kuje','bwari','jabi','lugbe','lokogoma','apo','gudu','life camp','lifecamp'] },
    { name:'Port Harcourt', fee:5000, keywords:['port harcourt','portharcourt','ph','rivers','rumuola','rumuokwuta','diobu','ada george','trans-amadi','elekahia','gra ph'] },
    { name:'Ibadan',     fee:4000, keywords:['ibadan','oyo','bodija','ui','challenge','ring road','mokola','agodi','felele','dugbe','ojoo','apata'] },
    { name:'Kano',       fee:5500, keywords:['kano','sabon gari','bompai','nassarawa','fagge'] },
    { name:'Enugu',      fee:5000, keywords:['enugu','independence layout','new haven','trans ekulu','abakpa','emene','uwani'] },
    { name:'Benin City', fee:5000, keywords:['benin','benin city','edo','upper sakponba','ugbowo','uselu','new benin','ikpoba'] },
    { name:'Warri',      fee:5000, keywords:['warri','delta','effurun','ughelli','sapele','asaba'] },
    { name:'Ogun',       fee:4000, keywords:['ogun','abeokuta','sagamu','ijebu ode','ota','sango','mowe','ofada','ifo','agbara'] },
    { name:'Other States (Nationwide)', fee:6000, keywords:[] },
];

// ══════════════════════════════════════════════════════════════════════════════
// PRODUCTS
// ══════════════════════════════════════════════════════════════════════════════
const PRODUCTS = [
  // BASIC TOPS
  {
    name: "Asymmetric Pleated Top (Black)",
    price: 12000,
    originalPrice: 16000,
    isBestSeller: false,
    img: "images/Asymmetric Pleated Top(black).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Asymmetric Pleated Top (Red)",
    price: 12000,
    img: "images/Asymmetric Pleated Top(red).JPG",
    stock: 1,
    cat: "basic tops",
    false: false,
  },
  {
    name: "Backless Top (Black)",
    price: 10000,
    img: "images/Backless Top(black).JPG",
    stock: 0,
    cat: "basic tops",
    false: false,
  },
  {
    name: "Backless Top (Wine)",
    price: 10000,
    img: "images/Backless Top(wine).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Basic Top (Lotus)",
    price: 10000,
    img: "images/Heart Shaped Basic Top(lotus).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Basic Top (Pink)",
    price: 10000,
    img: "images/Heart Shaped Basic Top(pink).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Black Tank Top",
    price: 7000,
    originalPrice: 9000,
    img: "images/Black Tank Top.JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Black V-Neck Short Sleeve Basic Top",
    price: 10000,
    img: "images/Black V-neck Short Sleeve Basic Top.JPG",
    stock: 0,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Brown Tank Top",
    price: 7000,
    img: "images/Brown Tank Top.JPG",
    stock: 10,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Grey Tank Top",
    price: 7000,
    img: "images/Grey Tank Top.JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Basic Top (Blue)",
    price: 10000,
    img: "images/Long Basic Top(blue).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Basic Top (Rose Red)",
    price: 10000,
    img: "images/Long Basic Top(rose red).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Off Shoulder Top (Grey)",
    price: 10000,
    img: "images/Long Off Shoulder Top(grey).JPG",
    stock: 0,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Off Shoulder Top (Red)",
    price: 10000,
    img: "images/Long Off Shoulder Top(red).JPG",
    stock: 0,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Sleeve Basic Top",
    price: 10000,
    img: "images/Long Sleeve Basic Top.JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Sleeve Basic Top (Brown)",
    price: 10000,
    img: "images/Long Sleeve Basic Top(brown).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Sleeve Wrap Top",
    price: 12000,
    img: "images/Long Sleeve Wrap Top.JPG",
    stock: 0,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Sleeve Wrap Top (Black Stripe)",
    price: 12000,
    img: "images/Long sleeve Wrap Top (black stripe).JPG",
    stock: 0,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Sleeve Wrap Top (Pink)",
    price: 12000,
    img: "images/Long Sleeve Wrap Top(pink).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Long Sleeve Wrap Top (Style 2)",
    price: 12000,
    img: "images/Long Sleeve Wrap-Top.JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Mesh Top (Style 1)",
    price: 8000,
    img: "images/Mesh Top.JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Mesh Top (Style 2)",
    price: 8000,
    img: "images/Mesh Top (2).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Mesh Top (Style 3)",
    price: 8000,
    img: "images/Mesh Top (3).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Mesh Top (Style 4)",
    price: 8000,
    img: "images/Mesh Top (4).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Navy Blue Tee",
    price: 15000,
    img: "images/Navy Blue Tee.JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Ribbed Top (Caramel)",
    price: 10000,
    img: "images/Ribbed Top(camel).JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Ribbed Top (Purple)",
    price: 10000,
    img: "images/Ribbed Top(purple).JPG",
    stock: 0,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Short Basic Top (Black)",
    price: 10000,
    img: "images/Short Basic Top(black).JPG",
    stock: 0,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Short Basic Top (Grey)",
    price: 10000,
    img: "images/Short Basic Top(grey).JPG",
    stock: 0,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "Short Basic Top (Pink)",
    price: 10000,
    img: "images/Short Basic Top(pink).JPG",
    stock: 0,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "U-Neck Basic Top",
    price: 9000,
    img: "images/U NEck Basic Top.JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  {
    name: "V-Neck Short Sleeve Basic Top (Yellow)",
    price: 9000,
    img: "images/Yellow V-neck Short Sleeve Basic Top.JPG",
    stock: 1,
    cat: "basic tops",
    isNew: false,
  },
  // TEES
  {
    name: "Black Graphic Tee",
    price: 10000,
    img: "images/Black Graphics Tee.JPG",
    stock: 0,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Black Plain Tee",
    price: 9500,
    img: "images/Black Plain Tee.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Black Tee (Style 1)",
    price: 10000,
    img: "images/Black Tee.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Black Tee (Style 2)",
    price: 15000,
    isBestSeller: false,
    img: "images/Black Tee (2).JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Blue Tee",
    price: 15000,
    img: "images/Blue Tee.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Cream Color Tee",
    price: 10000,
    img: "images/Cream Color Tee.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Green Tee",
    price: 15000,
    img: "images/Green TEe.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Grey Tee",
    price: 15000,
    img: "images/Grey Tee.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Jerry Graphics Tee",
    price: 15000,
    img: "images/Mickey Graphics Tee.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Khaki Button-Up Shirt (Style 1)",
    price: 15000,
    img: "images/Khaki Button-up Shirt.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Khaki Button-Up Shirt (Style 2)",
    price: 15000,
    img: "images/Khaki Button-up Shirt (2).JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Leopard Print Roundneck",
    price: 15000,
    img: "images/Leopard Print Roundneck.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Leopard Print Roundneck (Pink)",
    price: 15000,
    img: "images/Leopard Print Roundneck(pink).JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Long Sleeve Button-Up Shirt (Black)",
    price: 20000,
    img: "images/Long Sleeve Button-up Shirt(black).JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Long Sleeve Button-Up Shirt (Brown)",
    price: 20000,
    img: "images/Long Sleeve Button-up Shirt(brown).JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Long Sleeve Graphics Tee",
    price: 20000,
    img: "images/Long Sleeve Graphics Tee.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Long Sleeve Graphics Tee (Brown)",
    price: 20000,
    img: "images/Long Sleeve Graphics Tee(brown).JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Long Sleeve Graphics Tee (Wine)",
    price: 20000,
    img: "images/Long Sleeve Graphics Tee(wine).JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "One Piece Black Tee",
    price: 15000,
    originalPrice: 19000,
    img: "images/One Piece Black Tee.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Printed Tee (Black)",
    price: 15000,
    img: "images/Printed Tee(black).JPG",
    stock: 0,
    cat: "tee",
    isNew: false,
  },
  {
    name: "Tom & Jerry Round Neck Tee",
    price: 15000,
    img: "images/Mickey Round Neck Tee.JPG",
    stock: 0,
    cat: "tee",
    isNew: false,
  },
  {
    name: "White Button-Up Shirt",
    price: 15000,
    img: "images/White Button-up Shirt.JPG",
    stock: 1,
    cat: "tee",
    isNew: false,
  },
  {
    name: "White Plain Tee",
    price: 10000,
    img: "images/White Plain Tee.JPG",
    stock: 0,
    cat: "tee",
    isNew: false,
  },
  // SNAPBACKS
  {
    name: "Black Strapless Cap (Style 1)",
    price: 15000,
    isBestSeller: false,
    img: "images/Black Strapless Cap.JPG",
    stock: 1,
    cat: "snapback",
    isNew: false,
  },
  {
    name: "Black Strapless Cap (Style 2)",
    price: 15000,
    img: "images/Black Strapless Cap (2).JPG",
    stock: 1,
    cat: "snapback",
    isNew: false,
  },
  {
    name: "Black Strapless Cap (Style 3)",
    price: 15000,
    img: "images/Black Strapless Cap (3).JPG",
    stock: 1,
    cat: "snapback",
    isNew: false,
  },
  {
    name: "Blue Strapless Cap (Style 1)",
    price: 15000,
    img: "images/Blue Strapless Cap.JPG",
    stock: 1,
    cat: "snapback",
    isNew: false,
  },
  {
    name: "Blue Strapless Cap (Style 2)",
    price: 15000,
    img: "images/Blue Strapless Cap (2).JPG",
    stock: 1,
    cat: "snapback",
    isNew: false,
  },
  {
    name: "Cream Strapless Cap",
    price: 15000,
    img: "images/Cream Strapless Cap.JPG",
    stock: 1,
    cat: "snapback",
    isNew: false,
  },
  {
    name: "Green Strapless Cap",
    price: 15000,
    img: "images/Green Strapless Cap.JPG",
    stock: 1,
    cat: "snapback",
    isNew: false,
  },
  // JOGGERS
  {
    name: "Blue Velvet Joggers",
    price: 15000,
    img: "images/Blue Velvet Joggers.JPG",
    stock: 0,
    cat: "joggers",
    isNew: false,
  },
  {
    name: "Brown Velvet Joggers",
    price: 15000,
    img: "images/Brown Velvet Joggers.JPG",
    stock: 0,
    cat: "joggers",
    isNew: false,
  },
  {
    name: "Velvet Joggers (Burgundy)",
    price: 15000,
    originalPrice: 18000,
    isBestSeller: false,
    img: "images/Velvet Joggers(burgundy).JPG",
    stock: 1,
    cat: "joggers",
    isNew: false,
  },
  // PANTS
  {
    name: "Blue Wide Leg Pant",
    price: 9000,
    originalPrice: 11500,
    img: "images/Blue Wide Leg Pant.JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Linen Free Pant (Black)",
    price: 9000,
    img: "images/Linen Free Pant(black).JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Linen Free Pant (Brown)",
    price: 9000,
    img: "images/Linen Free Pant(brown).JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Linen Free Pant (Caramel)",
    price: 9000,
    img: "images/Linen Free Pant(caramel).JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Linen Free Pant (Grey)",
    price: 9000,
    img: "images/Linen Free Pant (grey).JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Unisex Cargo (Black) Style 1",
    price: 15000,
    originalPrice: 19000,
    isBestSeller: false,
    img: "images/Unisex Cargo(black).JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Unisex Cargo (Black) Style 2",
    price: 15000,
    img: "images/Unisex Cargo(black 2).JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Unisex Cargo (Green) Style 1",
    price: 15000,
    img: "images/Unisex Cargo(green).JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Unisex Cargo (Green) Style 2",
    price: 15000,
    img: "images/Unisex Cargo(green) (2).JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Unisex Cargo (Grey)",
    price: 15000,
    img: "images/Unisex Cargo(grey).JPG",
    stock: 0,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Unisex Cargo (Khaki)",
    price: 15000,
    img: "images/Unisex Cargo(khaki).JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
  {
    name: "Wide Leg Pant (Yellow)",
    price: 9000,
    img: "images/Yellow Wide Leg Pant.JPG",
    stock: 1,
    cat: "pant",
    isNew: false,
  },
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

const _savedCart  = JSON.parse(localStorage.getItem('wt_cart2')) || [];
let cart          = hydrateCart(_savedCart);
let selectedSizes = {};
let activeCategory = 'all';
let searchQuery    = '';
let sortBy          = 'featured';

// ══════════════════════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════════════════════
function sanitize(str) {
    if (!str) return '';
    return String(str).replace(/[*_~`]/g, '').trim();
}

function renderStars(rating) {
    const full  = Math.floor(rating);
    const half  = rating - full >= 0.5;
    let out = '';
    for (let i = 0; i < full; i++) out += '&#9733;';
    if (half) out += '&#189;&#9733;';
    for (let i = full + (half ? 1 : 0); i < 5; i++) out += '&#9734;';
    return out;
}

function getDiscountInfo(p) {
    if (!p.originalPrice || p.originalPrice <= p.price) {
        return { hasDiscount: false, percentOff: 0 };
    }
    const percentOff = Math.round((1 - p.price / p.originalPrice) * 100);
    return { hasDiscount: true, percentOff };
}

function saveCart() {
    localStorage.setItem('wt_cart2', JSON.stringify(
        cart.map(i => ({ id: i.id, size: i.size, qty: i.qty }))
    ));
}

// ══════════════════════════════════════════════════════════════════════════════
// CART — updates the count badge and navigates to cart.html
// ══════════════════════════════════════════════════════════════════════════════
function updateCartUI() {
    const count = cart.reduce((a, b) => a + b.qty, 0);
    const el       = document.getElementById('cart-count');
    if (el) el.textContent = count;
    const drawerEl = document.getElementById('drawer-cart-count');
    if (drawerEl) drawerEl.textContent = count;
}

function openCart() {
    window.location.href = 'cart.html';
}

function closeCart() {
    // No sidebar — nothing to close
}

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
    saveCart();
    updateCartUI();
    showToast(`${p.name.toUpperCase()} added ✓ — tap cart to checkout`);
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

// ══════════════════════════════════════════════════════════════════════════════
// PRODUCT DETAIL — real page (product-detail.html?id=N), not a modal
// ══════════════════════════════════════════════════════════════════════════════
function openProductDetail(id) {
    window.location.href = `product-detail.html?id=${id}`;
}

function buildProductDetailHTML(p) {
    const sizes    = SIZES_MAP[p.cat] || ["S","M","L","XL","XXL"];
    const soldOut  = p.stock === 0;
    const lowStock = p.stock > 0 && p.stock <= 3;
    const selSize  = selectedSizes[p.id] || sizes[0];
    const discountInfo = getDiscountInfo(p);

    return `
        <div class="pd-layout">
            <div class="pd-img-box">
                <div class="badges">
                    ${p.isBestSeller ? `<div class="badge pd-badge-bestseller">&#9733; Best Seller</div>` : ''}
                    ${discountInfo.hasDiscount ? `<div class="badge pd-badge-sale">-${discountInfo.percentOff}%</div>` : ''}
                    ${p.isNew ? `<div class="badge pd-badge-new">NEW</div>` : ''}
                    ${lowStock ? `<div class="badge badge-low">Only ${p.stock} left</div>` : ''}
                </div>
                ${soldOut  ? `<div class="sold-overlay"><span>Sold Out</span></div>` : ''}
                <img id="pd-main-img" src="${p.img}" alt="${p.name}"
                    onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22380%22><rect fill=%22%23ece8e0%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23bbb%22 x=%2250%25%22 y=%2250%25%22 font-size=%2213%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22sans-serif%22>${p.name}</text></svg>'">
            </div>
            <div class="pd-info">
                <div class="pd-brand">WEARTEE.NG</div>
                <h2 class="pd-name">${p.name}</h2>
                ${p.rating ? `
                <div class="pd-rating-row">
                    <span class="pd-rating-stars">${renderStars(p.rating)}</span>
                    <span class="pd-rating-count">(${p.reviewCount || 0} reviews)</span>
                </div>` : ''}
                <div class="pd-price-row">
                    <span class="pd-price${discountInfo.hasDiscount ? ' on-sale' : ''}">&#8358;${p.price.toLocaleString()}</span>
                    ${discountInfo.hasDiscount ? `<span class="pd-price-original">&#8358;${p.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                ${discountInfo.hasDiscount ? `<div class="pd-price-savings">You save &#8358;${(p.originalPrice - p.price).toLocaleString()} (${discountInfo.percentOff}% off)</div>` : ''}
                <div class="pd-stock-status ${soldOut ? 'out' : 'in'}">
                    ${soldOut ? '&#10006; Out of Stock' : lowStock ? `&#9888; Only ${p.stock} left` : '&#10003; In Stock'}
                </div>
                <div class="pd-delivery-note">
                    <span>&#128666;</span> Delivery across Nigeria &bull; fee calculated in cart
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
                        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                        </svg>
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
        </div>
    `;
}

function initProductDetailPage() {
    const container = document.getElementById('pd-page-content');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id      = parseInt(params.get('id'), 10);
    const p       = PRODUCTS.find(x => x.id === id);

    if (!p) {
        container.innerHTML = `<div class="pd-not-found"><strong>NOT FOUND</strong>This product doesn't exist or is no longer available.</div>`;
        return;
    }

    document.title = `WearTee.ng | ${p.name}`;
    container.innerHTML = buildProductDetailHTML(p);
}

function pdSelectSize(id, size) {
    selectedSizes[id] = size;
    const row = document.getElementById(`pd-sizes-${id}`);
    if (row) {
        row.querySelectorAll('.pd-sz-btn').forEach(btn => {
            btn.classList.toggle('selected', btn.textContent === size);
        });
    }
    const gridRow = document.getElementById(`sizes-${id}`);
    if (gridRow) {
        gridRow.querySelectorAll('.sz-btn').forEach(btn => {
            btn.classList.toggle('selected', btn.textContent === size);
        });
    }
}

function addToCartFromDetail(id) {
    addToCart(id);
}

// ══════════════════════════════════════════════════════════════════════════════
// ORDER VIA WHATSAPP — builds a full product description, opens WhatsApp, AND
// logs it to Supabase in the exact shape your admin.html expects, tagged with
// status "whatsapp" so it shows up under Orders → Awaiting Action.
// ══════════════════════════════════════════════════════════════════════════════
async function orderViaWhatsAppDirect(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const sizes = SIZES_MAP[p.cat] || ["S","M","L","XL","XXL"];
    const size  = sizes.length === 1 ? sizes[0] : (selectedSizes[id] || sizes[0]);

    const productUrl = `${window.location.origin}${window.location.pathname.replace(/product-detail\.html.*$/, '')}product-detail.html?id=${id}`;

    const msg = `Enquiry from WearTee.ng\n\n` +
        `Product: ${p.name}\n` +
        `Category: ${p.cat.toUpperCase()}\n` +
        `Size: ${size}\n` +
        `Price: ₦${p.price.toLocaleString()}\n` +
        `Link: ${productUrl}\n\n` +
        `I'd like to order this item.`;

    // Fires in parallel — never blocks opening WhatsApp even if the insert fails
    logOrderEnquiry(p, size);

    window.open(`https://wa.me/2349067468815?text=${encodeURIComponent(msg)}`, '_blank');
}

// Inserts a row shaped exactly like admin.html's Orders table expects:
// ref, created_at, location, zone, items[{name,size,qty,price}], total, status
async function logOrderEnquiry(p, size) {
    const ref = `WA-${Date.now().toString(36).toUpperCase()}`;
    const order = {
        ref,
        created_at: new Date().toISOString(),
        location: 'Not provided (WhatsApp enquiry)',
        zone: null,
        items: [{ name: p.name, size: size, qty: 1, price: p.price }],
        total: p.price,
        status: 'whatsapp',
    };
    try {
        await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                Prefer: 'return=minimal',
            },
            body: JSON.stringify(order),
        });
    } catch (err) {
        console.warn('Could not log order enquiry:', err);
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// RENDER PRODUCTS (grid page only)
// ══════════════════════════════════════════════════════════════════════════════
function getFilteredProducts() {
    const filtered = PRODUCTS.filter(p => {
        const inStock     = p.stock > 0;
        const matchCat    = activeCategory === 'all' || p.cat === activeCategory;
        const matchSearch = !searchQuery ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.cat.toLowerCase().includes(searchQuery.toLowerCase());
        return inStock && matchCat && matchSearch;
    });

    const sorted = filtered.slice();
    switch (sortBy) {
        case 'bestselling':
            sorted.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
            break;
        case 'rating':
            sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sorted.sort((a, b) => b.id - a.id);
            break;
        default:
            break;
    }
    return sorted;
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filtered = getFilteredProducts();
    const resultsLabel = document.getElementById('results-label');
    if (resultsLabel) {
        resultsLabel.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;
    }

    if (!filtered.length) {
        grid.innerHTML = `<div class="no-results"><strong>EMPTY</strong>No results for "${searchQuery}"</div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const soldOut  = p.stock === 0;
        const lowStock = p.stock > 0 && p.stock <= 3;
        const sizes    = SIZES_MAP[p.cat] || ["S","M","L","XL","XXL"];
        const selSize  = selectedSizes[p.id] || sizes[0];
        const { hasDiscount, percentOff } = getDiscountInfo(p);

        const badgesHTML = `
            ${p.isBestSeller ? `<div class="badge badge-bestseller">&#9733; Best Seller</div>` : ''}
            ${hasDiscount ? `<div class="badge badge-sale">-${percentOff}%</div>` : ''}
            ${p.isNew ? `<div class="badge badge-new">NEW</div>` : ''}
            ${lowStock && !soldOut ? `<div class="badge badge-low">Only ${p.stock} left</div>` : ''}
        `;

        const priceHTML = hasDiscount ? `
            <span class="card-price on-sale">&#8358;${p.price.toLocaleString()}</span>
            <span class="card-price-original">&#8358;${p.originalPrice.toLocaleString()}</span>
        ` : `<span class="card-price">&#8358;${p.price.toLocaleString()}</span>`;

        const ratingHTML = p.rating ? `
            <div class="rating-row">
                <span class="rating-stars">${renderStars(p.rating)}</span>
                <span class="rating-count">(${p.reviewCount || 0})</span>
            </div>
        ` : '';

        return `
        <div class="card${soldOut ? ' disabled' : ''}">
            <div class="img-box" onclick="openProductDetail(${p.id})" style="cursor:pointer;">
                <div class="badges">${badgesHTML}</div>
                ${soldOut ? `<div class="sold-overlay"><span>Sold Out</span></div>` : ''}
                <img src="${p.img}" alt="${p.name}" loading="lazy"
                    onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22380%22><rect fill=%22%23ece8e0%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23bbb%22 x=%2250%25%22 y=%2250%25%22 font-size=%2213%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22sans-serif%22>${p.name}</text></svg>'">
            </div>
            <div class="card-body">
                <div class="card-meta" onclick="openProductDetail(${p.id})" style="cursor:pointer;">
                    <span class="card-name">${p.name}</span>
                </div>
                <div class="card-price-row">${priceHTML}</div>
                ${ratingHTML}
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
// SEARCH & CATEGORY SIDEBAR
// ══════════════════════════════════════════════════════════════════════════════
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', e => {
        searchQuery = e.target.value;
        renderProducts();
    });
}

const catList = document.getElementById('cat-list');
if (catList) {
    catList.addEventListener('click', e => {
        const item = e.target.closest('.cat-item');
        if (!item) return;
        document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
        item.classList.add('active');
        activeCategory = item.dataset.cat;
        renderProducts();
        closeCatDrawer();
    });
}

const catSidebar  = document.getElementById('cat-sidebar');
const catToggle   = document.getElementById('cat-toggle');
const catClose    = document.getElementById('cat-close');
const catOverlay  = document.getElementById('cat-overlay');

function openCatDrawer() {
    if (catSidebar) catSidebar.classList.add('show');
    if (catOverlay) catOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeCatDrawer() {
    if (catSidebar) catSidebar.classList.remove('show');
    if (catOverlay) catOverlay.classList.remove('show');
    document.body.style.overflow = '';
}
if (catToggle)  catToggle.addEventListener('click', openCatDrawer);
if (catClose)   catClose.addEventListener('click', closeCatDrawer);
if (catOverlay) catOverlay.addEventListener('click', closeCatDrawer);

const sortSelect = document.getElementById('sort-select');
if (sortSelect) {
    sortSelect.addEventListener('change', e => {
        sortBy = e.target.value;
        renderProducts();
    });
}

// ══════════════════════════════════════════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════════════════════════════════════════
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
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
        console.warn('Could not sync stock:', err);
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════════════════════════
renderProducts();
initProductDetailPage();
updateCartUI();
syncStockFromSupabase();
