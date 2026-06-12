// Load config.js dynamically so that we don't have to add it to every html file manually
(function() {
    const script = document.createElement('script');
    script.src = 'config.js';
    script.async = false;
    document.head.appendChild(script);
})();

// --- Product Data ---
const products = [
    // === MOBILITY AIDS ===
    {
        id: 1,
        name: "Ultralight Wheelchair",
        category: "mobility",
        price: "EGP 15,000",
        img: "grad_pics/ultralight wheelchair.png",
        desc: "Premium lightweight aluminum frame, foldable for easy transport."
    },
    {
        id: 2,
        name: "Electric Wheelchair",
        category: "mobility",
        price: "EGP 38,000",
        img: "grad_pics/electric-wheelchair-egypt.webp",
        desc: "Power-assisted drive with intuitive joystick controls and ultra-comfortable seat cushioning."
    },
    {
        id: 3,
        name: "Standard Walker",
        category: "mobility",
        price: "EGP 2,500",
        img: "grad_pics/standard walker.webp",
        desc: "Sturdy support with adjustable height, rubberized feet, and non-slip grips."
    },
    {
        id: 4,
        name: "Adjustable Walking Cane",
        category: "mobility",
        price: "EGP 750",
        img: "grad_pics/Adjustable Walking Cane.jpg",
        desc: "Ergonomic offset handle walking cane made from durable anodized aluminum."
    },
    {
        id: 5,
        name: "Forearm Crutches",
        category: "mobility",
        price: "EGP 1,200",
        img: "grad_pics/Forearm Crutches.jpg",
        desc: "Heavy-duty crutches with full cuff design and shock-absorbing rubber tips."
    },
    {
        id: 6,
        name: "Mobility Scooter",
        category: "mobility",
        price: "EGP 32,000",
        img: "grad_pics/Mobility Scooter.jpg",
        desc: "Comfortable 4-wheel electric travel scooter with swivel seat and front storage basket."
    },

    // === PROSTHETICS ===
    {
        id: 7,
        name: "Carbon Fiber Leg Prosthetic",
        category: "prosthetics",
        price: "EGP 45,000",
        img: "grad_pics/Carbon Fiber Leg Prosthetic.jpg",
        desc: "High-performance carbon fiber construction designed for natural walking gait and durability."
    },
    {
        id: 8,
        name: "Below-Knee Prosthetic Limb",
        category: "prosthetics",
        price: "EGP 35,000",
        img: "grad_pics/Below-Knee Prosthetic Limb.webp",
        desc: "Custom-fitted transtibial prosthetic with modular comfort socket design."
    },
    {
        id: 9,
        name: "Above-Knee Prosthetic Limb",
        category: "prosthetics",
        price: "EGP 48,000",
        img: "grad_pics/Above-Knee Prosthetic Limb.avif",
        desc: "Advanced transfemoral limb system offering excellent balance and load support."
    },
    {
        id: 10,
        name: "Prosthetic Foot Module",
        category: "prosthetics",
        price: "EGP 12,000",
        img: "grad_pics/Prosthetic Foot Module 159.webp",
        desc: "Multi-axial responsive ankle and foot unit that mimics biological foot movements."
    },
    {
        id: 11,
        name: "Knee Joint Prosthetic System",
        category: "prosthetics",
        price: "EGP 18,000",
        img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400",
        desc: "Hydraulic knee joint system ensuring smooth deceleration and dependable stability control."
    },
    {
        id: 12,
        name: "Orthopedic Back Brace",
        category: "prosthetics",
        price: "EGP 2,000",
        img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=400",
        desc: "Medical-grade compression back brace providing lower lumbar stabilization."
    },

    // === ADAPTIVE SPORTS ===
    {
        id: 13,
        name: "Sports Wheelchair",
        category: "sports",
        price: "EGP 28,000",
        img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=400",
        desc: "Specialized wide-profile wheel camber designed for high speed and basketball maneuvering."
    },
    {
        id: 14,
        name: "Wheelchair Basketball",
        category: "sports",
        price: "EGP 1,200",
        img: "https://images.unsplash.com/photo-1519861531153-f351f0a4a921?auto=format&fit=crop&w=400",
        desc: "High-grip texture regulation basketball specifically crafted for adaptive sports performance."
    },
    {
        id: 15,
        name: "Running Blade Prosthetic",
        category: "sports",
        price: "EGP 55,000",
        img: "https://images.unsplash.com/photo-159742324403d-efea03ded42a?auto=format&fit=crop&w=400",
        desc: "Carbon fiber energy-returning J-curve running prosthetic blade for sprinters."
    },
    {
        id: 16,
        name: "Adaptive Cycling Handbike",
        category: "sports",
        price: "EGP 22,000",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400",
        desc: "Aerodynamic lightweight aluminum frame 3-wheel handcycle with smooth shifting gears."
    },
    {
        id: 17,
        name: "Adaptive Tennis Racket",
        category: "sports",
        price: "EGP 2,500",
        img: "https://images.unsplash.com/photo-1519861531153-f351f0a4a921?auto=format&fit=crop&w=400",
        desc: "Lightweight racket frame with custom contour grip extension for optimal control."
    },
    {
        id: 18,
        name: "Adaptive Training Resistance Kit",
        category: "sports",
        price: "EGP 1,800",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400",
        desc: "Heavy-duty workout bands and modular anchor grips suited for seated athletes."
    }
];

// --- Navigation Logic ---
const burger = document.getElementById('burger');
const nav = document.getElementById('navLinks');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }
    });
}

// --- Page Specific Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Preloader Logic ---
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 1000);
    }

    updateCartCount();
    const page = window.location.pathname.toLowerCase();

    if (page.includes("index.html") || page.endsWith("/") || page === "") {
        loadFeatured();
        initReviewsCarousel();
    } else if (page.includes("shop.html") || page.includes("/shop")) {
        renderShop(products);
        initFilters();
    } else if (page.includes("product.html") || page.includes("/product")) {
        renderProductDetail();
    } else if (page.includes("services.html") || page.includes("/services")) {
        initServiceForm();
    } else if (page.includes("chatbot.html") || page.includes("/chatbot")) {
        initChatbot();
    } else if (page.includes("cart.html") || page.includes("/cart")) {
        renderCart();
    } else if (page.includes("checkout.html") || page.includes("payment.html") || page.includes("/checkout") || page.includes("/payment")) {
        renderCheckoutSummary();
    } else if (page.includes("account.html") || page.includes("/account")) {
        renderAccountPage();
    }

    // Initialize floating chatbot widget
    initFloatingChatbot();
});

// --- Home Page: Featured Products ---
function loadFeatured() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;
    const featured = products.slice(0, 4);
    featured.forEach(prod => {
        grid.innerHTML += createProductCard(prod);
    });
}

// --- Shop: Rendering & Filtering ---
function renderShop(items) {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;
    grid.innerHTML = "";
    items.forEach(prod => {
        grid.innerHTML += createProductCard(prod);
    });
}

function createProductCard(prod) {
    return `
        <div class="card">
            <img src="${prod.img}" alt="${prod.name}" class="card-img">
            <div class="card-body">
                <h3>${prod.name}</h3>
                <p class="price">${prod.price}</p>
                <a href="product.html?id=${prod.id}" class="btn btn-primary btn-block">Details</a>
            </div>
        </div>
    `;
}

function initFilters() {
    const search = document.getElementById('searchInput');
    const category = document.getElementById('categoryFilter');

    if (!search || !category) return;

    const filterFn = () => {
        const searchTerm = search.value.toLowerCase();
        const catTerm = category.value;
        const filtered = products.filter(p => {
            const matchesSearch = p.name.toLowerCase().includes(searchTerm);
            const matchesCat = catTerm === "all" || p.category === catTerm;
            return matchesSearch && matchesCat;
        });
        renderShop(filtered);
    };

    search.addEventListener('input', filterFn);
    category.addEventListener('change', filterFn);
}

// --- Product Detail Logic ---
function renderProductDetail() {
    const container = document.getElementById('product-detail-container');
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const prod = products.find(p => p.id === id) || products[0];

    container.innerHTML = `
        <img src="${prod.img}" alt="${prod.name}" class="product-img-large">
        <div class="details">
            <h1>${prod.name}</h1>
            <p class="price">${prod.price}</p>
            <p class="desc">${prod.desc}</p>
            <div class="mt-2">
                <button class="btn btn-primary" onclick="addToCart(${prod.id})">Add to Cart</button>
                <a href="services.html" class="btn btn-secondary">Request Support</a>
            </div>
        </div>
    `;
}

// --- Services Form Logic ---
function initServiceForm() {
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init("Tou1PtpVMF1cV1YsU"); // your PUBLIC key
    }

    const form = document.getElementById('serviceForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const templateParams = {
                from_name: document.getElementById("name").value,
                product: document.getElementById("product").value,
                issue: document.getElementById("issue").value,
                to_email: "hassannzmalak@gmail.com"
            };

            emailjs.send("service_60bwrkt", "template_1q58kev", templateParams)

                .then(function(response) {
                    document.getElementById("successMessage").style.display = "block";
                    form.reset();
                }, function(error) {
                    alert("Failed to send request. Try again.");
                    console.log(error);
                });
        });
    }
}

// --- Chatbot Logic ---
function initChatbot() {
    const chatForm = document.getElementById('chatForm');
    if (chatForm) {
        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await sendMessage();
        });
    }
}

async function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value;
  if (!message.trim()) return;

  const chatBox = document.getElementById("chatBox");

  // Show user message
  chatBox.innerHTML += `<div class="message user">${message}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
      // Calling Groq directly from the frontend to fix the server connection issue
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${typeof CONFIG !== 'undefined' ? CONFIG.GROQ_API_KEY : ""}`
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: "You are a highly organized AI assistant for Assistify Egypt. Your responses MUST be structured, professional, and EXCLUSIVELY use bullet points for information. DO NOT use long paragraphs. Keep information concise and easy to read. If you detect or the user mentions a serious issue or malfunction, you MUST tell them in a prominent bullet point to submit a request from our Services page so we can send a technician right away." },
            { role: "user", content: message }
          ]
        })
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
          // Show bot reply
          const formattedContent = data.choices[0].message.content
              .replace(/\n/g, "<br>")
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/^\s*[\-\*•]\s+/gm, "• ");
          chatBox.innerHTML += `<div class="message bot">${formattedContent}</div>`;
      } else {
          chatBox.innerHTML += `<div class="message bot" style="color:red;">API Error: ${data.error?.message || "Something went wrong"}</div>`;
      }
      chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
      chatBox.innerHTML += `<div class="message bot" style="color:red;">Network error. Please try again.</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// --- Floating Chatbot Logic ---
function initFloatingChatbot() {
    const filename = window.location.pathname.split('/').pop().toLowerCase();
    if (filename === "chatbot.html" || filename === "chatbot") return;

    // Create widget container
    const chatContainer = document.createElement('div');
    chatContainer.className = 'floating-chat-container';
    chatContainer.id = 'floatingChatContainer';

    chatContainer.innerHTML = `
        <button class="floating-chat-btn" id="floatingChatBtn" aria-label="Open Chat">
            <i class="fas fa-comment-dots"></i>
        </button>
        <div class="floating-chat-window" id="floatingChatWindow">
            <div class="floating-chat-header">
                <div class="floating-chat-header-info">
                    <h3>Assistify Helper</h3>
                    <span>Online</span>
                </div>
                <button class="floating-chat-close" id="floatingChatClose">&times;</button>
            </div>
            <div class="floating-chat-box" id="floatingChatBox">
                <div class="floating-message bot">
                    Hello! I'm your Assistify guide. How can I help you today? (Try typing "help" or "repair")
                </div>
            </div>
            <form class="floating-chat-input-form" id="floatingChatForm">
                <input type="text" id="floatingChatInput" placeholder="Type a message..." autocomplete="off" required>
                <button type="submit" aria-label="Send Message">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>
    `;

    document.body.appendChild(chatContainer);

    const chatBtn = document.getElementById('floatingChatBtn');
    const chatWindow = document.getElementById('floatingChatWindow');
    const chatClose = document.getElementById('floatingChatClose');
    const chatForm = document.getElementById('floatingChatForm');

    chatBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            document.getElementById('floatingChatInput').focus();
        }
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await sendFloatingMessage();
    });
}

async function sendFloatingMessage() {
    const input = document.getElementById("floatingChatInput");
    const message = input.value;
    if (!message.trim()) return;

    const chatBox = document.getElementById("floatingChatBox");

    chatBox.innerHTML += `<div class="floating-message user">${message}</div>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Show dynamic typing indicator/loading indicator
    const typingIndicatorId = "floating-typing-indicator";
    chatBox.innerHTML += `<div class="floating-message bot" id="${typingIndicatorId}"><i class="fas fa-ellipsis-h fa-pulse"></i> Thinking...</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${typeof CONFIG !== 'undefined' ? CONFIG.GROQ_API_KEY : ""}`
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    { role: "system", content: "You are a highly organized AI assistant for Assistify Egypt. Your responses MUST be structured, professional, and EXCLUSIVELY use bullet points for information. DO NOT use long paragraphs. Keep information concise and easy to read. If you detect or the user mentions a serious issue or malfunction, you MUST tell them in a prominent bullet point to submit a request from our Services page so we can send a technician right away." },
                    { role: "user", content: message }
                ]
            })
        });

        // Remove thinking indicator
        const indicatorEl = document.getElementById(typingIndicatorId);
        if (indicatorEl) indicatorEl.remove();

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            const formattedContent = data.choices[0].message.content
                .replace(/\n/g, "<br>")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/^\s*[\-\*•]\s+/gm, "• ");
            chatBox.innerHTML += `<div class="floating-message bot">${formattedContent}</div>`;
        } else {
            chatBox.innerHTML += `<div class="floating-message bot" style="color:red;">API Error: ${data.error?.message || "Something went wrong"}</div>`;
        }
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (err) {
        // Remove thinking indicator
        const indicatorEl = document.getElementById(typingIndicatorId);
        if (indicatorEl) indicatorEl.remove();

        chatBox.innerHTML += `<div class="floating-message bot" style="color:red;">Network error. Please try again.</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// --- Reviews Data ---
const customerReviews = [
    {
        name: "Youssef Ibrahim",
        location: "Giza, Egypt",
        stars: 5,
        text: "The carbon fiber leg prosthetic has changed my life. I can walk with a completely natural gait and no discomfort!",
        avatar: "YI"
    },
    {
        name: "Mariam El-Shafei",
        location: "Alexandria, Egypt",
        stars: 5,
        text: "Amazing customer support! Their repair service sent a technician within 24 hours to fix my electric wheelchair. Highly recommend Assistify.",
        avatar: "MS"
    },
    {
        name: "Amr Abdel-Rahman",
        location: "Cairo, Egypt",
        stars: 5,
        text: "Excellent quality and very reasonable prices. The adjustable walking cane is lightweight but extremely sturdy.",
        avatar: "AR"
    },
    {
        name: "Farida Mansour",
        location: "Mansoura, Egypt",
        stars: 5,
        text: "As a wheelchair basketball player, the sports wheelchair has exceeded all my expectations. Incredibly agile and fast!",
        avatar: "FM"
    }
];

// --- Customer Reviews 3D Carousel Logic ---
function initReviewsCarousel() {
    const card = document.getElementById('reviewCard');
    if (!card) return;

    let currentIndex = 0;
    let flipInterval;

    function renderReview(index) {
        const review = customerReviews[index];
        const starsHtml = '<i class="fas fa-star"></i>'.repeat(review.stars);
        
        card.innerHTML = `
            <div class="review-stars">
                ${starsHtml}
            </div>
            <p class="review-text">${review.text}</p>
            <div class="review-author">
                <div class="review-avatar">${review.avatar}</div>
                <div class="review-details">
                    <h4 class="review-name">${review.name}</h4>
                    <span class="review-location"><i class="fas fa-map-marker-alt"></i> ${review.location}</span>
                </div>
            </div>
        `;
    }

    function startFlipping() {
        flipInterval = setInterval(() => {
            // Step 1: Start rotation (flip out)
            card.classList.add('flip-out');
            
            // Step 2: Swap content mid-flip (after 300ms when card is at 90deg rotation and invisible edge-on)
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % customerReviews.length;
                renderReview(currentIndex);
                
                // Step 3: Rotate back (remove flip-out class)
                card.classList.remove('flip-out');
            }, 300);
        }, 4000);
    }

    function stopFlipping() {
        clearInterval(flipInterval);
    }

    // Initialize the first review
    renderReview(currentIndex);
    startFlipping();

    // Mouse events to stop flipping and zoom in on hover
    card.addEventListener('mouseenter', () => {
        stopFlipping();
    });

    card.addEventListener('mouseleave', () => {
        startFlipping();
    });
}

// --- Toast Notifications ---
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 3400);
}

// --- Cart Logic ---
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('assistify_cart')) || [];
    // Update count in all navbars
    const countEls = document.querySelectorAll('#cart-count');
    countEls.forEach(el => el.innerText = cart.length);
}

function addToCart(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    let cart = JSON.parse(localStorage.getItem('assistify_cart')) || [];
    cart.push(prod);
    localStorage.setItem('assistify_cart', JSON.stringify(cart));
    
    updateCartCount();
    showToast(`${prod.name} has been added to your cart!`);
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('assistify_cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('assistify_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    if (!container) return;

    const cart = JSON.parse(localStorage.getItem('assistify_cart')) || [];
    
    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-cart fa-3x" style="margin-bottom:1rem; color:#ccc;"></i><p style="margin-bottom: 1.5rem;">Your cart is empty.</p><a href="shop.html" class="btn btn-primary">Start Shopping</a></div>`;
        totalEl.innerText = "EGP 0";
        return;
    }

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        const priceNum = parseInt(item.price.replace('EGP ', '').replace(',', ''));
        total += priceNum;

        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${item.price}</p>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
            </div>
        `;
    });

    totalEl.innerText = `EGP ${total.toLocaleString()}`;
    
    const finalTotalEl = document.getElementById('cart-final-total');
    if (finalTotalEl) {
        finalTotalEl.innerText = `EGP ${total.toLocaleString()}`;
    }
}

// --- Checkout & Payment Logic ---
function renderCheckoutSummary() {
    const summaryContainer = document.getElementById('checkout-items-container');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const totalEl = document.getElementById('checkout-total');
    
    if (!summaryContainer) return;

    const cart = JSON.parse(localStorage.getItem('assistify_cart')) || [];
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    summaryContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const priceNum = parseInt(item.price.replace('EGP ', '').replace(',', ''));
        total += priceNum;

        summaryContainer.innerHTML += `
            <div class="summary-item" style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.9rem;">
                <span style="flex:1;">${item.name}</span>
                <span style="font-weight:bold;">${item.price}</span>
            </div>
        `;
    });

    if (subtotalEl) subtotalEl.innerText = `EGP ${total.toLocaleString()}`;
    if (totalEl) totalEl.innerText = `EGP ${total.toLocaleString()}`;
}

function proceedToPayment(e) {
    e.preventDefault();
    window.location.href = 'payment.html';
}

function togglePaymentMethod(method) {
    const cardDetails = document.getElementById('card-details');
    const codDetails = document.getElementById('cod-details');
    if (!cardDetails || !codDetails) return;

    const cardInputs = cardDetails.querySelectorAll('input');

    if (method === 'cod') {
        cardDetails.style.display = 'none';
        codDetails.style.display = 'block';
        cardInputs.forEach(input => input.required = false);
    } else {
        cardDetails.style.display = 'block';
        codDetails.style.display = 'none';
        cardInputs.forEach(input => input.required = true);
    }
}

function processPayment(e) {
    e.preventDefault();
    const btn = document.getElementById('pay-btn');
    if(btn) {
        btn.innerText = "Processing...";
        btn.disabled = true;
    }
    showToast("Processing payment securely...");
    
    setTimeout(() => {
        localStorage.removeItem('assistify_cart');
        showToast("Payment Successful! Thank you for your order.");
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }, 2000);
}

// --- Authentication & Account Logic ---
function renderAccountPage() {
    const container = document.getElementById('account-container');
    if (!container) return;

    const user = JSON.parse(localStorage.getItem('assistify_user'));
    
    if (user) {
        renderDashboard(user, container);
    } else {
        renderAuthForm(container);
    }
}

function renderAuthForm(container) {
    container.innerHTML = `
        <div class="auth-container">
            <h2>Welcome to Assistify</h2>
            <p style="margin-top:0; margin-bottom:2rem;">Create an account to track your orders and services.</p>
            <form onsubmit="handleLogin(event)">
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" id="auth-name" required placeholder="John Doe">
                </div>
                <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" id="auth-email" required placeholder="john@example.com">
                </div>
                <button type="submit" class="btn btn-primary">Sign In / Register</button>
            </form>
            <p>You can also <a href="shop.html" style="color:var(--primary); font-weight:bold;">continue browsing</a> as a guest.</p>
        </div>
    `;
}

function handleLogin(e) {
    e.preventDefault();
    const name = document.getElementById('auth-name').value.trim();
    const email = document.getElementById('auth-email').value.trim();
    
    // Get initials (up to 2 letters)
    const initials = name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
    
    // Check known users
    let knownUsers = JSON.parse(localStorage.getItem('assistify_known_users')) || [];
    let isReturning = knownUsers.includes(email);
    if (!isReturning) {
        knownUsers.push(email);
        localStorage.setItem('assistify_known_users', JSON.stringify(knownUsers));
    }
    
    const user = { name, email, initials, joinYear: new Date().getFullYear(), isReturning };
    localStorage.setItem('assistify_user', JSON.stringify(user));
    
    const firstName = name.split(' ')[0];
    showToast(isReturning ? `Welcome back, ${firstName}!` : `Welcome, ${firstName}!`);
    renderAccountPage();
}

function handleLogout() {
    localStorage.removeItem('assistify_user');
    showToast("You have been logged out.");
    renderAccountPage();
}

function renderDashboard(user, container) {
    container.innerHTML = `
        <div class="account-layout">
            <aside class="sidebar">
                <div class="profile-summary">
                    <div class="avatar">${user.initials}</div>
                    <h3>${user.name}</h3>
                    <p>Member since ${user.joinYear}</p>
                </div>
                <ul class="side-nav">
                    <li class="active" onclick="switchTab('dashboard', this)">Dashboard</li>
                    <li onclick="switchTab('orders', this)">Orders</li>
                    <li onclick="switchTab('services', this)">Service Requests</li>
                    <li onclick="switchTab('settings', this)">Settings</li>
                    <li onclick="handleLogout()" style="color:#e63946; margin-top: 1rem;">Logout</li>
                </ul>
            </aside>
            <main class="account-content" id="tab-content">
                <!-- Tab content will be rendered here -->
            </main>
        </div>
    `;
    
    // Render default tab
    switchTab('dashboard');
}

function switchTab(tabName, element = null) {
    // Update active class on sidebar
    if (element) {
        document.querySelectorAll('.side-nav li').forEach(li => li.classList.remove('active'));
        element.classList.add('active');
    }
    
    const content = document.getElementById('tab-content');
    if (!content) return;
    
    const user = JSON.parse(localStorage.getItem('assistify_user'));
    const firstName = user.name.split(' ')[0];
    
    if (tabName === 'dashboard') {
        const greeting = user.isReturning ? `Welcome back, ${firstName}!` : `Welcome, ${firstName}!`;
        content.innerHTML = `
            <h2>${greeting}</h2>
            <div class="stats-grid mt-2">
                <div class="stat-card">
                    <h4>Active Orders</h4>
                    <p class="large">1</p>
                </div>
                <div class="stat-card">
                    <h4>Services</h4>
                    <p class="large">0</p>
                </div>
            </div>
            <h3 class="mt-2">Recent Order</h3>
            <div class="order-item">
                <p><strong>#ORD-9921</strong> - Ultralight Wheelchair</p>
                <span class="status status-processing">Processing</span>
            </div>
        `;
    } else if (tabName === 'orders') {
        content.innerHTML = `
            <h2>Your Orders</h2>
            <div class="order-item mt-2">
                <p><strong>#ORD-9921</strong> - Ultralight Wheelchair</p>
                <span class="status status-processing">Processing</span>
            </div>
            <div class="order-item mt-2">
                <p><strong>#ORD-8432</strong> - Carbon Fiber Prosthetic</p>
                <span class="status" style="background:#e6f4ea; color:#1e8e3e; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: bold;">Delivered</span>
            </div>
        `;
    } else if (tabName === 'services') {
        content.innerHTML = `
            <h2>Service Requests</h2>
            <div class="empty-cart mt-2" style="padding:2rem;">
                <p>You have no active service requests.</p>
                <a href="services.html" class="btn btn-outline-primary" style="margin-top: 1rem; display: inline-block;">Request Service</a>
            </div>
        `;
    } else if (tabName === 'settings') {
        content.innerHTML = `
            <h2>Account Settings</h2>
            <form class="mt-2" style="max-width:400px;" onsubmit="event.preventDefault(); showToast('Settings saved!');">
                <div class="form-group">
                    <label>Update Email</label>
                    <input type="email" value="${user.email}">
                </div>
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </form>
        `;
    }
}