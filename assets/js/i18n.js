// ==========================================
//  i18n ES <-> EN  (default: ES)
//  - DICT: traducciones EN por clave data-i18n (bloques con HTML)
//  - PHRASES: mapa ES->EN para etiquetas de texto plano
//  El español se conserva del DOM (se cachea) y se restaura al volver a ES.
// ==========================================
(function () {
    const STORAGE = 'lang';

    const DICT = {
        en: {
            // Nav
            nav_inicio: `Home`,
            nav_experiencia: `Experience`,
            nav_habilidades: `Skills`,
            nav_casos: `Cases`,
            nav_educacion: `Education`,
            nav_proyectos: `Projects`,
            nav_contacto: `Contact`,
            nav_stack_full: `Tech Stack`,

            // Hero
            hero_badge: `Co-Founder &amp; CTO <strong>@ TST Solutions</strong>`,
            hero_subtitle: `Software Engineer · Full Stack · DevOps &amp; AI`,
            hero_creds: `<i class="fas fa-graduation-cap"></i> Master's Degree in Big Data · Information Systems Engineer`,
            hero_intro: `4+ years designing, building and <strong>operating end-to-end enterprise systems</strong>. Backend with Python (Django, FastAPI), PHP (Laravel) and Node.js, AI- and n8n-powered automation, and infrastructure on Linux and Windows. I turn business challenges into scalable solutions that cut costs and create value.`,
            hero_highlight: `<strong>Automation-first &amp; business-oriented mindset</strong> — I lead teams, integrate AI (local LLMs, MCP, OpenCV/YOLO) and deliver with proven quality. My references back the responsibility in every project.`,
            hero_btn_contact: `<i class="fas fa-envelope"></i> Contact me`,
            hero_btn_exp: `<i class="fas fa-briefcase"></i> View experience`,
            card1_strong: `4+ years`,
            card1_p: `Professional Experience`,
            card2_p: `Co-Founder &amp; CTO`,
            card3_strong: `AI + n8n`,
            card3_p: `End-to-end automation`,

            // TST band
            tst_tag: `My Startup`,
            tst_claim: `“We Solve Everything for You” — Digital transformation, SaaS platforms and tailor-made ERPs.`,
            tst_role: `<strong>Co-Founder &amp; Chief Technology Officer (CTO)</strong> · My own technology-based company.`,
            tst_m1: `Live platforms`,
            tst_m2: `Multi-tenant &amp; ERPs`,
            tst_m3: `Automated processes`,
            tst_m4: `E-commerce &amp; management`,
            tst_p1_t: `Official Site`,
            tst_p2_s: `Wholesale catalog`,
            tst_p3_t: `Online Store`,
            tst_p4_s: `Animal rescue`,
            tst_cta1: `<i class="fas fa-arrow-up-right-from-square"></i> Discover TST Solutions`,
            tst_cta2: `<i class="fas fa-diagram-project"></i> View case studies`,

            // Section headers
            sec_stack_h2: `<span class="gradient-text">Tech</span> Stack`,
            sec_stack_p: `Technologies and tools I master and use daily`,
            sec_exp_h2: `<span class="gradient-text">Work</span> Experience`,
            sec_exp_p: `My professional journey and key achievements`,
            sec_devops_h2: `<span class="gradient-text">DevOps</span> &amp; Automation`,
            sec_devops_p: `Systems architecture, continuous deployment and automation`,
            sec_skills_h2: `<span class="gradient-text">Technical</span> Skills`,
            sec_skills_p: `Technical and professional competencies`,
            sec_casos_h2: `<span class="gradient-text">Case Studies</span> TST Solutions`,
            sec_casos_p: `Production platforms built with modern technologies`,
            sec_edu_h2: `<span class="gradient-text">Education</span> &amp; Certifications`,
            sec_edu_p: `Academic background and professional certifications`,
            sec_proy_h2: `<span class="gradient-text">Featured</span> Projects`,
            sec_proy_p: `Some of my personal projects and developed applications`,
            sec_contacto_h2: `<span class="gradient-text">Contact</span>`,
            sec_contacto_p: `Shall we talk? I'm open to professional opportunities`,

            // Experience
            expsnob_title: `Innovation &amp; AI Development Project Coordinator`,
            exp1_title: `Software &amp; Applications Analyst`,
            exp2_title: `Junior Developer`,
            exp3_title: `Digital Marketing Manager &amp; Web Developer`,
            exp4_title: `Chief Technology Officer (CTO)`,
            exp4_company: `TST Solutions ("We Solve Everything for You") · Co-Founder · My own SaaS startup`,
            exp4b_title: `Software Architect &amp; Full Stack Developer`,
            exp4b_company: `TST Solutions · Freelance`,
            exp_flag: `My Startup`,
            exp5_title: `Technical Support Analyst`,
            exp6_title: `Systems Intern`,

            expsnob_list: `
                <li>Coordination of <strong>innovation projects and AI-based solution development</strong> for the food industry</li>
                <li>Design and implementation of AI automations and integrations (n8n, APIs, LLMs) to optimize enterprise processes</li>
                <li>Leadership of <strong>digital transformation</strong> initiatives and adoption of new technologies across the organization</li>
                <li>End-to-end project lifecycle management: requirements gathering, planning, execution and results tracking</li>
                <li>Bridging business and technology areas to turn operational needs into scalable solutions</li>`,

            exp1_list: `
                <li><strong>I lead a 3-person team</strong> in IT, coordinating development, backlog prioritization and requirements gathering</li>
                <li>Internal systems with Python (Django) and Bootstrap 5 with clean architecture, security and DEV / QA / PROD separation</li>
                <li>Designed and implemented an <strong>AI corporate chatbot</strong> (local LLM + MCP), orchestrated in n8n and integrated with Microsoft Teams and PostgreSQL</li>
                <li>Led the <strong>NEXUS</strong> project (Invoicing, Monitoring, Returns) and data integration with Power BI</li>
                <li>Built the Carrier Payment system: bulk import, tracking, Excel export and advanced filters (Select2)</li>
                <li>BI integrations for secure bulk data extraction (SSL/TLS) and real-time monitoring dashboards</li>
                <li>Integration and support of <strong>SAP Logon</strong> (SQVI, SQ2, SM37) and ETL processes in retail</li>
                <li><strong>Phishing</strong> awareness campaign module, with metrics and procedures aligned to ISO 27001</li>
                <li>Trained the whole team on n8n and Django, leading the area's migration to new technologies</li>
                <li>SQL Server and PostgreSQL administration with automated backups; Windows/Linux servers and Active Directory</li>`,

            exp2_list: `
                <li><strong>End-to-end development of the institution's academic module</strong>: grades, scoring and student records, with complete academic processes and workflows</li>
                <li>Development of the <strong>faculty, deans and directors</strong> module, including academic ranking (escalafón) management</li>
                <li><strong>Creation and update of the student module</strong> and the institutional <strong>events module</strong></li>
                <li>Development of the <strong>HR module with electronic time tracking</strong> and integrations with accounting and the university's other modules</li>
                <li>Internal systems with PHP, Laravel and Livewire, integrating academic, HR and accounting modules</li>
                <li>Management and maintenance of MySQL and MongoDB databases</li>
                <li>Administration and support of multiple academic and administrative systems</li>
                <li>Implementation and integration of new academic platforms: DSpace, Koha and OJS</li>
                <li>Integration with Andorra's education platform, including authorization and legalization of degree documentation</li>
                <li>User management, HR time tracking and supplier payments within institutional systems</li>
                <li>Network and tech infrastructure management, including Guayaquil campus cabling</li>
                <li>Administration of accounts, email and services via Microsoft Admin Center</li>
                <li>Implementation, configuration and administration of physical and virtual servers</li>
                <li>Administration and scheduling of institutional events, including live streaming</li>
                <li>Management of institutional and legal processes, including institutional PEDI and SAAFAV integration</li>
                <li>Coordination and joint work with Andorra on integration and optimization projects</li>`,

            exp3_list: `
                <li>Creation and editing of audiovisual content to promote CNC machines</li>
                <li>Planning and production of product-oriented advertising and demo videos</li>
                <li>Management and administration of social media profiles</li>
                <li>Thumbnail design and optimized titles and descriptions</li>
                <li>Publishing and distribution of content across multiple digital platforms</li>
                <li>Basic performance metrics analysis (reach, engagement and retention)</li>
                <li>Design and development of the <strong>corporate website (legioncnc.com)</strong> and SaaS platforms for the CNC machine company</li>
                <li>Backend with Django / Laravel and a modern frontend, with industrial catalog and complete branding</li>`,

            exp4_list: `
                <li><strong>Responsible for the technology strategy</strong>, software architecture and digital innovation for scalable enterprise solutions</li>
                <li>Definition of enterprise architecture and the <strong>digital product roadmap</strong> (SaaS, ERP, CRM, web and mobile apps)</li>
                <li>Technical direction of Full Stack projects, ensuring quality, security, scalability and maintainability</li>
                <li>Design of multi-tenant SaaS, ERP and CRM platforms under modular, scalable architectures</li>
                <li>Implementation of AI automations with n8n, REST APIs, Webhooks, Celery and Redis to optimize business processes</li>
                <li>Oversight of infrastructure, CI/CD, Docker, Kubernetes, Nginx, Gunicorn and DEV, QA and PROD environments</li>
                <li>Integration with SAP, Kommo CRM and third-party services to strengthen enterprise interoperability</li>
                <li>Development with Python (Django), PHP (Laravel), Node.js (Express), React, Vue, Bootstrap 5, Tailwind CSS and Flutter</li>
                <li>Definition of development standards, best practices, code review and technology governance</li>
                <li>End-to-end software lifecycle management, from requirements analysis to production and continuous improvement</li>
                <li><strong>Highlighted projects:</strong> multi-tenant e-commerce and online store SaaS, custom ERP/CRM and inventory systems, Flutter mobile apps and enterprise AI + n8n automations</li>`,

            exp4b_list: `
                <li>Design and development of <strong>multi-tenant SaaS platforms and ERPs</strong> under modular, scalable architecture, with AI- and n8n-powered process automation to cut errors and boost productivity</li>
                <li>Backend with Python (Django), PHP (Laravel) and Node.js (Express) with clean architecture and DEV / QA / PROD environment separation</li>
                <li>Modern frontend with Bootstrap 5, Tailwind, React and Vue</li>
                <li>Production projects: <strong>Online Store</strong> (tiendaonline.tstsolutionsec.com), <strong>enterprise E-commerce</strong> (ecommerce.tstsolutionsec.com) and <strong>Legion CNC</strong> (legioncnc.com)</li>
                <li>Integration of REST APIs, webhooks and external services; automation with n8n and Celery + Redis</li>
                <li>Docker / Kubernetes containerization; Nginx + Gunicorn + SSL infrastructure per domain</li>
                <li>Portfolio: Full Stack inventory system, fitness mobile app (Flutter), appointment-management SaaS and CRM integration (Kommo)</li>`,

            exp5_list: `
                <li>Management of products and services through enterprise software</li>
                <li>Documentation and administration of relevant IT system information</li>
                <li>Customer service focused on proactivity and meeting objectives</li>
                <li>Configuration of work environments at both hardware and software level</li>
                <li>Assembly and preparation of equipment (desktops and laptops)</li>
                <li>Administration of domains, Active Directory and corporate software</li>
                <li>Handling of Linux, Windows and macOS operating environments</li>
                <li>Earned the SCRUM certificate for agile methodologies</li>`,

            exp6_list: `
                <li>Management of products and services through enterprise software</li>
                <li>Documentation and administration of relevant IT system information</li>
                <li>Customer service focused on proactivity and meeting objectives</li>
                <li>Configuration of work environments at hardware and software level</li>
                <li>Assembly and preparation of equipment (desktops and laptops)</li>
                <li>Administration of domains, Active Directory and corporate software</li>
                <li>Handling of Linux, Windows and macOS operating systems</li>
                <li>Earned the SCRUM certificate for agile methodologies</li>`,

            // DevOps
            devops1_h3: `Infrastructure &amp; Servers`,
            devops2_h3: `Automation &amp; CI/CD`,
            devops3_h3: `Containerization &amp; Orchestration`,
            devops4_h3: `Databases &amp; Monitoring`,
            devops1_list: `
                <li>Administration of Linux and Windows servers (physical and virtualized)</li>
                <li>Configuration of Nginx, Apache, IIS with HTTP/2 and SSL</li>
                <li>Corporate network management (DNS, VLANs, FTP)</li>
                <li>Microsoft 365 / Admin Center administration</li>
                <li>Configuration of domains, corporate email and access control</li>
                <li>Virtualization with Hyper-V and VMware</li>`,
            devops2_list: `
                <li>Business process automation with n8n</li>
                <li>Integration of REST APIs, webhooks, AI and external services</li>
                <li>Async processing with Celery + Redis (workers, beat, monitoring)</li>
                <li>CI/CD pipelines with GitHub Actions</li>
                <li>Deployment automation with Webhooks and bash scripts</li>
                <li>Secure SSH configuration for remote administration</li>`,
            devops3_list: `
                <li>Containerization with Docker and Docker Compose</li>
                <li>Application deployment in production environments</li>
                <li>systemd service configuration for applications</li>
                <li>Basic container orchestration</li>
                <li>Docker image and registry management</li>
                <li>Containerized development and production environments</li>`,
            devops4_list: `
                <li>Advanced SQL and NoSQL database management</li>
                <li>Query optimization and database maintenance</li>
                <li>Log and application performance monitoring</li>
                <li>Data backup and recovery</li>
                <li>Performance analysis and query optimization</li>
                <li>Basic database replication and clustering</li>`,

            // Skills
            skill1_h3: `<i class="fas fa-code"></i> Development &amp; Backend`,
            skill2_h3: `<i class="fas fa-paint-brush"></i> Frontend &amp; UI`,
            skill3_h3: `<i class="fas fa-network-wired"></i> Infrastructure &amp; DevOps`,
            skill4_h3: `<i class="fas fa-database"></i> Databases &amp; Analytics`,
            skill_arch: `Software Architecture`
        }
    };

    // Etiquetas de texto plano (ES -> EN). Coincidencia exacta del texto recortado.
    const PHRASES = {
        // Project category titles
        "🤖 IA, Visión por Computadora & Sistemas Empresariales": "🤖 AI, Computer Vision & Enterprise Systems",
        "🎮 Juegos & Aplicaciones Interactivas": "🎮 Games & Interactive Apps",
        "📊 Dashboards & Visualización de Datos": "📊 Dashboards & Data Visualization",
        "🟢 TST SOLUTIONS - Startup SaaS": "🟢 TST SOLUTIONS - SaaS Startup",
        "💼 Otros Proyectos Empresariales": "💼 Other Business Projects",
        "🔐 Seguridad & Herramientas": "🔐 Security & Tools",
        "📚 Guías Educativas - Zero to Advanced": "📚 Educational Guides - Zero to Advanced",
        "Plataformas educativas completas diseñadas para enseñar tecnologías desde fundamentos hasta conceptos avanzados.": "Complete educational platforms designed to teach technologies from fundamentals to advanced concepts.",

        // AI / enterprise project cards
        "🦺 Detección de Cascos con IA": "🦺 AI Helmet Detection",
        "💬 Chatbot Corporativo con IA": "💬 AI Corporate Chatbot",
        "🎓 Módulo Académico Completo": "🎓 Complete Academic Module",
        '📚 +30 Guías Técnicas "Desde Cero"': '📚 30+ Technical Guides "From Zero"',
        "Visión por computadora (Python · OpenCV · YOLO) para monitoreo en tiempo real del cumplimiento de seguridad industrial, con alertas automáticas.": "Computer vision (Python · OpenCV · YOLO) for real-time monitoring of industrial safety compliance, with automatic alerts.",
        "Prototipo funcional en n8n integrado con Microsoft Teams y PostgreSQL, con LLM local y MCP (Quifatex).": "Functional n8n prototype integrated with Microsoft Teams and PostgreSQL, with a local LLM and MCP (Quifatex).",
        "Sistema de gestión académica end-to-end: notas, calificaciones, procesos académicos e integración con RRHH y contabilidad.": "End-to-end academic management system: grades, scoring, academic processes and HR/accounting integration.",
        "Más de 30 guías completas (Python, JS, Java, Go, React, Django, Docker, Kubernetes y más) en repositorios abiertos.": "30+ complete guides (Python, JS, Java, Go, React, Django, Docker, Kubernetes and more) in open repositories.",

        // Game / dashboard descriptions
        "Aventura espacial": "Space adventure",
        "Clásico juego Tetris": "Classic Tetris game",
        "Juego de saltos": "Jumping game",
        "Exploración de criaturas": "Creature exploration",
        "Aimbot con sistema de timing": "Aimbot with timing system",
        "Monitoreo de criptomonedas": "Cryptocurrency monitoring",
        "Mapa de indicadores": "Indicators map",
        "Simulador de tráfico": "Traffic simulator",
        "Plataforma corporativa - Transformación Digital": "Corporate platform - Digital Transformation",
        "E-commerce Demo - Sistema Completo": "E-commerce Demo - Full System",
        "E-commerce Empresarial - B2B Mayorista": "Enterprise E-commerce - B2B Wholesale",
        "Plataforma de Rescate Animal": "Animal Rescue Platform",
        "Plataforma de soluciones empresariales": "Business solutions platform",
        "Sistema de automatización CNC": "CNC automation system",
        "Plataforma e-commerce": "E-commerce platform",
        "Plataforma educativa": "Educational platform",
        "Entorno de pruebas de seguridad": "Security testing environment",
        "Configuración y tips de Vim": "Vim configuration & tips",
        "Guía de procesamiento de texto": "Text processing guide",
        "Analizador del sistema": "System analyzer",
        "Linux avanzado para DevOps": "Advanced Linux for DevOps",
        "Proyecto de exploración mundial": "World exploration project",
        "Guía completa": "Complete guide",

        // Buttons
        "Ver Proyecto": "View Project",
        "Ver Guía": "View Guide",
        "Visitar Sitio": "Visit Site",
        "Visitar Demo": "Visit Demo",
        "Visitar Plataforma": "Visit Platform",
        "Ver repos": "View repos",
        "Contáctame Ahora": "Contact me now",

        // Case studies
        "🟢 Producción": "🟢 Production",
        "Plataforma integral de rescate animal con sistema de adopciones, apadrinamientos con algoritmo de prioridad, donaciones, reservas de glamping y tienda online.": "All-in-one animal rescue platform with adoptions, priority-algorithm sponsorships, donations, glamping reservations and an online store.",
        "Plataforma B2B con módulo mayorista, catálogo empresarial, geografía ecuatoriana (provincia/cantón/parroquia), descuentos por volumen y panel de reportes.": "B2B platform with wholesale module, enterprise catalog, Ecuadorian geography (province/canton/parish), volume discounts and a reporting panel.",
        "E-commerce demo completo con carrito AJAX, catálogo categorizado, ofertas, búsqueda, panel administrativo y autenticación segura.": "Complete demo e-commerce with AJAX cart, categorized catalog, offers, search, admin panel and secure authentication.",
        "Sitio corporativo para empresa lider en fabricación de máquinas CNC en Ecuador. Catálogo industrial, branding complete y contenido multimedia.": "Corporate website for Ecuador's leading CNC machine manufacturer. Industrial catalog, complete branding and multimedia content.",

        // Contact
        "Disponible para propuestas profesionales": "Available for professional proposals",
        "Proyectos y código fuente": "Projects and source code",
        "Perfil profesional": "Professional profile",
        "Contacto directo": "Direct contact",
        "¿Listo para crear algo increíble juntos?": "Ready to build something amazing together?",
        "Disponible para roles Full Stack, Backend, DevOps o Arquitectura de Sistemas. Comprometido con la excelencia y la entrega de soluciones de alta calidad.": "Available for Full Stack, Backend, DevOps or Systems Architecture roles. Committed to excellence and the delivery of high-quality solutions.",

        // Education
        "Ingeniería en Sistemas de la Información": "Information Systems Engineering",
        "Magíster en Big Data": "Master's Degree in Big Data",
        "Intercambio Académico": "Academic Exchange",
        "Completado": "Completed",
        "Finalizada · Modalidad Virtual": "Completed · Online",
        "Certificado": "Certified",
        "Formación integral en desarrollo de software, arquitectura de sistemas, bases de datos y gestión de\n                    proyectos tecnológicos.": "Comprehensive training in software development, systems architecture, databases and tech project management.",
        "Analítica de datos a gran escala, Apache Spark, procesamiento y modelado de datos para la toma de\n                    decisiones basada en información.": "Large-scale data analytics, Apache Spark, data processing and modeling for data-driven decision-making.",
        "Certificación en metodologías ágiles SCRUM, gestión de proyectos y trabajo en equipos\n                    multidisciplinarios.": "Certification in SCRUM agile methodologies, project management and multidisciplinary teamwork.",
        "Programa de intercambio internacional, experiencia multicultural y especialización en sistemas de\n                    información globales.": "International exchange program, multicultural experience and specialization in global information systems.",

        // Tech levels
        "Avanzado": "Advanced",
        "Intermedio": "Intermediate",
        "Básico": "Basic",

        // Experience periods
        "Jul 2026 - Actualidad": "Jul 2026 - Present",
        "Sep 2025 - Jul 2026": "Sep 2025 - Jul 2026",
        "Abr 2024 - Sep 2025": "Apr 2024 - Sep 2025",
        "Dic 2024 - Actualidad": "Dec 2024 - Present",
        "Ene 2026 - Actualidad": "Jan 2026 - Present",
        "Ene 2026 - Jun 2026": "Jan 2026 - Jun 2026",
        "Jun 2022 - Abr 2024": "Jun 2022 - Apr 2024",
        "Dic 2021 - Jun 2022": "Dec 2021 - Jun 2022",

        // Footer
        "Ingeniero de Software · Full Stack · DevOps & Automatización con IA": "Software Engineer · Full Stack · DevOps & AI Automation",
        "+4 años construyendo y operando sistemas empresariales de extremo a extremo. Disponible para roles Full Stack, Backend, DevOps o Arquitectura de Software.": "4+ years building and operating end-to-end enterprise systems. Available for Full Stack, Backend, DevOps or Software Architecture roles.",
        "Navegación": "Navigation",
        "Inicio": "Home",
        "Experiencia": "Experience",
        "Casos de éxito": "Case studies",
        "Proyectos": "Projects",
        "Contacto": "Contact",
        "Sitio oficial": "Official site",
        "Tienda Online": "Online Store",
        'Mi startup — "Te Solucionamos Todo". Software a la medida, SaaS y automatización con IA.': 'My startup — "We Solve Everything for You". Custom software, SaaS and AI automation.',
        "· Co-Fundador & CTO de TST Solutions": "· Co-Founder & CTO of TST Solutions",
        "© 2026 Isaac Haro · Hecho con HTML5, CSS3 & JavaScript · Todos los derechos reservados": "© 2026 Isaac Haro · Built with HTML5, CSS3 & JavaScript · All rights reserved"
    };

    // Reemplazos por subcadena (aplican a cualquier nodo de texto gestionado)
    const SUBSTR = [["desde Cero", "from Zero"]];

    const SELECTORS = [
        '[data-i18n]',
        '.tech-level', '.experience-period',
        '.project-category-title', '.project-category > p',
        '.project-card h4', '.project-card > p',
        '.btn-project', '.caso-card .btn', '.cta-box .btn',
        '.caso-badge', '.caso-desc',
        '.contact-info',
        '.cta-box h3', '.cta-box > p',
        '.education-degree', '.education-period', '.education-details',
        '.footer-tagline', '.footer-about', '.footer-title',
        '.footer-links a', '.footer-tst-claim', '.footer-bottom p'
    ];

    let managed = [];
    let current = 'es';

    function collect() {
        const set = new Set();
        SELECTORS.forEach(sel => document.querySelectorAll(sel).forEach(el => set.add(el)));
        managed = Array.from(set);
        managed.forEach(el => {
            if (el.dataset.i18nCache === undefined) el.dataset.i18nCache = el.innerHTML;
        });
    }

    function walk(el) {
        el.childNodes.forEach(node => {
            if (node.nodeType === 3) {
                let raw = node.nodeValue;
                const t = raw.trim();
                if (t && PHRASES[t] !== undefined) {
                    raw = raw.replace(t, PHRASES[t]);
                }
                SUBSTR.forEach(([a, b]) => { raw = raw.split(a).join(b); });
                node.nodeValue = raw;
            } else if (node.nodeType === 1) {
                walk(node);
            }
        });
    }

    function toEN(el) {
        const key = el.getAttribute('data-i18n');
        if (key && DICT.en[key] !== undefined) {
            el.innerHTML = DICT.en[key];
        } else {
            walk(el);
        }
    }

    function setLang(lang) {
        collect();
        if (lang === 'en') {
            managed.forEach(toEN);
        } else {
            lang = 'es';
            managed.forEach(el => { el.innerHTML = el.dataset.i18nCache; });
        }
        current = lang;
        document.documentElement.lang = lang;
        const lbl = document.getElementById('langLabel');
        if (lbl) lbl.textContent = lang === 'en' ? 'ES' : 'EN';
        try { localStorage.setItem(STORAGE, lang); } catch (e) { }
    }

    function init() {
        let saved = 'es';
        try { saved = localStorage.getItem(STORAGE) || 'es'; } catch (e) { }
        setLang(saved);
        const btn = document.getElementById('langSwitch');
        if (btn) {
            btn.addEventListener('click', () => setLang(current === 'en' ? 'es' : 'en'));
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
