// Nomor WhatsApp Admin / Owner Inval Food (Format 628...)
const ADMIN_WA_NUMBER = "6282228773853";

// Data Kategori
const categories = [
  { id: "all", label: "Semua Menu", icon: "🍽️" },
  { id: "nasi", label: "Nasi & Mie", icon: "🍳" },
  { id: "sate", label: "Sate & Bakaran", icon: "🍢" },
  { id: "penyetan", label: "Penyetan", icon: "🍗" },
  { id: "martabak", label: "Martabak & Camilan", icon: "🥞" },
  { id: "bakso", label: "Bakso & Mie Ayam", icon: "🍜" },
  { id: "minuman", label: "Minuman Segar", icon: "🧊" }
];

// Data Lapak Food Court
const stalls = [
  {
    id: "lapak-1",
    name: "Nasi Goreng Gila Bang Jali",
    specialty: "Spesialis Nasi Goreng, Mie Tek-Tek & Kwetiau",
    rating: "4.9",
    hours: "16.00 - 00.00 WIB",
    booth: "Stan A1",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "lapak-2",
    name: "Sate Madura Cak Mat",
    specialty: "Sate Ayam, Sate Kambing & Lontong Bumbu Kacang",
    rating: "4.8",
    hours: "15.30 - 23.00 WIB",
    booth: "Stan A2",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "lapak-3",
    name: "Martabak & Terang Bulan 99",
    specialty: "Martabak Telor Bebek & Terang Bulan Premium",
    rating: "4.9",
    hours: "16.00 - 23.30 WIB",
    booth: "Stan B1",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "lapak-4",
    name: "Penyetan & Lalapan Mas Brewok",
    specialty: "Ayam Goreng, Lele, Bebek & Sambal Bawang Pedas",
    rating: "4.7",
    hours: "11.00 - 22.00 WIB",
    booth: "Stan B2",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "lapak-5",
    name: "Bakso & Mie Ayam Solo Pakde",
    specialty: "Bakso Urat, Bakso Beranak & Mie Ayam Ceker",
    rating: "4.8",
    hours: "10.00 - 21.30 WIB",
    booth: "Stan C1",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "lapak-6",
    name: "Es Teh & Aneka Minuman Segar",
    specialty: "Es Teh Jumbo, Es Jeruk Peras & Es Campur",
    rating: "4.9",
    hours: "10.00 - 23.30 WIB",
    booth: "Stan C2",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80"
  }
];

// Data Menu Makanan Kaki Lima
const menus = [
  {
    id: "m1",
    stallId: "lapak-1",
    category: "nasi",
    name: "Nasi Goreng Gila Spesial",
    price: 18000,
    desc: "Nasi goreng smoky dengan topping bakso, sosis, suwiran ayam, dan telur ceplok.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m2",
    stallId: "lapak-1",
    category: "nasi",
    name: "Mie Tek-Tek Goreng Jawa",
    price: 15000,
    desc: "Mie kuning dimasak di atas arang dengan kecap manis, kol, sawi, dan acar segar.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m3",
    stallId: "lapak-2",
    category: "sate",
    name: "Sate Ayam Madura (10 Tusuk)",
    price: 20000,
    desc: "Daging ayam empuk dibakar dengan bumbu kacang kental, kecap manis, dan bawang goreng.",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m4",
    stallId: "lapak-2",
    category: "sate",
    name: "Sate Kambing Bumbu Kecap (10 Tusuk)",
    price: 28000,
    desc: "Potongan daging kambing muda tanpa bau prengus disajikan dengan irisan cabai & tomat.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m5",
    stallId: "lapak-3",
    category: "martabak",
    name: "Terang Bulan Cokelat Kacang Keju",
    price: 25000,
    desc: "Adonan lembut bersarang dengan lelehan mentega, meses cokelat, kacang sangrai & keju parut.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m6",
    stallId: "lapak-3",
    category: "martabak",
    name: "Martabak Telor Bebek Spesial",
    price: 27000,
    desc: "Kulit renyah berisi 3 butir telur bebek, daging cincang berbumbu kari, dan daun bawang.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m7",
    stallId: "lapak-4",
    category: "penyetan",
    name: "Ayam Goreng Penyet + Nasi",
    price: 17000,
    desc: "Ayam ungkep bumbu kuning digoreng garing, dipenyet dengan sambal bawang ekstra pedas.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m8",
    stallId: "lapak-4",
    category: "penyetan",
    name: "Lele Terbang Kremes + Nasi",
    price: 14000,
    desc: "Dua ekor lele goreng renyah lengkap dengan kremesan gurih, lalapan, dan terong goreng.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m9",
    stallId: "lapak-5",
    category: "bakso",
    name: "Bakso Urat Komplit",
    price: 16000,
    desc: "Bakso urat sapi asli ukuran jumbo dengan mie kuning, bihun, tahu bakso, dan kuah kaldu gurih.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m10",
    stallId: "lapak-6",
    category: "minuman",
    name: "Es Teh Manis Jumbo",
    price: 5000,
    desc: "Teh melati seduh asli dengan gula murni dan es batu kristal ukuran gelas besar.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m11",
    stallId: "lapak-6",
    category: "minuman",
    name: "Es Jeruk Peras Murni",
    price: 7000,
    desc: "Perasan jeruk pontianak segar tanpa pemanis buatan, pas untuk teman makan pedas.",
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80"
  }
];

// State Aplikasi
let cart = [];
let activeCategory = "all";
let currentStallId = null;

function formatRupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function getStallName(stallId) {
  const found = stalls.find(s => s.id === stallId);
  return found ? found.name : "Lapak Food Court";
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ================= DROPLIST MOBILE NAVBAR =================
function toggleMobileDropdown() {
  const dropdown = document.getElementById("mobile-dropdown");
  const icon = document.getElementById("mobile-menu-icon");
  const isOpen = dropdown.classList.toggle("open");
  icon.setAttribute("data-lucide", isOpen ? "x" : "menu");
  lucide.createIcons();
}

function closeMobileDropdown() {
  const dropdown = document.getElementById("mobile-dropdown");
  const icon = document.getElementById("mobile-menu-icon");
  if (dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
    icon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  }
}

function mobileNavAction(pageName) {
  closeMobileDropdown();
  navigateTo(pageName);
}

// ================= KATEGORI & PENCARIAN =================
function renderCategories() {
  const container = document.getElementById("category-list");
  container.innerHTML = categories.map(cat => `
    <button class="cat-chip ${activeCategory === cat.id ? "active" : ""}" onclick="selectCategory('${cat.id}')">
      <span>${cat.icon}</span>
      <span>${cat.label}</span>
    </button>
  `).join("");
}

function selectCategory(catId) {
  activeCategory = catId;
  renderCategories();
  renderMenus();
  scrollToSection("menu-section");
}

function handleSearch(event, shouldScroll = false) {
  if (event && event.type === "submit") {
    event.preventDefault();
  }
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  if (input.value.trim().length > 0) {
    clearBtn.classList.add("visible");
  } else {
    clearBtn.classList.remove("visible");
  }

  renderMenus();

  if (shouldScroll) {
    scrollToSection("menu-section");
  }
}

function resetSearch() {
  const input = document.getElementById("search-input");
  input.value = "";
  document.getElementById("clear-search-btn").classList.remove("visible");
  renderMenus();
}

function resetAllFilters() {
  activeCategory = "all";
  resetSearch();
  renderCategories();
  renderMenus();
}

// ================= RENDER LAPAK & MENU =================
function renderStalls() {
  const container = document.getElementById("stall-grid");
  container.innerHTML = stalls.map(stall => `
    <div class="stall-card" onclick="openStallDetail('${stall.id}')">
      <img src="${stall.image}" alt="${stall.name}" class="stall-cover" />
      <div class="stall-info">
        <div class="stall-top">
          <h3>${stall.name}</h3>
          <span class="rating-pill">⭐ ${stall.rating}</span>
        </div>
        <p class="subtitle" style="margin-bottom: 8px;">${stall.specialty}</p>
        <div class="stall-meta">
          <span>📍 ${stall.booth}</span>
          <span>🕒 ${stall.hours}</span>
        </div>
      </div>
    </div>
  `).join("");
}

function createMenuCardHTML(item) {
  const inCart = cart.find(c => c.menuId === item.id);
  const actionHTML = inCart
    ? `<div class="qty-control">
         <button onclick="updateQty('${item.id}', -1)">-</button>
         <span>${inCart.qty}</span>
         <button onclick="updateQty('${item.id}', 1)">+</button>
       </div>`
    : `<button class="btn-add" onclick="updateQty('${item.id}', 1)">+ Tambah</button>`;

  return `
    <div class="menu-card">
      <div class="menu-img-wrap" onclick="openMenuModal('${item.id}')" title="Klik untuk detail menu">
        <img src="${item.image}" alt="${item.name}" class="menu-img" />
        <span class="menu-zoom-hint">Lihat Detail</span>
      </div>
      <div class="menu-body">
        <div class="menu-stall-tag" onclick="openStallDetail('${item.stallId}')">🏪 ${getStallName(item.stallId)}</div>
        <h3 class="menu-title">${item.name}</h3>
        <p class="menu-desc">${item.desc}</p>
        <div class="menu-footer">
          <span class="menu-price">${formatRupiah(item.price)}</span>
          ${actionHTML}
        </div>
      </div>
    </div>
  `;
}

function renderMenus() {
  const keyword = document.getElementById("search-input").value.toLowerCase().trim();
  const titleEl = document.getElementById("menu-section-title");
  const subEl = document.getElementById("menu-section-subtitle");
  const resetBtn = document.getElementById("btn-reset-filter");

  const filtered = menus.filter(item => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchSearch =
      item.name.toLowerCase().includes(keyword) ||
      item.desc.toLowerCase().includes(keyword) ||
      getStallName(item.stallId).toLowerCase().includes(keyword);
    return matchCat && matchSearch;
  });

  // Update judul sesuai filter aktif
  const activeCatObj = categories.find(c => c.id === activeCategory);
  if (keyword) {
    titleEl.textContent = `Hasil pencarian "${keyword}" (${filtered.length})`;
    subEl.textContent = "Menampilkan menu & lapak yang cocok";
    resetBtn.style.display = "inline-block";
  } else if (activeCategory !== "all") {
    titleEl.textContent = `Kategori: ${activeCatObj.label} (${filtered.length})`;
    subEl.textContent = "Klik foto menu untuk melihat detail porsi";
    resetBtn.style.display = "inline-block";
  } else {
    titleEl.textContent = "Menu Kaki Lima Pilihan";
    subEl.textContent = "Bisa campur menu dari berbagai lapak sekaligus";
    resetBtn.style.display = "none";
  }

  const grid = document.getElementById("menu-grid");
  if (filtered.length === 0) {
    grid.innerHTML = `<p class="subtitle">Menu yang kamu cari belum tersedia. Coba kata kunci lain ya!</p>`;
    return;
  }
  grid.innerHTML = filtered.map(createMenuCardHTML).join("");
}

// ================= MODAL QUICK VIEW FOTO MENU =================
function openMenuModal(menuId) {
  const item = menus.find(m => m.id === menuId);
  if (!item) return;

  document.getElementById("modal-menu-img").src = item.image;
  document.getElementById("modal-menu-stall").textContent = "🏪 " + getStallName(item.stallId);
  document.getElementById("modal-menu-title").textContent = item.name;
  document.getElementById("modal-menu-desc").textContent = item.desc;
  document.getElementById("modal-menu-price").textContent = formatRupiah(item.price);

  const addBtn = document.getElementById("modal-add-btn");
  addBtn.onclick = () => {
    updateQty(item.id, 1);
    closeMenuModal();
  };

  document.getElementById("menu-modal").classList.add("open");
}

function closeMenuModal() {
  document.getElementById("menu-modal").classList.remove("open");
}

// ================= NAVIGASI SPA =================
function navigateTo(pageName) {
  closeMobileDropdown();
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page-${pageName}`).classList.add("active");

  document.querySelectorAll(".nav-link").forEach(btn => btn.classList.remove("active-nav"));
  const activeNavBtn = document.getElementById(`nav-link-${pageName}`);
  if (activeNavBtn) activeNavBtn.classList.add("active-nav");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pageName === "checkout") {
    renderCheckoutPage();
  }
  updateCartSummary();
  lucide.createIcons();
}

function openStallDetail(stallId) {
  currentStallId = stallId;
  const stall = stalls.find(s => s.id === stallId);
  if (!stall) return;

  document.getElementById("stall-detail-header").innerHTML = `
    <img src="${stall.image}" alt="${stall.name}" />
    <div class="stall-banner-body">
      <span class="pill-badge">📍 ${stall.booth} • ⭐ ${stall.rating}</span>
      <h1 style="font-size: 1.6rem; margin-bottom: 8px;">${stall.name}</h1>
      <p class="subtitle" style="margin-bottom: 12px;">${stall.specialty}</p>
      <p style="font-size: 0.88rem; color: var(--primary-dark); font-weight: 600;">🕒 Jam Operasional: ${stall.hours}</p>
    </div>
  `;

  renderStallMenus();
  navigateTo("stall");
}

function renderStallMenus() {
  if (!currentStallId) return;
  const stallMenus = menus.filter(m => m.stallId === currentStallId);
  document.getElementById("stall-menu-grid").innerHTML = stallMenus.map(createMenuCardHTML).join("");
}

function contactOwnerWA() {
  const text = encodeURIComponent("Halo Owner Gigu Food! Saya mau tanya-tanya seputar kemitraan lapak / pemesanan food court.");
  window.open(`https://wa.me/${ADMIN_WA_NUMBER}?text=${text}`, "_blank");
}

// ================= MANAJEMEN KERANJANG & WA =================
function updateQty(menuId, delta) {
  const index = cart.findIndex(c => c.menuId === menuId);
  if (index > -1) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
  } else if (delta > 0) {
    cart.push({ menuId, qty: 1 });
    showToast("Menu ditambahkan ke keranjang!");
  }

  refreshUI();
}

function clearCart() {
  cart = [];
  refreshUI();
}

function refreshUI() {
  renderMenus();
  renderStallMenus();
  updateCartSummary();
  if (document.getElementById("page-checkout").classList.contains("active")) {
    renderCheckoutPage();
  }
}

function updateCartSummary() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => {
    const menu = menus.find(m => m.id === item.menuId);
    return sum + (menu ? menu.price * item.qty : 0);
  }, 0);

  const uniqueStalls = new Set(
    cart.map(item => menus.find(m => m.id === item.menuId)?.stallId)
  ).size;

  document.getElementById("nav-cart-count").textContent = totalQty;
  document.getElementById("mobile-cart-count").textContent = totalQty;
  document.getElementById("fcb-count").textContent = `${totalQty} Item`;
  document.getElementById("fcb-stalls").textContent = `Dari ${uniqueStalls} lapak`;
  document.getElementById("fcb-total").textContent = formatRupiah(subtotal);

  const floatingBar = document.getElementById("floating-cart-bar");
  const isCheckoutPage = document.getElementById("page-checkout").classList.contains("active");

  if (totalQty > 0 && !isCheckoutPage) {
    floatingBar.classList.add("visible");
  } else {
    floatingBar.classList.remove("visible");
  }
}

function renderCheckoutPage() {
  const listEl = document.getElementById("checkout-cart-list");
  if (cart.length === 0) {
    listEl.innerHTML = `<p class="subtitle">Keranjang masih kosong. Yuk pilih jajanan kaki lima dulu!</p>`;
  } else {
    listEl.innerHTML = cart.map(item => {
      const menu = menus.find(m => m.id === item.menuId);
      return `
        <div class="cart-item-row">
          <div>
            <div class="menu-stall-tag">🏪 ${getStallName(menu.stallId)}</div>
            <strong>${menu.name}</strong>
            <div class="subtitle">${formatRupiah(menu.price)} x ${item.qty}</div>
          </div>
          <div class="qty-control">
            <button onclick="updateQty('${menu.id}', -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="updateQty('${menu.id}', 1)">+</button>
          </div>
        </div>
      `;
    }).join("");
  }

  updateWhatsAppPreview();
}

function toggleAddressField() {
  const serviceType = document.querySelector('input[name="service-type"]:checked').value;
  const addrGroup = document.getElementById("address-group");
  addrGroup.style.display = serviceType.includes("Delivery") ? "block" : "none";
  updateWhatsAppPreview();
}

function buildOrderMessage() {
  const name = document.getElementById("cust-name").value.trim() || "-";
  const phone = document.getElementById("cust-phone").value.trim() || "-";
  const serviceType = document.querySelector('input[name="service-type"]:checked').value;
  const address = document.getElementById("cust-address").value.trim() || "-";
  const payment = document.getElementById("payment-method").value;
  const notes = document.getElementById("order-notes").value.trim() || "-";

  const subtotal = cart.reduce((sum, item) => {
    const menu = menus.find(m => m.id === item.menuId);
    return sum + (menu ? menu.price * item.qty : 0);
  }, 0);

  const deliveryFee = (cart.length > 0 && serviceType.includes("Delivery")) ? 5000 : 0;
  const total = subtotal + deliveryFee;

  document.getElementById("bill-subtotal").textContent = formatRupiah(subtotal);
  document.getElementById("bill-delivery").textContent = formatRupiah(deliveryFee);
  document.getElementById("bill-total").textContent = formatRupiah(total);

  const itemLines = cart.length === 0
    ? "(Belum ada menu dipilih)"
    : cart.map((item, i) => {
        const menu = menus.find(m => m.id === item.menuId);
        return `${i + 1}. [${getStallName(menu.stallId)}] ${menu.name} (${item.qty}x) = ${formatRupiah(menu.price * item.qty)}`;
      }).join("\n");

  return `*PESANAN BARU - GIGU FOOD* 🍽️
--------------------------------
*Data Pemesan:*
• Nama: ${name}
• No. WA: ${phone}
• Layanan: ${serviceType}
${serviceType.includes("Delivery") ? `• Alamat: ${address}\n` : ""}• Pembayaran: ${payment}
• Catatan: ${notes}

*Detail Pesanan Food Court:*
${itemLines}

--------------------------------
• Subtotal: ${formatRupiah(subtotal)}
• Ongkir: ${formatRupiah(deliveryFee)}
*TOTAL BAYAR: ${formatRupiah(total)}*
--------------------------------
Mohon segera diproses ya Kak, terima kasih! 🙏`;
}

function updateWhatsAppPreview() {
  document.getElementById("wa-preview-text").textContent = buildOrderMessage();
}

function sendOrderToWhatsApp() {
  if (cart.length === 0) {
    alert("Keranjang pesanan masih kosong! Silakan pilih menu terlebih dahulu.");
    return;
  }

  const name = document.getElementById("cust-name").value.trim();
  const phone = document.getElementById("cust-phone").value.trim();
  const serviceType = document.querySelector('input[name="service-type"]:checked').value;
  const address = document.getElementById("cust-address").value.trim();

  if (!name || !phone) {
    alert("Harap isi Nama Pemesan dan Nomor WhatsApp terlebih dahulu.");
    return;
  }

  if (serviceType.includes("Delivery") && !address) {
    alert("Harap isi Alamat Lengkap untuk pengantaran.");
    return;
  }

  const message = encodeURIComponent(buildOrderMessage());
  const waUrl = `https://wa.me/${ADMIN_WA_NUMBER}?text=${message}`;
  window.open(waUrl, "_blank");
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderStalls();
  renderMenus();
  updateCartSummary();
  document.getElementById("nav-link-home").classList.add("active-nav");
  lucide.createIcons();
});
