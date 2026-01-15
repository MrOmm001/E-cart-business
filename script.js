// Product Data with Indian Pricing and Authentic Images
const products = [
  // Smartphones
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    price: 184900,
    originalPrice: 199900,
    image:
      "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-geo-240909-lp.jpg.landing-big_2x.jpg",
    category: "Smartphones",
    rating: 4.5,
    reviewCount: 2847,
    description: "Latest iPhone with titanium design and advanced camera system",
    inStock: true,
    features: ["A18 Pro chip", "1TB storage", "6-core GPU", "Pro camera system"],
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    price: 165999,
    originalPrice: 171900,
    image:
      "https://images.samsung.com/in/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-features-kv.jpg?imbypass=true",
    category: "Smartphones",
    rating: 5.0,
    reviewCount: 3967,
    description: "Premium Android smartphone with S Pen and advanced AI features",
    inStock: true,
    features: ["Snapdragon 8 Elite", "1TB storage", "200MP camera", "S Pen included"],
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    price: 84999,
    originalPrice: 94999,
    image:
      "https://lh3.googleusercontent.com/peXr1JEBO8I6hONBFFgjkOaDhmqPD1SzO7RvKilzVl1MixJaysBVpkS4aG_ZdVeL1An5YPguTPHC_tZM-US0CAh9HgLvppXGQQ=s6000-w6000-e365-rw-v0-nu",
    category: "Smartphones",
    rating: 4.6,
    reviewCount: 1456,
    description: "Pure Android experience with exceptional camera AI",
    inStock: true,
    features: ["Google Tensor G3", "128GB storage", "Magic Eraser", "7 years updates"],
  },
  {
    id: 4,
    name: "OnePlus 12",
    price: 64999,
    image: "https://www.oneplus.com/content/dam/oasis/page/2024/global/product/waffle/share.jpg",
    category: "Smartphones",
    rating: 4.5,
    reviewCount: 987,
    description: "Flagship killer with premium features at competitive price",
    inStock: true,
    features: ["Snapdragon 8 Gen 3", "256GB storage", "100W charging", "Hasselblad camera"],
  },
  {
    id: 5,
    name: "Xiaomi 14 Ultra",
    price: 89999,
    originalPrice: 99999,
    image:
      "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14-ultra/in/m/f317625d55a717698ed3cc3db9319421.png",
    category: "Smartphones",
    rating: 4.4,
    reviewCount: 756,
    description: "Photography flagship with Leica partnership",
    inStock: true,
    features: ["Snapdragon 8 Gen 3", "512GB storage", "Leica camera", "120W charging"],
  },

  // Laptops
  {
    id: 6,
    name: 'MacBook Pro 16" M3',
    price: 249900,
    image:
      "https://www.imagineonline.store/cdn/shop/files/r1620_Space_Gray_PDP_Image_Position-1_Avail__en-IN_76ebc25f-bd30-47f1-aa98-360a72dd9566.jpg?v=1692353834&width=823",
    category: "Laptops",
    rating: 4.9,
    reviewCount: 3421,
    description: "Powerful laptop for professionals with M4 chip",
    inStock: true,
    features: ["M4 chip", "16GB RAM", "512GB SSD", "Liquid Retina XDR display"],
  },
  {
    id: 7,
    name: "Dell XPS 13 Plus",
    price: 134999,
    originalPrice: 149999,
    image:
      "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/l/o/logitech_myshop-pk-7_2.jpg",
    category: "Laptops",
    rating: 4.5,
    reviewCount: 892,
    description: "Ultra-thin Windows laptop with premium design",
    inStock: true,
    features: ["Intel i7-13700H", "16GB RAM", "1TB SSD", '13.4" FHD display'],
  },
  {
    id: 8,
    name: "ASUS ROG Strix G15",
    price: 159999,
    image: "https://gaminguae.ae/wp-content/uploads/2023/08/90NR08K4-M003X0.webp",
    category: "Laptops",
    rating: 4.4,
    reviewCount: 1247,
    description: "High-performance gaming laptop with RTX graphics",
    inStock: true,
    features: ["AMD Ryzen 9", "32GB RAM", "RTX 3050", '15.6" 165Hz FHD display'],
  },
  {
    id: 9,
    name: "HP Spectre x360",
    price: 119999,
    originalPrice: 134999,
    image: "https://hpstorerajkot.com/wp-content/uploads/UntitledDGVSVSDV-768x585.jpg",
    category: "Laptops",
    rating: 4.3,
    reviewCount: 654,
    description: "Convertible laptop with premium build quality",
    inStock: true,
    features: ["Intel i7", "16GB RAM", "512GB SSD", "360° hinge"],
  },
  {
    id: 10,
    name: "Lenovo ThinkPad X1 Carbon",
    price: 149999,
    image:
      "https://comptechdirect.com/cdn/shop/files/Lenovo_21CB0070US_INT_1_aed680dd-1d36-4cd3-a421-57bbeade2fea.jpg?v=1716283473",
    category: "Laptops",
    rating: 4.6,
    reviewCount: 1123,
    description: "Business laptop with legendary ThinkPad reliability",
    inStock: true,
    features: ["Intel i7", "16GB RAM", "1TB SSD", '14" 2K display'],
  },

  // Audio
  {
    id: 11,
    name: "Sony WH-1000XM5",
    price: 29990,
    originalPrice: 34990,
    image:
      "https://admin.focusnusantara.com/media/catalog/product/cache/417d5822b01094047ca5b50bfdc0690a/h/s/hsn37137_sony_wh-1000xm5_headphone_noise_cancelling_nirkabel_midnight_blue_-web_d1_1.png",
    category: "Audio",
    rating: 4.8,
    reviewCount: 5621,
    description: "Industry-leading noise canceling headphones",
    inStock: true,
    features: ["30hr battery", "Premium noise canceling", "Hi-Res Audio", "Touch controls"],
  },
  {
    id: 12,
    name: "Apple AirPods 4",
    price: 24900,
    image:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1723685837066",
    category: "Audio",
    rating: 4.7,
    reviewCount: 8934,
    description: "True wireless earbuds with active noise cancellation",
    inStock: true,
    features: ["Active Noise Cancellation", "9hr listening time", "Spatial Audio", "MagSafe charging"],
  },
  {
    id: 13,
    name: "Bose QuietComfort 45",
    price: 27990,
    originalPrice: 32990,
    image: "https://cdn.headphonecheck.com/wp-content/uploads/Bose-QuietComfort-45-10-1920x1080.jpg",
    category: "Audio",
    rating: 4.6,
    reviewCount: 3456,
    description: "Comfortable over-ear headphones with excellent noise cancellation",
    inStock: true,
    features: ["24hr battery", "Quiet Mode", "Aware Mode", "Premium comfort"],
  },
  {
    id: 14,
    name: "JBL Flip 6",
    price: 11999,
    originalPrice: 13999,
    image:
      "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw593abf39/2_JBL_FLIP6_3_4_RIGHT_BLACK_30195_x1.png?sw=535&sh=535",
    category: "Audio",
    rating: 4.4,
    reviewCount: 2341,
    description: "Portable Bluetooth speaker with powerful sound",
    inStock: true,
    features: ["IP67 waterproof", "12hr battery", "PartyBoost", "Bold design"],
  },
  {
    id: 15,
    name: "Sennheiser HD 660S2",
    price: 54999,
    image:
      "https://media.wired.com/photos/6439a443feb0cdce093950ab/master/pass/Sennheiser-660S2-Review-Featured-Gear.jpg",
    category: "Audio",
    rating: 4.8,
    reviewCount: 876,
    description: "Audiophile-grade open-back headphones",
    inStock: true,
    features: ["Open-back design", "Hi-Res certified", "Detachable cable", "Premium drivers"],
  },

  // Home Appliances
  {
    id: 16,
    name: 'LG 55" OLED C3 Smart TV',
    price: 134999,
    originalPrice: 149999,
    image:
      "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled55c3psa_atr_eail_in_c/gallery/OLED55C3PSA-DZ-12.jpg/_jcr_content/renditions/thum-1600x1062.jpeg",
    category: "Home Appliances",
    rating: 4.7,
    reviewCount: 2134,
    description: "Premium OLED TV with perfect blacks and vibrant colors",
    inStock: true,
    features: ["OLED display", "4K 120Hz", "webOS", "Dolby Vision"],
  },
  {
    id: 17,
    name: "Samsung 253L Frost Free Refrigerator",
    price: 28999,
    originalPrice: 32999,
    image: "https://salesindia.com/media/catalog/product/cache/ea4f118ddc960114594f91f30c2bbe2d/i/m/image_1_660.jpg",
    category: "Home Appliances",
    rating: 4.3,
    reviewCount: 1876,
    description: "Energy efficient refrigerator with digital inverter",
    inStock: true,
    features: ["253L capacity", "Frost free", "Digital inverter", "5 star rating"],
  },
  {
    id: 18,
    name: "Dyson V15 Detect Vacuum",
    price: 65999,
    image:
      "https://images.firstpost.com/wp-content/uploads/2022/07/Dyson-launches-V15-Detect-a-new-cordless-vacuum-cleaner-with-Laser-Dust-Detection-in-India-for-Rs-62900.jpg?im=FitAndFill=(1200,675)",
    category: "Home Appliances",
    rating: 4.6,
    reviewCount: 987,
    description: "Cordless vacuum with laser dust detection",
    inStock: true,
    features: ["Laser detection", "60min runtime", "HEPA filtration", "LCD screen"],
  },
  {
    id: 19,
    name: "Philips Air Fryer HD9252",
    price: 12999,
    originalPrice: 15999,
    image: "https://m.media-amazon.com/images/I/51AJ9Nx5qeL._UF350,350_QL80_.jpg",
    category: "Home Appliances",
    rating: 4.4,
    reviewCount: 3456,
    description: "Healthy cooking with rapid air technology",
    inStock: true,
    features: ["4.1L capacity", "Rapid air technology", "7 presets", "Dishwasher safe"],
  },
  {
    id: 20,
    name: "Instant Pot Duo 7-in-1",
    price: 8999,
    originalPrice: 10999,
    image: "https://images-cdn.ubuy.co.in/63eed035df3e5717a56bc995-instant-pot-duo-7-in-1-electric-pressure.jpg",
    category: "Home Appliances",
    rating: 4.8,
    reviewCount: 12456,
    description: "Multi-functional electric pressure cooker",
    inStock: true,
    features: ["7-in-1 functionality", "6-quart capacity", "Smart programs", "Safety features"],
  },

  // Fashion
  {
    id: 21,
    name: "Nike Air Force 1",
    price: 7999,
    originalPrice: 8999,
    image:
      "https://img.bstn.com/eyJidWNrZXQiOiJic3RuLWltYWdlLXNlcnZlciIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC9GTjU5MjQtMTAwL0ZONTkyNC0xMDAtMDMuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvbnRhaW4iLCJ3aWR0aCI6NTgwLCJoZWlnaHQiOjcyNSwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX19fX0=",
    category: "Fashion",
    rating: 4.5,
    reviewCount: 4321,
    description: "Classic basketball shoes with timeless design",
    inStock: true,
    features: ["Leather upper", "Air cushioning", "Rubber outsole", "Multiple colors"],
  },
  {
    id: 22,
    name: "Levi's 511 Slim Jeans",
    price: 3999,
    image: "https://images-cdn.ubuy.co.in/6457738c21ec0d4d8007e0a2-levis-511-mens-slim-fit-jeans-stretch.jpg",
    category: "Fashion",
    rating: 4.3,
    reviewCount: 2876,
    description: "Slim fit jeans with classic 5-pocket styling",
    inStock: true,
    features: ["Slim fit", "Stretch denim", "Classic styling", "Multiple washes"],
  },
  {
    id: 23,
    name: "Adidas Ultraboost 22",
    price: 16999,
    originalPrice: 18999,
    image: "https://cdn.fleetfeet.com/a:1.3333333333333-f:cover-w:1200/assets/adidasultraboost.jpeg?s=ae640b72",
    category: "Fashion",
    rating: 4.6,
    reviewCount: 1987,
    description: "Premium running shoes with boost technology",
    inStock: true,
    features: ["Boost midsole", "Primeknit upper", "Continental rubber", "Energy return"],
  },
  {
    id: 24,
    name: "Ray-Ban Aviator Classic",
    price: 12999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57CSspgS5BHBT3-dYepgMDX4btBG74s_GWA&s",
    category: "Fashion",
    rating: 4.7,
    reviewCount: 5432,
    description: "Iconic aviator sunglasses with timeless appeal",
    inStock: true,
    features: ["UV protection", "Metal frame", "Crystal lenses", "Classic design"],
  },
  {
    id: 25,
    name: "Tommy Hilfiger Polo Shirt",
    price: 2999,
    originalPrice: 3999,
    image: "https://cdn00.nnnow.com/web-images/large/styles/MDPLC3CA7DW/1717655749559/1.jpg",
    category: "Fashion",
    rating: 4.2,
    reviewCount: 1234,
    description: "Classic polo shirt with signature flag logo",
    inStock: true,
    features: ["100% cotton", "Regular fit", "Flag logo", "Multiple colors"],
  },

  // Books
  {
    id: 26,
    name: "The Alchemist by Paulo Coelho",
    price: 299,
    originalPrice: 399,
    image: "https://avonvanhassel.com/wp-content/uploads/2018/06/20180606_212426.jpg?w=1280",
    category: "Books",
    rating: 4.8,
    reviewCount: 45231,
    description: "International bestseller about following your dreams",
    inStock: true,
    features: ["Bestseller", "Fiction", "Paperback", "English"],
  },
  {
    id: 27,
    name: "Atomic Habits by James Clear",
    price: 599,
    image:
      "https://images.squarespace-cdn.com/content/v1/5a4b6d1f9f07f5d01c10f2b6/e9b992f6-72bf-4cb8-8be5-19bde83e566a/352707224_10159200474907341_8781875447665972430_n.jpg",
    category: "Books",
    rating: 4.7,
    reviewCount: 23456,
    description: "Proven way to build good habits and break bad ones",
    inStock: true,
    features: ["Self-help", "Bestseller", "Hardcover", "320 pages"],
  },
  {
    id: 28,
    name: "Sapiens by Yuval Noah Harari",
    price: 699,
    originalPrice: 799,
    image: "https://i0.wp.com/sbcstore.in/wp-content/uploads/2023/09/sapiens.jpg?fit=2427%2C2509&ssl=1",
    category: "Books",
    rating: 4.6,
    reviewCount: 18765,
    description: "A brief history of humankind",
    inStock: true,
    features: ["Non-fiction", "History", "Paperback", "464 pages"],
  },
  {
    id: 29,
    name: "The Psychology of Money",
    price: 449,
    image:
      "https://bookbins.b-cdn.net/wp-content/uploads/2024/04/The-Psychology-Of-Money-Morgan-Housel-Buy-Online-Bookbins.jpg",
    category: "Books",
    rating: 4.5,
    reviewCount: 12987,
    description: "Timeless lessons on wealth, greed, and happiness",
    inStock: true,
    features: ["Finance", "Psychology", "Paperback", "256 pages"],
  },
  {
    id: 30,
    name: "Think and Grow Rich",
    price: 199,
    originalPrice: 299,
    image: "https://gregory.ph/cdn/shop/products/BuyThink_GrowRichinPhilippines3.jpg?v=1626537490",
    category: "Books",
    rating: 4.4,
    reviewCount: 34567,
    description: "Classic self-help book on achieving success",
    inStock: true,
    features: ["Self-help", "Classic", "Paperback", "320 pages"],
  },
]

// Application State
let currentUser = null
let cart = JSON.parse(localStorage.getItem("cart")) || []
let filteredProducts = [...products]
let currentCategory = "All"
let isAuthModalLogin = true

// DOM Elements
const themeToggle = document.getElementById("themeToggle")
const searchInput = document.getElementById("searchInput")
const categoriesList = document.getElementById("categoriesList")
const productsGrid = document.getElementById("productsGrid")
const productsCount = document.getElementById("productsCount")
const sectionTitle = document.getElementById("sectionTitle")
const cartBtn = document.getElementById("cartBtn")
const cartCount = document.getElementById("cartCount")
const cartModal = document.getElementById("cartModal")
const cartItems = document.getElementById("cartItems")
const cartTotal = document.getElementById("cartTotal")
const authModal = document.getElementById("authModal")
const accountBtn = document.getElementById("accountBtn")
const clearFilters = document.getElementById("clearFilters")

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme()
  renderProducts()
  updateCartUI()
  setupEventListeners()
  loadUserFromStorage()
})

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"
  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i")
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon"
}

// Product Management
function renderProducts() {
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
            <div class="empty-products">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `
    productsCount.textContent = "No products found"
    return
  }

  productsGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.originalPrice ? `<div class="discount-badge">${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF</div>` : ""}
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviewCount.toLocaleString()})</span>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-features">
                    ${product.features
                      .slice(0, 2)
                      .map((feature) => `<span class="feature-tag">${feature}</span>`)
                      .join("")}
                </div>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ""}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? "disabled" : ""}>
                    <i class="fas fa-shopping-cart"></i>
                    ${product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
            </div>
        </div>
    `,
    )
    .join("")

  productsCount.textContent = `${filteredProducts.length} products found`
}

function generateStars(rating) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  let stars = ""

  for (let i = 0; i < fullStars; i++) {
    stars += '<i class="fas fa-star star"></i>'
  }

  if (hasHalfStar) {
    stars += '<i class="fas fa-star-half-alt star"></i>'
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars += '<i class="fas fa-star star empty"></i>'
  }

  return stars
}

function filterProducts() {
  let filtered = [...products]

  // Category filter
  if (currentCategory !== "All") {
    filtered = filtered.filter((product) => product.category === currentCategory)
  }

  // Search filter
  const searchTerm = searchInput.value.toLowerCase()
  if (searchTerm) {
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm),
    )
  }

  // Price filter
  const priceFilter = document.querySelector('input[name="price"]:checked')
  if (priceFilter) {
    const [min, max] = priceFilter.value.split("-").map(Number)
    filtered = filtered.filter((product) => product.price >= min && product.price <= max)
  }

  // Rating filter
  const ratingFilter = document.querySelector('input[name="rating"]:checked')
  if (ratingFilter) {
    const minRating = Number(ratingFilter.value)
    filtered = filtered.filter((product) => product.rating >= minRating)
  }

  // Stock filter
  const stockFilter = document.getElementById("inStockOnly")
  if (stockFilter && stockFilter.checked) {
    filtered = filtered.filter((product) => product.inStock)
  }

  filteredProducts = filtered
  renderProducts()
}

// Cart Management
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product || !product.inStock) return

  const existingItem = cart.find((item) => item.id === productId)
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  saveCart()
  updateCartUI()
  showNotification("Product added to cart!")
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  saveCart()
  updateCartUI()
  renderCartItems()
}

function updateQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId)
    return
  }

  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity = newQuantity
    saveCart()
    updateCartUI()
    renderCartItems()
  }
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems
  cartCount.style.display = totalItems > 0 ? "flex" : "none"
}

function renderCartItems() {
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
            </div>
        `
    cartTotal.textContent = "0"
    return
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">₹${item.price.toLocaleString()} each</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="cart-item-total">
                <div class="cart-item-total-price">₹${(item.price * item.quantity).toLocaleString()}</div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `,
    )
    .join("")

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = total.toLocaleString()
}

// Category Management
function setCategory(category) {
  currentCategory = category

  // Update active category button
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelector(`[data-category="${category}"]`).classList.add("active")

  // Update section title
  sectionTitle.textContent = category === "All" ? "All Products" : category

  filterProducts()
}

// Authentication
function loadUserFromStorage() {
  const savedUser = localStorage.getItem("user")
  if (savedUser) {
    currentUser = JSON.parse(savedUser)
    updateAuthUI()
  }
}

function updateAuthUI() {
  const accountText = accountBtn.querySelector(".account-text")
  if (currentUser) {
    accountText.innerHTML = `
            <span class="greeting">Hello, ${currentUser.name}</span>
            <span class="account-label">Sign Out</span>
        `
  } else {
    accountText.innerHTML = `
            <span class="greeting">Hello, Sign in</span>
            <span class="account-label">Account & Lists</span>
        `
  }
}

function handleAuth(event) {
  event.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  if (isAuthModalLogin) {
    // Login
    if (email && password) {
      currentUser = {
        id: Date.now(),
        name: email.split("@")[0],
        email: email,
      }
      localStorage.setItem("user", JSON.stringify(currentUser))
      updateAuthUI()
      closeModal("authModal")
      showNotification("Successfully signed in!")
    }
  } else {
    // Register
    if (name && email && password) {
      currentUser = {
        id: Date.now(),
        name: name,
        email: email,
      }
      localStorage.setItem("user", JSON.stringify(currentUser))
      updateAuthUI()
      closeModal("authModal")
      showNotification("Account created successfully!")
    }
  }
}

function logout() {
  currentUser = null
  localStorage.removeItem("user")
  updateAuthUI()
  showNotification("Successfully signed out!")
}

function toggleAuthMode() {
  isAuthModalLogin = !isAuthModalLogin
  const authTitle = document.getElementById("authTitle")
  const authSubmit = document.getElementById("authSubmit")
  const nameGroup = document.getElementById("nameGroup")
  const authSwitchText = document.getElementById("authSwitchText")
  const authSwitchBtn = document.getElementById("authSwitchBtn")

  if (isAuthModalLogin) {
    authTitle.textContent = "Sign In"
    authSubmit.textContent = "Sign In"
    nameGroup.style.display = "none"
    authSwitchText.textContent = "Don't have an account?"
    authSwitchBtn.textContent = "Sign up"
  } else {
    authTitle.textContent = "Create Account"
    authSubmit.textContent = "Create Account"
    nameGroup.style.display = "block"
    authSwitchText.textContent = "Already have an account?"
    authSwitchBtn.textContent = "Sign in"
  }
}

// Modal Management
function openModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.add("show")
  document.body.style.overflow = "hidden"

  if (modalId === "cartModal") {
    renderCartItems()
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.remove("show")
  document.body.style.overflow = "auto"
}

// Utility Functions
function showNotification(message, type = "default") {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideUp 0.3s ease;
        box-shadow: var(--shadow-medium);
        color: var(--background-color); /* Dark text on notification */
    `

  if (type === "success") {
    notification.style.background = "var(--accent-color)" // Gold for success
  } else if (type === "error") {
    notification.style.background = "var(--secondary-color)" // Darker gold for error
  } else if (type === "info") {
    notification.style.background = "var(--primary-color)" // Gold for info
  } else {
    notification.style.background = "var(--text-secondary)" // Muted gold for default
  }

  notification.textContent = message
  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

function toggleWishlist(productId) {
  showNotification("Added to wishlist!")
}

function clearAllFilters() {
  // Clear all filter inputs
  document.querySelectorAll('input[name="price"]').forEach((input) => (input.checked = false))
  document.querySelectorAll('input[name="rating"]').forEach((input) => (input.checked = false))
  document.getElementById("inStockOnly").checked = false

  // Reset search
  searchInput.value = ""

  // Reset category
  setCategory("All")

  filterProducts()
}

// Event Listeners
function setupEventListeners() {
  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme)

  // Search
  searchInput.addEventListener("input", filterProducts)

  // Categories
  categoriesList.addEventListener("click", (e) => {
    if (e.target.classList.contains("category-btn")) {
      setCategory(e.target.dataset.category)
    }
  })

  // Cart
  cartBtn.addEventListener("click", () => openModal("cartModal"))
  document.getElementById("closeCart").addEventListener("click", () => closeModal("cartModal"))

  // Auth
  accountBtn.addEventListener("click", () => {
    if (currentUser) {
      logout()
    } else {
      openModal("authModal")
    }
  })
  document.getElementById("closeAuth").addEventListener("click", () => closeModal("authModal"))
  document.getElementById("authForm").addEventListener("submit", handleAuth)
  document.getElementById("authSwitchBtn").addEventListener("click", toggleAuthMode)

  // Filters
  clearFilters.addEventListener("click", clearAllFilters)
  document.addEventListener("change", (e) => {
    if (e.target.name === "price" || e.target.name === "rating" || e.target.id === "inStockOnly") {
      filterProducts()
    }
  })

  // Checkout
  document.getElementById("checkoutBtn").addEventListener("click", async () => {
    if (cart.length === 0) {
      showNotification("Your cart is empty!")
      return
    }

    // Simulate payment process
    showNotification("Processing payment...", "info") // Add a new type for info
    closeModal("cartModal") // Close cart modal while processing

    // Simulate a network request delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const paymentSuccessful = Math.random() > 0.1 // 90% chance of success

    if (paymentSuccessful) {
      cart = [] // Clear the cart on successful payment
      saveCart()
      updateCartUI()
      showNotification("Payment successful! Your order has been placed.", "success")
    } else {
      showNotification("Payment failed. Please try again.", "error")
    }
  })

  // Modal close on outside click
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal(e.target.id)
    }
  })

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.show").forEach((modal) => {
        closeModal(modal.id)
      })
    }
  })
}