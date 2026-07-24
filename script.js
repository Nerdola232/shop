// CONFIGURAÇÃO DO SEU WEBHOOK DO DISCORD
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1530239526340005928/XjxvoZmOpTjlZujf4IcBV6cmr4MUogfKA-PS5dGFW3PcvUsfgVwcshZG7fuU1nhVp9gE"; 

// DICIONÁRIO DE TRADUÇÃO MULTI-IDIOMAS (PT, EN, ES)
const translations = {
  pt: {
    loading: "Carregando Astral Shop...",
    nav_catalog: "Catálogo",
    nav_faq: "FAQ",
    nav_terms: "Termos",
    nav_discord: "Nosso Discord",
    hero_sub: "Venda exclusiva de contas Roblox com entrega instantânea e segurança total.",
    stat_reviews: "Avaliações",
    stat_sold: "Contas Vendidas",
    stat_clients: "Clientes Totais",
    search_placeholder: "🔍 Pesquisar tipo de conta...",
    cat_all: "Todas",
    cat_1_7: "1-7 Dias",
    cat_7plus: "7+ Dias",
    cat_og: "OG (2015 e Antes)",
    cat_premium: "Premium",
    cat_40plus: "40+ Dias",
    cat_100plus: "100+ Dias",
    title_catalog: "Contas Disponíveis",
    btn_buy: "Comprar Agora",
    badge_1_7: "1-7 Dias",
    badge_7plus: "7+ Dias",
    badge_og: "OG (2015 e Antes)",
    badge_premium: "Premium",
    badge_40plus: "40+ Dias",
    badge_100plus: "100+ Dias",
    p1_title: "Conta Roblox (1 a 7 Dias)",
    p1_desc: "Conta recém-criada, limpa e ideal para novos inícios ou suporte.",
    p2_title: "Conta Roblox (7+ Dias)",
    p2_desc: "Conta maturada com mais de uma semana de criação sem restrições.",
    p3_title: "Conta OG Rara (2015 e Antes)",
    p3_desc: "Conta antiga criada em 2015 ou anterior, com badges e avatares raros.",
    p4_title: "Conta Roblox Premium",
    p4_desc: "Acompanha assinatura ativa, itens de catálogo pagos e inventário valorizado.",
    p5_title: "Conta Roblox (40+ Dias)",
    p5_desc: "Conta segura com mais de 40 dias de existência, pronta para jogos competitivos.",
    p6_title: "Conta Roblox (100+ Dias)",
    p6_desc: "Conta super antiquada e maturada com mais de 100 dias sem histórico de punições.",
    title_faq: "Perguntas Frequentes (FAQ)",
    faq_q1: "❓ Como recebo a conta após o pagamento?",
    faq_a1: "Você receberá o login e senha diretamente no seu contato ou via Discord assim que o pagamento for verificado.",
    faq_q2: "⚡ Qual o tempo de entrega?",
    faq_a2: "A maioria das contas possui entrega imediata ou em no máximo 15 minutos.",
    faq_q3: "🛡️ Como funciona a política de Reembolso e Garantia?",
    faq_a3: "O reembolso ou troca só será efetuado <strong>obrigatoriamente se o cliente gravar um vídeo contínuo (sem cortes)</strong> mostrando todo o passo a passo feito durante o recebimento da conta, a tentativa de login e a troca de senha. Caso não haja gravação completa, o reembolso não será aceito.",
    title_terms: "Termos de Uso",
    term_1: "<strong>1. Responsabilidade:</strong> Após o envio dos dados, o comprador deve imediatamente alterar e-mail e senha da conta.",
    term_2: "<strong>2. Suporte:</strong> Dúvidas adicionais devem ser retiradas diretamente através do nosso servidor oficial no Discord.",
    term_3: "<strong>3. Regra Rigorosa de Reembolso:</strong> O Reembolso só é válido mediante gravação em vídeo sem cortes de todo o processo realizado desde o recebimento do produto até a troca final da senha. Sem a gravação integral provando eventual problema, nenhuma solicitação de reembolso será aceita.",
    modal_checkout_title: "Finalizar Pedido",
    modal_product_label: "Produto:",
    modal_price_label: "Valor:",
    modal_refund_warning: "⚠️ <strong>Atenção:</strong> Grave um vídeo sem cortes de todo o processo de login e troca de senha! Reembolsos só são aceitos com essa gravação.",
    label_name: "Seu Nome / User:",
    label_discord: "Seu Discord:",
    btn_confirm: "Confirmar Pedido",
    footer_rights: "Todos os direitos reservados."
  },
  en: {
    loading: "Loading Astral Shop...",
    nav_catalog: "Catalog",
    nav_faq: "FAQ",
    nav_terms: "Terms",
    nav_discord: "Our Discord",
    hero_sub: "Exclusive Roblox account sales with instant delivery and total security.",
    stat_reviews: "Reviews",
    stat_sold: "Accounts Sold",
    stat_clients: "Total Clients",
    search_placeholder: "🔍 Search account type...",
    cat_all: "All",
    cat_1_7: "1-7 Days",
    cat_7plus: "7+ Days",
    cat_og: "OG (2015 & Before)",
    cat_premium: "Premium",
    cat_40plus: "40+ Days",
    cat_100plus: "100+ Days",
    title_catalog: "Available Accounts",
    btn_buy: "Buy Now",
    badge_1_7: "1-7 Days",
    badge_7plus: "7+ Days",
    badge_og: "OG (2015 & Before)",
    badge_premium: "Premium",
    badge_40plus: "40+ Days",
    badge_100plus: "100+ Days",
    p1_title: "Roblox Account (1 to 7 Days)",
    p1_desc: "Freshly created account, clean and ideal for new starts or alt usage.",
    p2_title: "Roblox Account (7+ Days)",
    p2_desc: "Matured account over a week old with no restrictions.",
    p3_title: "Rare OG Account (2015 & Before)",
    p3_desc: "Old account created in 2015 or earlier with rare badges and avatars.",
    p4_title: "Roblox Premium Account",
    p4_desc: "Comes with active subscription, paid items, and valued inventory.",
    p5_title: "Roblox Account (40+ Days)",
    p5_desc: "Secure account with 40+ days of creation, ready for competitive games.",
    p6_title: "Roblox Account (100+ Days)",
    p6_desc: "Super aged account with 100+ days and clean punishment history.",
    title_faq: "Frequently Asked Questions (FAQ)",
    faq_q1: "❓ How do I receive the account after payment?",
    faq_a1: "You will receive the login and password directly via Discord or contact as soon as payment is verified.",
    faq_q2: "⚡ What is the delivery time?",
    faq_a2: "Most accounts are delivered instantly or within 15 minutes max.",
    faq_q3: "🛡️ How does Refund and Warranty work?",
    faq_a3: "Refunds or exchanges will <strong>only be granted if the customer records an uncut video</strong> showing the entire step-by-step process during account receipt, login attempt, and password change. Without full video proof, no refund will be accepted.",
    title_terms: "Terms of Use",
    term_1: "<strong>1. Responsibility:</strong> After receiving credentials, buyer must immediately change the email and password.",
    term_2: "<strong>2. Support:</strong> Additional questions must be asked directly on our official Discord server.",
    term_3: "<strong>3. Strict Refund Policy:</strong> Refunds are only valid with an uncut video recording of the entire process from receipt to password change. Without full video proof, no refund requests will be accepted.",
    modal_checkout_title: "Checkout Order",
    modal_product_label: "Product:",
    modal_price_label: "Price:",
    modal_refund_warning: "⚠️ <strong>Warning:</strong> Record an uncut video of the entire login and password change process! Refunds are only accepted with this recording.",
    label_name: "Your Name / User:",
    label_discord: "Your Discord:",
    btn_confirm: "Confirm Order",
    footer_rights: "All rights reserved."
  },
  es: {
    loading: "Cargando Astral Shop...",
    nav_catalog: "Catálogo",
    nav_faq: "FAQ",
    nav_terms: "Términos",
    nav_discord: "Nuestro Discord",
    hero_sub: "Venta exclusiva de cuentas de Roblox con entrega instantánea y seguridad total.",
    stat_reviews: "Calificaciones",
    stat_sold: "Cuentas Vendidas",
    stat_clients: "Clientes Totales",
    search_placeholder: "🔍 Buscar tipo de cuenta...",
    cat_all: "Todas",
    cat_1_7: "1-7 Días",
    cat_7plus: "7+ Días",
    cat_og: "OG (2015 y Antes)",
    cat_premium: "Premium",
    cat_40plus: "40+ Días",
    cat_100plus: "100+ Días",
    title_catalog: "Cuentas Disponibles",
    btn_buy: "Comprar Ahora",
    badge_1_7: "1-7 Días",
    badge_7plus: "7+ Días",
    badge_og: "OG (2015 y Antes)",
    badge_premium: "Premium",
    badge_40plus: "40+ Días",
    badge_100plus: "100+ Días",
    p1_title: "Cuenta Roblox (1 a 7 Días)",
    p1_desc: "Cuenta recién creada, limpia e ideal para nuevos comienzos o soporte.",
    p2_title: "Cuenta Roblox (7+ Días)",
    p2_desc: "Cuenta madurada con más de una semana de creación sin restricciones.",
    p3_title: "Cuenta OG Rara (2015 y Antes)",
    p3_desc: "Cuenta antigua creada en 2015 o antes, con medallas y avatares raros.",
    p4_title: "Cuenta Roblox Premium",
    p4_desc: "Incluye suscripción activa, objetos pagados e inventario valioso.",
    p5_title: "Cuenta Roblox (40+ Días)",
    p5_desc: "Cuenta segura con más de 40 días de existencia, lista para juegos competitivos.",
    p6_title: "Cuenta Roblox (100+ Días)",
    p6_desc: "Cuenta súper antigua y madurada con más de 100 días sin historial de sanciones.",
    title_faq: "Preguntas Frecuentes (FAQ)",
    faq_q1: "❓ ¿Cómo recibo la cuenta después del pago?",
    faq_a1: "Recibirás el usuario y contraseña directamente en tu contacto o via Discord una vez verificado el pago.",
    faq_q2: "⚡ ¿Cuál es el tiempo de entrega?",
    faq_a2: "La mayoría de las cuentas tienen entrega inmediata o en un máximo de 15 minutos.",
    faq_q3: "🛡️ ¿Cómo funciona la política de Reembolso y Garantía?",
    faq_a3: "El reembolso o cambio solo se realizará <strong>obligatoriamente si el cliente graba un video continuo (sin cortes)</strong> mostrando todo el paso a paso realizado durante la recepción de la cuenta, intento de inicio de sesión y cambio de contraseña. Sin grabación completa, no se aceptará reembolso.",
    title_terms: "Términos de Uso",
    term_1: "<strong>1. Responsabilidad:</strong> Tras recibir los datos, el comprador debe cambiar inmediatamente el correo y la contraseña.",
    term_2: "<strong>2. Soporte:</strong> Dudas adicionales deben consultarse directamente en nuestro servidor oficial de Discord.",
    term_3: "<strong>3. Regla Estricta de Reembolso:</strong> El reembolso solo es válido mediante grabación en video sin cortes de todo el proceso desde la recepción hasta el cambio final de contraseña. Sin grabación integral, no se aceptará ninguna solicitud.",
    modal_checkout_title: "Finalizar Pedido",
    modal_product_label: "Producto:",
    modal_price_label: "Precio:",
    modal_refund_warning: "⚠️ <strong>Atención:</strong> ¡Graba un video sin cortes de todo el proceso de inicio de sesión y cambio de contraseña! Los reembolsos solo se aceptan con esta grabación.",
    label_name: "Tu Nombre / User:",
    label_discord: "Tu Discord:",
    btn_confirm: "Confirmar Pedido",
    footer_rights: "Todos los derechos reservados."
  }
};

// MUDANÇA DINÂMICA DE IDIOMA
function changeLanguage(lang) {
  const dict = translations[lang] || translations.pt;

  // Atualizar textos marcados com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Atualizar Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

// 1. CARREGAMENTO INICIAL
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loading-screen');
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }, 1200);
});

// 2. CANVAS DAS ESTRELAS E ESTRELAS CADENTES
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');

let stars = [];
let shootingStars = [];
const numStars = 150;
const numShootingStars = 3;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Star {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.alpha = Math.random();
    this.speed = Math.random() * 0.015 + 0.005;
  }
  update() {
    this.alpha += this.speed;
    if (this.alpha > 1 || this.alpha < 0) this.speed = -this.speed;
  }
  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(this.alpha)})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class ShootingStar {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * (canvas.height / 2);
    this.len = Math.random() * 80 + 60;
    this.speed = Math.random() * 8 + 4;
    this.size = Math.random() * 1.5 + 0.5;
    this.alpha = 1;
    this.active = false;
    this.delay = Math.random() * 2000 + 500;
    this.timer = setTimeout(() => { this.active = true; }, this.delay);
  }
  update() {
    if (!this.active) return;
    this.x -= this.speed;
    this.y += this.speed;
    this.alpha -= 0.01;

    if (this.x < -this.len || this.y > canvas.height + this.len || this.alpha <= 0) {
      clearTimeout(this.timer);
      this.reset();
    }
  }
  draw() {
    if (!this.active) return;
    ctx.save();
    const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.len, this.y - this.len);
    gradient.addColorStop(0, `rgba(255, 255, 255, ${this.alpha})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = this.size;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.len, this.y - this.len);
    ctx.stroke();
    ctx.restore();
  }
}

for (let i = 0; i < numStars; i++) stars.push(new Star());
for (let i = 0; i < numShootingStars; i++) shootingStars.push(new ShootingStar());

function animateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => { s.update(); s.draw(); });
  shootingStars.forEach(s => { s.update(); s.draw(); });
  requestAnimationFrame(animateCanvas);
}
animateCanvas();

// 3. FILTRO DE BUSCA E CATEGORIAS
let currentCategory = 'all';

function filterProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.querySelector('.prod-title').innerText.toLowerCase();
    const category = card.getAttribute('data-category');

    const matchesSearch = title.includes(query);
    const matchesCategory = (currentCategory === 'all' || category === currentCategory);

    if (matchesSearch && matchesCategory) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterProducts();
}

// 4. CHECKOUT MODAL
let activeProductId = '';

function openCheckout(productId) {
  activeProductId = productId;
  const card = document.getElementById(productId);
  const title = card.querySelector('.prod-title').innerText;
  const price = card.querySelector('.price').innerText;

  document.getElementById('modalProductName').innerText = title;
  document.getElementById('modalProductPrice').innerText = price;
  document.getElementById('checkoutModal').style.display = 'flex';
}

function closeCheckout() {
  document.getElementById('checkoutModal').style.display = 'none';
}

function submitOrder(e) {
  e.preventDefault();
  const name = document.getElementById('clientName').value;
  const discord = document.getElementById('clientDiscord').value;
  const title = document.getElementById('modalProductName').innerText;

  alert(`🚀 Pedido Confirmado!\n\nConta: ${title}\nCliente: ${name}\nDiscord: ${discord}\n\n⚠️ Lembre-se: Para validez de garantia/reembolso, grave um vídeo sem cortes durante o login e troca de senha!`);
  closeCheckout();
  document.getElementById('checkoutForm').reset();
}

// 5. AUTENTICAÇÃO E DASHBOARD DO ADMIN (2FA DISCORD 30s)
let generated2FACode = null;
let codeExpirationTime = 0;
let timerInterval = null;
let logoClicks = 0;

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
    openAdminAuth();
  }
});

document.getElementById('logoAdminTrigger').addEventListener('click', () => {
  logoClicks++;
  if (logoClicks >= 5) {
    logoClicks = 0;
    openAdminAuth();
  }
});

function openAdminAuth() {
  document.getElementById('adminAuthModal').style.display = 'flex';
}

function closeAdminAuth() {
  document.getElementById('adminAuthModal').style.display = 'none';
  reset2FAState();
}

function requestDiscord2FACode() {
  if (DISCORD_WEBHOOK_URL === "SEU_WEBHOOK_DO_DISCORD_AQUI") {
    alert("⚠️ Por favor, cole a URL do seu Webhook do Discord na variável 'DISCORD_WEBHOOK_URL' no script.js!");
    return;
  }

  generated2FACode = Math.floor(100000 + Math.random() * 900000).toString();
  codeExpirationTime = Date.now() + 30000;

  fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      embeds: [{
        title: "🔐 Autenticação Solicitada - Astral Shop",
        description: `Seu código de acesso ao Dashboard é: **\`${generated2FACode}\`**\n\n*Atenção: Este código expira em exatamente 30 segundos!*`,
        color: 11036407,
        timestamp: new Date()
      }]
    })
  }).then(() => {
    alert("✅ Código enviado para o seu Discord!");
    startTimerCount();
  }).catch(err => {
    alert("❌ Erro ao enviar para o Discord Webhook: " + err);
  });
}

function startTimerCount() {
  clearInterval(timerInterval);
  const timerDisplay = document.getElementById('timerDisplay');

  timerInterval = setInterval(() => {
    const remaining = Math.ceil((codeExpirationTime - Date.now()) / 1000);
    if (remaining <= 0) {
      clearInterval(timerInterval);
      timerDisplay.innerText = "⏳ O código expirou! Solicite um novo.";
      generated2FACode = null;
    } else {
      timerDisplay.innerText = `⏳ Código expira em: ${remaining}s`;
    }
  }, 1000);
}

function reset2FAState() {
  clearInterval(timerInterval);
  generated2FACode = null;
  codeExpirationTime = 0;
  document.getElementById('admin2FACode').value = '';
  document.getElementById('timerDisplay').innerText = '';
}

function verifyAdminCode() {
  const inputCode = document.getElementById('admin2FACode').value.trim();

  if (!generated2FACode || Date.now() > codeExpirationTime) {
    alert("❌ Código inválido ou expirado!");
    return;
  }

  if (inputCode === generated2FACode) {
    alert("🔓 Acesso Autorizado ao Dashboard!");
    closeAdminAuth();
    openAdminDashboard();
  } else {
    alert("❌ Código de verificação incorreto!");
  }
}

function openAdminDashboard() {
  const adminList = document.getElementById('adminProductList');
  adminList.innerHTML = '';

  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const id = card.id;
    const title = card.querySelector('.prod-title').innerText;
    const price = card.querySelector('.price').innerText;
    const imgUrl = card.querySelector('.product-img').src;

    const item = document.createElement('div');
    item.className = 'admin-product-item';
    item.innerHTML = `
      <h4>Item ID: ${id}</h4>
      <div class="admin-row">
        <div class="form-group">
          <label>Nome do Produto:</label>
          <input type="text" id="input-title-${id}" value="${title}" />
        </div>
        <div class="form-group">
          <label>Preço:</label>
          <input type="text" id="input-price-${id}" value="${price}" />
        </div>
      </div>
      <div class="form-group">
        <label>URL da Imagem:</label>
        <input type="text" id="input-img-${id}" value="${imgUrl}" />
      </div>
      <button class="btn" style="background: #10b981;" onclick="updateProductData('${id}')">Salvar Alterações</button>
    `;
    adminList.appendChild(item);
  });

  document.getElementById('adminDashboardModal').style.display = 'flex';
}

function updateProductData(id) {
  const newTitle = document.getElementById(`input-title-${id}`).value;
  const newPrice = document.getElementById(`input-price-${id}`).value;
  const newImg = document.getElementById(`input-img-${id}`).value;

  const card = document.getElementById(id);
  card.querySelector('.prod-title').innerText = newTitle;
  card.querySelector('.price').innerText = newPrice;
  card.querySelector('.product-img').src = newImg;

  alert(`✅ Alterações salvas para o item ID: ${id}`);
}

function closeAdminDashboard() {
  document.getElementById('adminDashboardModal').style.display = 'none';
  reset2FAState();
}
