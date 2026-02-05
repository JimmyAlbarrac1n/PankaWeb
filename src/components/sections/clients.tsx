'use client';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';

const clients = [
    { id: 1, name: 'Cliente 1' },
    { id: 2, name: 'Cliente 2' },
    { id: 3, name: 'Cliente 3' },
    { id: 4, name: 'Cliente 4' },
    { id: 5, name: 'Cliente 5' },
    { id: 6, name: 'Cliente 6' },
    { id: 7, name: 'Cliente 7' },
    { id: 8, name: 'Cliente 8' },
];

export function Clients() {
    const { ref, isInView } = useInView({ threshold: 0.1 });
    const { t } = useLanguage();

    return (
        <section
            ref={ref}
            className="py-10 md:py-14 overflow-hidden bg-transparent"
        >
            <div
                className={cn(
                    "container mx-auto px-6 mb-8 max-w-7xl transition-all duration-600",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                )}
            >
                <h2 className="text-center text-muted-foreground text-sm uppercase tracking-widest font-medium">
                    {t.clients.title}
                </h2>
            </div>

            {/* Marquee Container */}
            <div
                className={cn(
                    "relative mx-auto max-w-7xl overflow-hidden px-6 transition-opacity duration-600 delay-200",
                    isInView ? "opacity-100" : "opacity-0"
                )}
            >
                {/* Gradient Edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Marquee Track */}
                <div className="flex animate-marquee">
                    {/* First set of logos */}
                    {clients.map((client) => (
                        <div
                            key={`first-${client.id}`}
                            className="flex-shrink-0 mx-6 group"
                        >
                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl bg-card/80 border border-border/50 flex items-center justify-center transition-all duration-300 grayscale hover:grayscale-0 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm hover:scale-105">
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium text-xs md:text-sm">
                                    {client.name}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {clients.map((client) => (
                        <div
                            key={`second-${client.id}`}
                            className="flex-shrink-0 mx-6 group"
                        >
                            <div className="w-20 h-20 md:w-28 md:h-28 rounded-xl bg-card/80 border border-border/50 flex items-center justify-center transition-all duration-300 grayscale hover:grayscale-0 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm hover:scale-105">
                                <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium text-xs md:text-sm">
                                    {client.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
