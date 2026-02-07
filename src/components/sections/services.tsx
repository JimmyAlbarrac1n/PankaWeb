import { t } from '@/lib/translations';

// SVG Icons for each plan
function RocketIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
    );
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    );
}

function SparklesIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

const plans = [
    {
        id: 1,
        name: 'Essential Landing',
        tagline: 'Presencia profesional, rápida y efectiva',
        ideal: 'Campañas específicas o perfiles que inician su marca personal',
        icon: RocketIcon,
        price: '$250',
        features: [
            'Landing Page de una sección (One Page)',
            'Desarrollo a medida, sin plantillas',
            'Optimización para carga ultra rápida',
            'Enlace directo a WhatsApp',
        ],
    },
    {
        id: 2,
        name: 'Influencer Portfolio',
        tagline: 'El estándar de oro para creadores consolidados',
        ideal: 'Mostrar portafolio de marcas, prensa y trayectoria',
        icon: StarIcon,
        price: '$450',
        featured: true,
        features: [
            'Hasta 3 secciones dinámicas',
            'Prototipo previo en Figma',
            'Animaciones modernas y fluidas',
            'Formulario inteligente vía WhatsApp',
        ],
    },
    {
        id: 3,
        name: 'Custom Experience',
        tagline: 'Arquitectura digital premium para alto perfil',
        ideal: 'Influencers con productos propios o lanzamientos grandes',
        icon: SparklesIcon,
        price: 'Desde $700',
        features: [
            'Estructura multisección narrativa',
            'Animaciones de alta gama',
            'Copywriting asistido por IA',
            'Prioridad en despliegue y soporte',
        ],
    },
];

export function Services() {
    return (
        <section
            id="services"
            className="py-20 px-6 bg-transparent"
            aria-labelledby="services-heading"
        >
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-14 animate-fade-in-up">
                    <span className="text-primary text-sm font-medium uppercase tracking-widest">
                        — Lo que mejor hacemos —
                    </span>
                    <h2 id="services-heading" className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                        Nuestros Planes
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Experiencias digitales de alto impacto con React y Next.js. Velocidad, estética y conversión directa a WhatsApp.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {plans.map((plan, index) => {
                        const IconComponent = plan.icon;
                        return (
                            <article
                                key={plan.id}
                                className={`relative group rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${plan.featured
                                        ? 'bg-gradient-to-b from-primary/10 to-card/90 border-primary/50 hover:shadow-primary/20'
                                        : 'bg-card/80 border-border/50 hover:border-primary/30 hover:shadow-primary/10'
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-3 right-6 w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                                    {String(plan.id).padStart(2, '0')}
                                </div>

                                {/* Featured Badge */}
                                {plan.featured && (
                                    <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                                        Más Popular
                                    </div>
                                )}

                                <div className="p-6 lg:p-8">
                                    {/* Icon & Title */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {plan.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {plan.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Ideal For */}
                                    <p className="text-sm text-muted-foreground mb-6 pl-16">
                                        <span className="text-foreground font-medium">Ideal para:</span> {plan.ideal}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8" aria-label={`Características de ${plan.name}`}>
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Price */}
                                    <div className="pt-6 border-t border-border/50">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                                            <span className="text-sm text-muted-foreground">USD</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            + $120 USD/año (dominio + hosting + soporte)
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Important Info */}
                <div className="mt-16 p-6 lg:p-8 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '400ms' }}>
                    <h3 className="text-xl font-bold text-foreground mb-6">Información Importante</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">📝 Rondas de Cambios</h4>
                            <p className="text-sm text-muted-foreground">
                                Incluimos 2 rondas: una en prototipo (diseño) y otra tras la entrega final para ajustes menores.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">🔒 Mantenimiento Anual</h4>
                            <p className="text-sm text-muted-foreground">
                                $120 USD/año incluye dominio, hosting de alta velocidad y soporte técnico continuo.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-foreground mb-2">🤝 Referidos</h4>
                            <p className="text-sm text-muted-foreground">
                                ¿Vienes de un influencer autorizado? Menciónalo al iniciar tu cotización para beneficios exclusivos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
