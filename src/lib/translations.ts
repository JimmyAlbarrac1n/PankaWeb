// Static translations - no React Context needed
// Language is determined by URL or cookie, not client state

export const translations = {
    es: {
        nav: {
            work: 'Proyectos',
            about: 'Nosotros',
            services: 'Planes',
            contact: 'Contacto',
        },
        hero: {
            title: 'Diseño digital para negocios que',
            titleHighlight: 'florecen',
            subtitle: 'Creamos experiencias web memorables que conectan con tus clientes y hacen crecer tu negocio.',
        },
        projects: {
            bloomStudio: {
                title: 'Bloom Studio',
                description: 'Branding & Web Design',
            },
            terraFoods: {
                title: 'Terra Foods',
                description: 'E-commerce Platform',
            },
            verdantLabs: {
                title: 'Verdant Labs',
                description: 'SaaS Dashboard',
            },
            oasisTravel: {
                title: 'Oasis Travel',
                description: 'Booking Experience',
            },
        },
        about: {
            title: 'Hacemos florecer tu negocio digital',
            description: 'En Panka, combinamos diseño artesanal con tecnología moderna. Ayudamos a emprendedores a lanzar webs rápidas, económicas y personalizadas que convierten visitantes en clientes.',
            tags: ['Diseño Web', 'Branding', 'E-commerce', 'SEO'],
        },
        clients: {
            title: 'Empresas que confían en nosotros',
        },
        faq: {
            title: 'Preguntas frecuentes',
            subtitle: 'Todo lo que necesitas saber antes de comenzar',
            questions: [
                {
                    question: '¿Cuánto tiempo tarda una web?',
                    answer: 'De 5 a 10 días hábiles, dependiendo de la complejidad del proyecto y la rapidez con que nos envíes el material necesario.',
                },
                {
                    question: '¿Qué necesito entregarles?',
                    answer: 'Tu logo e ideas, nosotros redactamos el resto. Te guiamos en todo el proceso para que sea lo más sencillo posible.',
                },
                {
                    question: '¿Es pago único?',
                    answer: 'Sí, sin mensualidades ocultas. Pagas una vez y la web es tuya para siempre. Solo necesitarás renovar el hosting anualmente.',
                },
                {
                    question: '¿Incluye dominio?',
                    answer: 'Te asesoramos para comprarlo a tu nombre. Así tienes el control total de tu dominio y tu presencia online.',
                },
            ],
        },
        contact: {
            title: '¿Listo para hacer florecer tu proyecto?',
            subtitle: 'Cuéntanos tu idea y te responderemos en menos de 24 horas',
            placeholder: 'Escribe tu idea aquí... ¿Qué tipo de web necesitas? ¿Cuál es tu negocio?',
            button: 'Enviar a WhatsApp',
            social: 'O escríbenos por:',
            defaultMessage: '¡Hola! Me interesa crear un proyecto web con Panka.',
        },
        footer: {
            copyright: '© 2024 Panka. Diseño digital para negocios que florecen.',
        },
    },
} as const;

// Default to Spanish - can be expanded for i18n later
export const t = translations.es;

export type Translations = typeof translations.es;
