import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';

// Inline Leaf SVG
function LeafIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75a6 6 0 0112.5 0v3.5a6 6 0 01-6 6h-3.5a6 6 0 01-6-6v-.5a3 3 0 013-3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v8.25M9 15.75l3-3 3 3" />
        </svg>
    );
}

export function About() {
    return (
        <section
            id="about"
            className="py-16 px-6 bg-transparent"
            aria-labelledby="about-heading"
        >
            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-up">
                    {/* Left: Logo Placeholder */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-3xl bg-card/80 border border-border/50 flex items-center justify-center transition-all duration-500 group backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 hover:scale-105">
                            <LeafIcon className="w-16 h-16 md:w-24 md:h-24 text-primary group-hover:scale-110 transition-transform duration-500" />

                            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary/20 blur-sm" aria-hidden="true" />
                            <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-primary/10 blur-md" aria-hidden="true" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-4">
                        <h2 id="about-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                            {t.about.title}
                        </h2>

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {t.about.description}
                        </p>

                        <ul className="flex flex-wrap gap-2 pt-2" aria-label="Nuestros servicios">
                            {t.about.tags.map((tag, index) => (
                                <li key={tag}>
                                    <span
                                        className={cn(
                                            "inline-block px-3 py-1.5 rounded-full bg-accent/80 text-accent-foreground text-sm font-medium border border-border/50 hover:border-primary/50 transition-all backdrop-blur-sm cursor-default hover:scale-105 animate-fade-in"
                                        )}
                                        style={{ animationDelay: `${300 + index * 100}ms` }}
                                    >
                                        {tag}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
