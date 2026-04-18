const PRODUCTS = [
    // ── NEWEST ARRIVALS (tagged isNew: true) ──────────────────────────────
    { name: "Asymmetric Pleated Top (Black)", price: 10000, img: "images/Asymmetric Pleated Top(black).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Asymmetric Pleated Top (Red)", price: 10000, img: "images/Asymmetric Pleated Top(red).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Backless Top(black)", price: 10000, img: "images/Backless Top(black).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Backless Top(wine)", price: 10000, img: "images/Backless Top(wine).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Black Graphic Tee", price: 10000, img: "images/Black Graphics Tee.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Black Plain Tee", price: 8500, img: "images/Black Plain Tee.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Black Tank Top", price: 6000, img: "images/Black Tank Top.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Black V-neck Short Sleeve Basic Top", price: 10000, img: "images/Black V-neck Short Sleeve Basic Top.JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Black Straless Cap", price: 15000, img: "images/Black Strapless Cap.JPG", stock: 10, cat: "snapback", isNew: true },
    { name: "Black Straless Cap", price: 15000, img: "images/Black Strapless Cap (2).JPG", stock: 10, cat: "snapback", isNew: true },
    { name: "Black Straless Cap", price: 15000, img: "images/Black Strapless Cap (3).JPG", stock: 10, cat: "snapback", isNew: true },
    { name: "Black Tee", price: 15000, img: "images/Black Tee (2).JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Black Tee", price: 10000, img: "images/Black Tee.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Blue Strapless Cap", price: 15000, img: "images/Blue Strapless Cap (2).JPG", stock: 10, cat: "snapback", isNew: true },
    { name: "Blue Strapless Cap", price: 15000, img: "images/Blue Strapless Cap.JPG", stock: 10, cat: "snapback", isNew: true },
    { name: "Blue Tee", price: 15000, img: "images/Leopard Print Roundneck.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Blue Velvet Joggers", price: 15000, img: "images/Blue Velvet Joggers.JPG", stock: 10, cat: "joggers", isNew: true },
    { name: "Blue Wide leg Pant", price: 8000, img: "images/Blue Wide Leg Pant.JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Brown Tank Top", price: 6000, img: "images/Brown Tank Top.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Brown Velvet Joggers", price: 15000, img: "images/Brown Velvet Joggers.JPG", stock: 0, cat: "joggers", isNew: true },
    { name: "Cream Color Tee", price: 10000, img: "images/Cream Color Tee.JPG", stock: 0, cat: "tee", isNew: true },
    { name: "Cream Strapless Cap", price: 15000, img: "images/Cream Strapless Cap.JPG", stock: 10, cat: "snapback", isNew: true },
    { name: "Green Strapless Cap", price: 15000, img: "images/Green Strapless Cap.JPG", stock: 10, cat: "snapback", isNew: true },
    { name: "Green Tee", price: 15000, img: "images/Green TEe.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Grey Tank Top", price: 6000, img: "images/Grey Tank Top.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Grey Tee", price: 15000, img: "images/Grey Tee.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Basic Top", price: 9000, img: "images/Heart Shaped Basic Top(lotus).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Basic Top(pink)", price: 9000, img: "images/Heart Shaped Basic Top(pink).JPG", stock: 10, cat: "basic topd", isNew: true },
    { name: "Khaki Shirt", price: 15000, img: "images/Khaki Button-up Shirt (2).JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Khaki Shirt", price: 15000, img: "images/Khaki Button-up Shirt.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Leopard Print Roundneck", price: 15000, img: "images/Leopard Print Roundneck.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Leopard Print Roundneck(pink)", price: 15000, img: "images/Leopard Print Roundneck(pink).JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Linen Free Pant(grey)", price: 8000, img: "images/Linen Free Pant (grey).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Linen Free Pant(black)", price: 8000, img: "images/Linen Free Pant(black).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Linen Free Pant(brown)", price: 8000, img: "images/Linen Free Pant(brown).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Linen Free Pant(caramel)", price: 8000, img: "images/Linen Free Pant(caramel).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Long Basic Top(blue)", price: 10000, img: "images/Long Basic Top(blue).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Long Basic Top(rose red)", price: 10000, img: "images/Long Basic Top(rose red).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Longoff Shoulder Top(grey)", price: 10000, img: "images/Long Off Shoulder Top(grey).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Longoff Shoulder Top(red)", price: 10000, img: "images/Long Off Shoulder Top(red).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Longsleeve Basic Top", price: 10000, img: "images/Long Sleeve Basic Top.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Longsleeve Basic Top(brown)", price: 10000, img: "images/Long Sleeve Basic Top(brown).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Longsleeve Button-up Shirt(black)", price: 20000, img: "images/Long Sleeve Button-up Shirt(black).JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Longsleeve Button-up Shirt(brown)", price: 20000, img: "images/Long Sleeve Button-up Shirt(brown).JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Longsleeve Graphics Tee", price: 20000, img: "images/Long Sleeve Graphics Tee.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Longsleeve Graphics Tee(brown)", price: 20000, img: "images/Long Sleeve Graphics Tee(brown).JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Longsleeve Graphics Tee(wine)", price: 20000, img: "images/Long Sleeve Graphics Tee(wine).JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Longsleeve Wrap Top(black stripe)", price: 12000, img: "images/Long sleeve Wrap Top (black stripe).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Longsleeve Wrap Top", price: 12000, img: "images/Long Sleeve Wrap Top.JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Longsleeve Wrap Top(pink)", price: 12000, img: "images/Long Sleeve Wrap Top(pink).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Longsleeve Wrap Top", price: 12000, img: "images/Long Sleeve Wrap-Top.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Mesh Top", price: 8000, img: "images/Mesh Top.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Mesh Top", price: 8000, img: "images/Mesh Top (2).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Mesh Top", price: 8000, img: "images/Mesh Top (3).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Mesh Top", price: 8000, img: "images/Mesh Top (4).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Jerry Graphics Tee", price: 15000, img: "images/Mickey Graphics Tee.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Tom & Jerry Round Neck Tee", price: 15000, img: "images/Mickey Round Neck Tee.JPG", stock: 0, cat: "tee", isNew: true },
    { name: "Navy Blue Tee", price: 15000, img: "images/Navy Blue Tee.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "One Piece Black Tee", price: 15000, img: "images/One Piece Black Tee.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "Printed Tee(black)", price: 15000, img: "images/Printed Tee(black).JPG", stock: 0, cat: "tee", isNew: true },
    { name: "Ripped Top(caramel)", price: 10000, img: "images/Ribbed Top(camel).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Ripped Top(purple)", price: 10000, img: "images/Ribbed Top(purple).JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Short Basic Top(black)", price: 10000, img: "images/Short Basic Top(black).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Short Basic Top(grey)", price: 10000, img: "images/Short Basic Top(grey).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "Short Basic Top(pink)", price: 10000, img: "images/Short Basic Top(pink).JPG", stock: 0, cat: "basic tops", isNew: true },
    { name: "U Neck Basic Top", price: 8000, img: "images/U NEck Basic Top.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Unisex Cargo(black)", price: 15000, img: "images/Unisex Cargo(black 2).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Unisex Cargo(black)", price: 15000, img: "images/Unisex Cargo(black).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Unisex Cargo(green)", price: 15000, img: "images/Unisex Cargo(green) (2).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Unisex Cargo(green)", price: 15000, img: "images/Unisex Cargo(green).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Unisex Cargo(grey)", price: 15000, img: "images/Unisex Cargo(grey).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Unisex Cargo(khaki)", price: 15000, img: "images/Unisex Cargo(khaki).JPG", stock: 10, cat: "pant", isNew: true },
    { name: "Velvet Joggers(burgundy)", price: 15000, img: "images/Velvet Joggers(burgundy).JPG", stock: 0, cat: "joggers", isNew: true },
    { name: "White Button-up Shirt", price: 15000, img: "images/White Button-up Shirt.JPG", stock: 10, cat: "tee", isNew: true },
    { name: "White Plain Tee", price: 10000, img: "images/White Plain Tee.JPG", stock: 0, cat: "tee", isNew: true },
    { name: "V-neck Shortsleeve Basic Top(yellow)", price: 8000, img: "images/Yellow V-neck Short Sleeve Basic Top.JPG", stock: 10, cat: "basic tops", isNew: true },
    { name: "Wide Leg Pant(yellow)", price: 8000, img: "images/Yellow Wide Leg Pant.JPG", stock: 10, cat: "pant", isNew: true },

]

const SIZES_MAP = {
    tee: ["S", "M", "L", "XL", "XXL"],
    snapback: ["One Size"],
    pant: ["S", "M", "L", "XL", "XXL"],
    joggers: ["S", "M", "L", "XL", "XXL"],
    "basic tops": ["S", "M", "L", "XL", "XXL"],
};

// Assign stable numeric IDs based on array index
PRODUCTS.forEach((p, i) => { p.id = i; });

// STATE
let cart = JSON.parse(localStorage.getItem('wt_cart2')) || [];
let selectedSizes = {};
let activeCategory = 'all';
let searchQuery = '';
let checkoutStep = 1;
let deliveryFee = 0;
let deliveryName = 'Pickup';
let paymentMethod = 'bank';
let checkoutOrderRef = '';

// -- RENDER PRODUCTS --
function getFilteredProducts() {
    return PRODUCTS.filter(p => {
        const matchCat = activeCategory === 'all' || p.cat === activeCategory;
        const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.cat.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const filtered = getFilteredProducts();
    const label = document.getElementById('results-label');
    label.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;

    if (!filtered.length) {
        grid.innerHTML = `<div class="no-results"><strong>EMPTY</strong>No results for "${searchQuery}"</div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const soldOut = p.stock === 0;
        const lowStock = p.stock > 0 && p.stock <= 5;
        const sizes = SIZES_MAP[p.cat] || ["S", "M", "L", "XL", "XXL"];
        const selSize = selectedSizes[p.id] || sizes[0];

        return `
      <div class="card${soldOut ? ' disabled' : ''}" style="${soldOut ? 'pointer-events:none;opacity:.65' : ''}">
        <div class="img-box">
          ${p.isNew ? `<div class="badge badge-new">NEW</div>` : ''}
          ${!p.isNew && lowStock ? `<div class="badge badge-low">Only ${p.stock} left</div>` : ''}
          ${soldOut ? `<div class="sold-overlay"><span>Sold Out</span></div>` : ''}
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22380%22><rect fill=%22%23ece8e0%22 width=%22100%25%22 height=%22100%25%22/><text fill=%22%23bbb%22 x=%2250%25%22 y=%2250%25%22 font-size=%2213%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22sans-serif%22>${p.name}</text></svg>'">
        </div>
        <div class="card-body">
          <div class="card-meta">
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
      </div>
    `;
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

// -- CART --
function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    const sizes = SIZES_MAP[p.cat] || ["S", "M", "L", "XL", "XXL"];
    const size = sizes.length === 1 ? sizes[0] : (selectedSizes[id] || sizes[0]);

    const inCart = cart.filter(i => i.id === id && i.size === size).reduce((a, b) => a + b.qty, 0);
    if (p.stock !== undefined && inCart >= p.stock) {
        showToast(`Only ${p.stock} available in this size`);
        return;
    }

    const item = cart.find(i => i.id === id && i.size === size);
    if (item) { item.qty++; } else { cart.push({ ...p, size, qty: 1 }); }

    saveCart();
    updateCartUI();
    openCart();
    showToast(`${p.name.toUpperCase()} added \u2713`);
}

function removeFromCart(id, size) {
    cart = cart.filter(i => !(i.id === id && i.size === size));
    saveCart();
    updateCartUI();
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

function saveCart() { localStorage.setItem('wt_cart2', JSON.stringify(cart)); }

function updateCartUI() {
    const count = cart.reduce((a, b) => a + b.qty, 0);
    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-subtotal').textContent = `\u20A6${subtotal.toLocaleString()}`;
    document.getElementById('cart-total').textContent = `\u20A6${subtotal.toLocaleString()}`;

    const list = document.getElementById('cart-list');
    if (!cart.length) {
        list.innerHTML = `<div class="cart-empty"><div class="e-icon">&#128722;</div><div>Your cart is empty</div></div>`;
        return;
    }
    list.innerHTML = cart.map(i => `
    <div class="cart-item">
      <img src="${i.img}" alt="${i.name}" onerror="this.style.background='#ece8e0'">
      <div class="ci-info">
        <div class="ci-name">${i.name}</div>
        <div class="ci-size">SIZE: ${i.size}</div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="changeQty(${i.id},'${i.size}',-1)">&#8722;</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i.id},'${i.size}',1)">+</button>
        </div>
        <button class="rm-btn" onclick="removeFromCart(${i.id},'${i.size}')">Remove</button>
      </div>
      <div class="ci-subtotal">\u20A6${(i.price * i.qty).toLocaleString()}</div>
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

// -- CHECKOUT --
function openCheckout() {
    if (!cart.length) { showToast("Your cart is empty"); return; }
    closeCart();
    document.getElementById('checkout-modal').classList.add('show');
    document.getElementById('overlay').classList.add('show');
    goStep(1);
}
function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

function goStep(n) {
    if (n > 1) {
        const name = document.getElementById('f-name').value.trim();
        const phone = document.getElementById('f-phone').value.trim();
        if (!name || !phone) { showToast("Please fill in your name and phone number"); return; }
    }
    if (n > 2 && deliveryFee > 0) {
        const addr = document.getElementById('f-address').value.trim();
        if (!addr) { showToast("Please enter your delivery address"); return; }
    }

    checkoutStep = n;
    document.querySelectorAll('.form-section').forEach(s => s.classList.remove('active'));
    const sec = document.getElementById(n === 'success' ? 'step-success' : `step-${n}`);
    if (sec) sec.classList.add('active');

    document.querySelectorAll('.step').forEach((el, i) => {
        el.classList.remove('active', 'done');
        if (i + 1 < n) el.classList.add('done');
        if (i + 1 == n) el.classList.add('active');
    });

    if (n === 3) buildOrderSummary();

    const titles = { 1: 'Your Details', 2: 'Delivery', 3: 'Review & Pay', success: 'Order Confirmed' };
    document.getElementById('modal-title').textContent = titles[n] || 'Checkout';
    if (n === 'success') document.getElementById('steps-ui').style.display = 'none';
}

function selectDelivery(el, fee, name) {
    document.querySelectorAll('.delivery-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    deliveryFee = fee;
    deliveryName = name;
    const addrSec = document.getElementById('address-section');
    addrSec.style.display = fee > 0 ? 'block' : 'none';
}

function selectPayment(el, method) {
    document.querySelectorAll('.pay-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    paymentMethod = method;
    const btn = document.getElementById('place-order-btn');
    btn.textContent = method === 'whatsapp' ? 'Open WhatsApp \u2192' : 'Place Order \u2192';
}

function buildOrderSummary() {
    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    const total = subtotal + deliveryFee;
    const box = document.getElementById('order-summary-box');
    box.innerHTML = `
    <h4>Order Summary</h4>
    ${cart.map(i => `<div class="os-item"><span>${i.name} (${i.size}) \u00D7${i.qty}</span><span>\u20A6${(i.price * i.qty).toLocaleString()}</span></div>`).join('')}
    <div class="os-item"><span>Delivery (${deliveryName})</span><span>${deliveryFee ? '₦' + deliveryFee.toLocaleString() : deliveryName === 'Pickup' ? 'Pickup' : 'Location-based'}</span></div>
    <div class="os-total"><span>Total</span><span>\u20A6${total.toLocaleString()}</span></div>
  `;
}

function placeOrder() {
    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    const total = subtotal + deliveryFee;
    checkoutOrderRef = 'WT-' + Date.now().toString().slice(-6);
    document.getElementById('order-ref-display').textContent = `Order Ref: ${checkoutOrderRef}`;

    if (paymentMethod === 'whatsapp') { sendWhatsApp(); return; }
    goStep('success');
}

function sendWhatsApp() {
    const name = document.getElementById('f-name').value || 'Customer';
    const phone = document.getElementById('f-phone').value || '';
    const addr = document.getElementById('f-address').value || 'Pickup';
    const subtotal = cart.reduce((a, b) => a + (b.price * b.qty), 0);
    const total = subtotal + deliveryFee;
    const ref = checkoutOrderRef || ('WT-' + Date.now().toString().slice(-6));

    let msg = `*New Order from WearTee.ng*%0A`;
    msg += `Ref: ${ref}%0A%0A`;
    msg += `*Customer:* ${name}%0A`;
    msg += `*Phone:* ${phone}%0A`;
    msg += `*Delivery:* ${deliveryName}%0A`;
    if (addr !== 'Pickup') msg += `*Address:* ${addr}%0A`;
    msg += `%0A*Items:*%0A`;
    cart.forEach(i => { msg += `- ${i.name.toUpperCase()} [${i.size}] x${i.qty}: N${(i.price * i.qty).toLocaleString()}%0A`; });
    msg += `%0ASubtotal: N${subtotal.toLocaleString()}%0A`;
    msg += `Delivery: ${deliveryFee ? 'N' + deliveryFee.toLocaleString() : deliveryName === 'Pickup' ? 'Pickup (No Delivery)' : 'TBD (location-based)'}%0A`;
    msg += `*Total: N${total.toLocaleString()}*%0A%0A`;
    msg += `Payment: ${paymentMethod === 'bank' ? 'Bank Transfer' : paymentMethod === 'pod' ? 'Pay on Delivery' : 'WhatsApp'}`;

    window.open(`https://wa.me/2349067468815?text=${msg}`, '_blank');
    goStep('success');
    cart = []; saveCart(); updateCartUI();
}

// -- SEARCH & FILTER --
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

// -- CART OPEN/CLOSE --
document.getElementById('cart-open').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
document.getElementById('overlay').addEventListener('click', () => {
    closeCart();
    closeCheckout();
});

// -- TOAST --
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// INIT
renderProducts();
updateCartUI();
