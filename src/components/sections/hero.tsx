'use client';

import { useEffect, useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';

export function Hero() {
    const { t } = useLanguage();

    const projects = [
        {
            id: 1,
            title: t.projects.bloomStudio.title,
            description: t.projects.bloomStudio.description,
            gradient: 'from-teal-900/50 via-emerald-800/40 to-green-900/50',
            href: '#',
        },
        {
            id: 2,
            title: t.projects.terraFoods.title,
            description: t.projects.terraFoods.description,
            gradient: 'from-green-900/50 via-teal-800/40 to-emerald-900/50',
            href: '#',
        },
        {
            id: 3,
            title: t.projects.verdantLabs.title,
            description: t.projects.verdantLabs.description,
            gradient: 'from-emerald-900/50 via-cyan-800/40 to-teal-900/50',
            href: '#',
        },
        {
            id: 4,
            title: t.projects.oasisTravel.title,
            description: t.projects.oasisTravel.description,
            gradient: 'from-cyan-900/50 via-emerald-800/40 to-green-900/50',
            href: '#',
        },
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        skipSnaps: false,
        dragFree: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section id="work" className="min-h-[70vh] pt-24 pb-8 px-6 bg-transparent">
            <div className="container mx-auto max-w-7xl">
                {/* Hero Title */}
                <div className="mb-10 animate-fade-in-up">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight max-w-4xl">
                        {t.hero.title}{' '}
                        <span className="text-primary">{t.hero.titleHighlight}</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {t.hero.subtitle}
                    </p>
                </div>

                {/* Carousel with Side Arrows */}
                <div className="relative flex items-center gap-4">
                    {/* Left Arrow */}
                    <div className="hidden md:flex absolute -left-4 lg:-left-12 z-10">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollPrev}
                            className="rounded-full border-border/50 hover:bg-accent hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Embla Carousel */}
                    <div className="overflow-hidden flex-1" ref={emblaRef}>
                        <div className="flex" style={{ marginLeft: '-1rem' }}>
                            {projects.map((project) => (
                                <a
                                    key={project.id}
                                    href={project.href}
                                    className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] pl-4 group"
                                >
                                    <div className="relative aspect-[4/3.5] max-h-[400px] rounded-2xl overflow-hidden bg-card/80 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02]">
                                        {/* Abstract gradient background */}
                                        <div
                                            className={cn(
                                                'absolute inset-0 bg-gradient-to-br transition-transform duration-500',
                                                project.gradient,
                                                'group-hover:scale-105'
                                            )}
                                        />

                                        {/* Decorative shapes */}
                                        <div className="absolute inset-0 opacity-30 pointer-events-none">
                                            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-foreground/10 blur-2xl" />
                                            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-primary/20 blur-xl" />
                                        </div>

                                        {/* Project info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
                                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <div className="hidden md:flex absolute -right-4 lg:-right-12 z-10">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollNext}
                            className="rounded-full border-border/50 hover:bg-accent hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                        >
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Arrows + Dots */}
                <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-2 md:hidden">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollPrev}
                            className="rounded-full border-border/50 hover:bg-accent hover:border-primary/50 transition-transform hover:scale-110 active:scale-95"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollNext}
                            className="rounded-full border-border/50 hover:bg-accent hover:border-primary/50 transition-transform hover:scale-110 active:scale-95"
                        >
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-2 ml-auto">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={cn(
                                    'h-2 rounded-full transition-all duration-300 hover:scale-125',
                                    selectedIndex === index
                                        ? 'bg-primary w-6'
                                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
