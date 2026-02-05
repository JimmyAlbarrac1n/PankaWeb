export const translations = {
    es: {
        // Nav
        nav: {
            work: 'Proyectos',
            about: 'Nosotros',
            contact: 'Contacto',
        },

        // Hero
        hero: {
            title: 'Diseño digital para negocios que',
            titleHighlight: 'florecen',
            subtitle: 'Creamos experiencias web memorables que conectan con tus clientes y hacen crecer tu negocio.',
        },

        // Projects
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

        // About
        about: {
            title: 'Hacemos florecer tu negocio digital',
            description: 'En Panka, combinamos diseño artesanal con tecnología moderna. Ayudamos a emprendedores a lanzar webs rápidas, económicas y personalizadas que convierten visitantes en clientes.',
            tags: ['Diseño Web', 'Branding', 'E-commerce', 'SEO'],
        },

        // Clients
        clients: {
            title: 'Empresas que confían en nosotros',
        },

        // FAQ
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

        // Contact
        contact: {
            title: '¿Listo para hacer florecer tu proyecto?',
            subtitle: 'Cuéntanos tu idea y te responderemos en menos de 24 horas',
            placeholder: 'Escribe tu idea aquí... ¿Qué tipo de web necesitas? ¿Cuál es tu negocio?',
            button: 'Enviar a WhatsApp',
            social: 'O escríbenos por:',
            defaultMessage: '¡Hola! Me interesa crear un proyecto web con Panka.',
        },

        // Footer
        footer: {
            copyright: '© 2024 Panka. Diseño digital para negocios que florecen.',
        },

        // SEO
        seo: {
            title: 'Panka | Diseño Web para Negocios',
            description: 'Creamos experiencias web memorables que conectan con tus clientes y hacen crecer tu negocio. Diseño digital para negocios que florecen.',
        },
    },

    en: {
        // Nav
        nav: {
            work: 'Work',
            about: 'About',
            contact: 'Contact',
        },

        // Hero
        hero: {
            title: 'Digital design for businesses that',
            titleHighlight: 'flourish',
            subtitle: 'We create memorable web experiences that connect with your customers and grow your business.',
        },

        // Projects
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

        // About
        about: {
            title: 'We make your digital business flourish',
            description: 'At Panka, we combine artisanal design with modern technology. We help entrepreneurs launch fast, affordable, and personalized websites that convert visitors into customers.',
            tags: ['Web Design', 'Branding', 'E-commerce', 'SEO'],
        },

        // Clients
        clients: {
            title: 'Companies that trust us',
        },

        // FAQ
        faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Everything you need to know before getting started',
            questions: [
                {
                    question: 'How long does a website take?',
                    answer: '5 to 10 business days, depending on the complexity of the project and how quickly you send us the necessary materials.',
                },
                {
                    question: 'What do I need to provide?',
                    answer: 'Your logo and ideas, we write the rest. We guide you through the entire process to make it as simple as possible.',
                },
                {
                    question: 'Is it a one-time payment?',
                    answer: 'Yes, no hidden monthly fees. You pay once and the website is yours forever. You only need to renew hosting annually.',
                },
                {
                    question: 'Does it include a domain?',
                    answer: 'We advise you on purchasing it in your name. This way you have full control of your domain and online presence.',
                },
            ],
        },

        // Contact
        contact: {
            title: 'Ready to make your project flourish?',
            subtitle: 'Tell us your idea and we\'ll respond within 24 hours',
            placeholder: 'Write your idea here... What type of website do you need? What\'s your business?',
            button: 'Send to WhatsApp',
            social: 'Or reach us via:',
            defaultMessage: 'Hi! I\'m interested in creating a web project with Panka.',
        },

        // Footer
        footer: {
            copyright: '© 2024 Panka. Digital design for businesses that flourish.',
        },

        // SEO
        seo: {
            title: 'Panka | Web Design for Businesses',
            description: 'We create memorable web experiences that connect with your customers and grow your business. Digital design for businesses that flourish.',
        },
    },
} as const;

export type Language = 'es' | 'en';
export type Translations = typeof translations;
