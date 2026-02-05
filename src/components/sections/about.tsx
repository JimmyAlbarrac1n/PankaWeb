'use client';

import { Leaf } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';

export function About() {
    const { ref, isInView } = useInView({ threshold: 0.2 });
    const { t } = useLanguage();

    return (
        <section
            id="about"
            ref={ref}
            className="py-16 px-6 bg-transparent"
        >
            <div className="container mx-auto max-w-7xl">
                <div
                    className={cn(
                        "grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-700",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {/* Left: Logo Placeholder */}
                    <div
                        className={cn(
                            "flex justify-center md:justify-start transition-all duration-700 delay-100",
                            isInView ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-12"
                        )}
                    >
                        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-3xl bg-card/80 border border-border/50 flex items-center justify-center transition-all duration-500 group backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 hover:scale-105">
                            <Leaf className="w-16 h-16 md:w-24 md:h-24 text-primary group-hover:scale-110 transition-transform duration-500" />

                            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary/20 blur-sm" />
                            <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-primary/10 blur-md" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div
                        className={cn(
                            "space-y-4 transition-all duration-700 delay-200",
                            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                        )}
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                            {t.about.title}
                        </h2>

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {t.about.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {t.about.tags.map((tag, index) => (
                                <span
                                    key={tag}
                                    className={cn(
                                        "px-3 py-1.5 rounded-full bg-accent/80 text-accent-foreground text-sm font-medium border border-border/50 hover:border-primary/50 transition-all backdrop-blur-sm cursor-default hover:scale-105",
                                        isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                                    )}
                                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
