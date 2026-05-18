// ========== DATOS DE SERVICIOS POR CATEGORÍA (completo) ==========
const servicesData = [
    {
        category: "🔧 Oficios de Construcción e Industria",
        icon: "fa-helmet-safety",
        items: [
            "Albañil", "Yesero", "Plomero", "Electricista (domiciliario e industrial)", "Soldador", "Herrero",
            "Carpintero (de obra blanca y de construcción)", "Ebanista (muebles finos)", "Pintor de edificaciones",
            "Operador de maquinaria pesada", "Mecánico industrial", "Mecánico de motores diésel",
            "Mecánico de motocicletas", "Mecánico automotriz", "Electromecánico", "Tornero fresador",
            "Operador de montacargas", "Instalador de aires acondicionados y refrigeración",
            "Técnico en mantenimiento de ascensores", "Instalador de vidrios", "Instalación de techos",
            "Pulidor de pisos y mármoles", "Tapicero", "Laminador de pintura automotriz", "Desabollador de vehículos"
        ]
    },
    {
        category: "🍽️ Oficios de Alimentación y Gastronomía",
        icon: "fa-utensils",
        items: [
            "Panadero", "Pastelero - Repostero", "Confitería (dulces y caramelos)", "Churrero", "Galletero",
            "Elaborador de productos de chocolate", "Decorador de pasteles", "Carnicero / Despostador",
            "Pescador / Tripulante", "Cortador de embutidos y quesos", "Cervecero artesanal",
            "Tostador de café", "Heladero artesanal", "Catering / Mesero profesional"
        ]
    },
    {
        category: "💇 Servicios Personales y Estética",
        icon: "fa-cut",
        items: [
            "Barbero", "Peluquero", "Estilista", "Maquillador profesional", "Manicurista y Pedicurista",
            "Depilador profesional", "Masajista (terapéutico y relajante)", "Spa / Asistente de baños de espuma",
            "Entrenador personal / Fitness"
        ]
    },
    {
        category: "🎨 Moda, Arte y Oficios Creativos",
        icon: "fa-palette",
        items: [
            "Sastre / Modista", "Costurero", "Bordador profesional", "Diseñador de modas", "Calzado artesanal",
            "Marroquineria", "Diseñador gráfico", "Fotógrafo profesional", "Editor de video",
            "Locutor / Animador", "Dibujante técnico", "Artista plástico", "Ceramista / Alfarero",
            "Floristería / Arreglos florales", "Orfebre / Joyero"
        ]
    },
    {
        category: "💻 Oficios Tecnológicos y Técnicos Especializados",
        icon: "fa-microchip",
        items: [
            "Técnico en reparación de celulares", "Técnico en reparación de computadoras",
            "Instalador de cámaras de seguridad (CCTV)", "Instalador de redes de internet",
            "Desarrollador web freelance", "Community Manager", "Operador de sistemas (Data entry)",
            "Dronista profesional", "Técnico en energía solar", "Calibrador de instrumentos"
        ]
    },
    {
        category: "🌾 Agropecuaria y Medio Ambiente",
        icon: "fa-leaf",
        items: [
            "Agricultor / Jardinero", "Producción pecuaria", "Manejo de invernaderos", "Viverista",
            "Apicultor", "Arborista / Podador de árboles", "Paisajista / Diseñador de jardines",
            "Acuicultor", "Control de plagas y fumigador", "Clasificador de reciclaje"
        ]
    },
    {
        category: "📦 Servicios Comerciales y Generales",
        icon: "fa-truck",
        items: [
            "Conductor de transporte", "Mensajero / Deliveries", "Asistente administrativo",
            "Cajero / Auxiliar de tienda", "Vendedor / Asesor comercial", "Almacenista",
            "Empacador", "Seguridad privada", "Niñera / Cuidador de ancianos", "Limpiador / Aseador",
            "Lavado y encerado de autos", "Lustrador de zapatos", "Cerrajero", "Guardavidas",
            "Dactilógrafo (digitalización)"
        ]
    }
];

// Servicios destacados (primeros 5 + otros importantes)
const featuredServices = [
    { name: "Fumigación (Control de plagas)", icon: "fa-bug", desc: "Profesional certificado" },
    { name: "Herrería artesanal e industrial", icon: "fa-hammer", desc: "Puertas, ventanas, estructuras" },
    { name: "Limpieza de muebles y tapicería", icon: "fa-couch", desc: "Vapor ecológico" },
    { name: "Instalaciones eléctricas", icon: "fa-bolt", desc: "Domiciliaria/industrial" },
    { name: "Plomería y fontanería 24/7", icon: "fa-wrench", desc: "Urgencias resueltas" }
];

// Productos (ejemplos reales)
const productsList = [
    { name: "Kit de fumigación profesional", price: "RD$ 1,890", icon: "fa-spray-can-sparkles", desc: "Insecticida + pulverizador" },
    { name: "Portón metálico de herrería (modelo básico)", price: "RD$ 12,500", icon: "fa-door-open", desc: "Medida 1.20m x 2m" },
    { name: "Limpia tapicería en espuma seca", price: "RD$ 850", icon: "fa-bottle-water", desc: "Limpieza profunda" },
    { name: "Cable eléctrico THHN calibre 12", price: "RD$ 45/metro", icon: "fa-plug", desc: "Rollos x 30m" },
    { name: "Servicio de instalación de aires (mano de obra)", price: "RD$ 2,200", icon: "fa-snowflake", desc: "Incluye revisión" },
    { name: "Pintura epóxica para pisos", price: "RD$ 1,250/galón", icon: "fa-paint-roller", desc: "Alta resistencia" }
];

// ========== RENDER SERVICIOS DESTACADOS ==========
function renderFeatured() {
    const container = document.getElementById("featured-services");
    if (!container) return;
    container.innerHTML = featuredServices.map(serv => `
        <div class="service-card">
            <i class="fas ${serv.icon}"></i>
            <h3>${serv.name}</h3>
            <p>${serv.desc}</p>
            <span class="badge"><i class="fas fa-check-circle"></i> Profesional verificado</span>
        </div>
    `).join('');
}

// ========== RENDER TODOS LOS SERVICIOS (Acordeón por categorías) ==========
function renderAllServices() {
    const container = document.getElementById("services-container");
    if (!container) return;
    let html = '';
    servicesData.forEach((cat, idx) => {
        const catId = `cat-${idx}`;
        html += `
            <div class="category-block">
                <div class="category-title" data-cat="${catId}">
                    <span><i class="fas ${cat.icon}"></i> ${cat.category}</span>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="services-list" id="${catId}">
                    ${cat.items.map(item => `<div class="service-item"><i class="fas fa-check-circle"></i> ${item}</div>`).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    // Agregar evento de toggle a cada título
    document.querySelectorAll('.category-title').forEach(title => {
        title.addEventListener('click', () => {
            const targetId = title.getAttribute('data-cat');
            const targetList = document.getElementById(targetId);
            if (targetList) {
                targetList.classList.toggle('show');
                title.classList.toggle('active');
            }
        });
        // Abrir por defecto la primera categoría (opcional)
        if(title.getAttribute('data-cat') === 'cat-0') {
            const firstList = document.getElementById('cat-0');
            if(firstList) firstList.classList.add('show');
            title.classList.add('active');
        }
    });
}

// ========== RENDER PRODUCTOS ==========
function renderProducts() {
    const grid = document.getElementById("products-list");
    if (!grid) return;
    grid.innerHTML = productsList.map(prod => `
        <div class="product-card">
            <div class="product-img"><i class="fas ${prod.icon} fa-3x"></i></div>
            <div class="product-info">
                <h4>${prod.name}</h4>
                <p>${prod.desc}</p>
                <div class="price">${prod.price}</div>
                <button class="btn-small" data-product="${prod.name}">Consultar disponibilidad <i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>
    `).join('');

    // Eventos para botones de productos (simular cotización rápida)
    document.querySelectorAll('.btn-small').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productName = btn.getAttribute('data-product');
            document.getElementById('serviceInterest').value = `Producto: ${productName}`;
            document.getElementById('message').value = `Hola, me interesa comprar: ${productName}. Necesito cotización.`;
            document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ========== FORMULARIO DE CONTACTO ==========
function setupContactForm() {
    const form = document.getElementById('quoteForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const interest = document.getElementById('serviceInterest').value;
        const msg = document.getElementById('message').value;
        if(!name || !phone || !interest) {
            alert("Por favor completa los campos obligatorios (nombre, teléfono y servicio).");
            return;
        }
        // Simular envío (aquí podrías integrar WhatsApp o mail)
        const whatsappMsg = `Hola Donza, soy ${name} (tel: ${phone}). Interesado en: ${interest}. Detalle: ${msg}`;
        const waLink = `https://wa.me/18099819147?text=${encodeURIComponent(whatsappMsg)}`;
        window.open(waLink, '_blank');
        alert("Solicitud enviada. Serás redirigido a WhatsApp para agilizar tu cotización. ¡Gracias!");
        form.reset();
    });
}

// ========== INICIALIZAR PAGINA ==========
document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    renderAllServices();
    renderProducts();
    setupContactForm();
});
