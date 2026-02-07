'use client';

import { useRef, useState, useEffect } from 'react';
import { t } from '@/lib/translations';
import { cn } from '@/lib/utils';

export function Hero() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

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

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const handleScroll = () => {
            const items = carousel.querySelectorAll('[data-carousel-item]');
            if (items.length === 0) return;

            const firstItem = items[0] as HTMLElement;
            const itemWidth = firstItem.offsetWidth + 16;
            const scrollLeft = carousel.scrollLeft;
            const index = Math.round(scrollLeft / itemWidth);
            setSelectedIndex(Math.min(Math.max(0, index), projects.length - 1));
        };

        carousel.addEventListener('scroll', handleScroll, { passive: true });
        return () => carousel.removeEventListener('scroll', handleScroll);
    }, [projects.length]);

    const scrollTo = (index: number) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const items = carousel.querySelectorAll('[data-carousel-item]');
        if (items[index]) {
            items[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        }
    };

    const scrollPrev = () => scrollTo(Math.max(0, selectedIndex - 1));
    const scrollNext = () => scrollTo(Math.min(projects.length - 1, selectedIndex + 1));

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

                {/* CSS Scroll-Snap Carousel */}
                <div className="relative">
                    {/* Left Arrow - Desktop */}
                    <button
                        onClick={scrollPrev}
                        aria-label="Proyecto anterior"
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 items-center justify-center rounded-full border border-border/50 hover:bg-accent hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide pb-2"
                        role="region"
                        aria-label="Carrusel de proyectos"
                    >
                        {projects.map((project) => (
                            <a
                                key={project.id}
                                href={project.href}
                                data-carousel-item
                                aria-label={`Ver proyecto: ${project.title}`}
                                className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] snap-start group"
                            >
                                <div className="relative aspect-[4/3.5] rounded-2xl overflow-hidden bg-card/80 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02]">
                                    {/* Abstract gradient background */}
                                    <div
                                        className={cn(
                                            'absolute inset-0 bg-gradient-to-br transition-transform duration-500',
                                            project.gradient,
                                            'group-hover:scale-105'
                                        )}
                                    />

                                    {/* Decorative shapes */}
                                    <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
                                        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-foreground/10 blur-2xl" />
                                        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-primary/20 blur-xl" />
                                    </div>

                                    {/* Project info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
                                        <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Right Arrow - Desktop */}
                    <button
                        onClick={scrollNext}
                        aria-label="Proyecto siguiente"
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 items-center justify-center rounded-full border border-border/50 hover:bg-accent hover:border-primary/50 bg-background/80 backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Arrows + Dots */}
                <div className="flex items-center justify-between mt-6">
                    <div className="flex gap-3 md:hidden">
                        <button
                            onClick={scrollPrev}
                            aria-label="Proyecto anterior"
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-border/50 hover:bg-accent hover:border-primary/50 transition-transform hover:scale-110 active:scale-95"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={scrollNext}
                            aria-label="Proyecto siguiente"
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-border/50 hover:bg-accent hover:border-primary/50 transition-transform hover:scale-110 active:scale-95"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex gap-2 ml-auto" role="tablist" aria-label="Indicadores del carrusel">
                        {projects.map((project, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                role="tab"
                                aria-selected={selectedIndex === index}
                                aria-label={`Ir al proyecto ${project.title}`}
                                className={cn(
                                    'h-3 rounded-full transition-all duration-300 hover:scale-125',
                                    selectedIndex === index
                                        ? 'bg-primary w-8'
                                        : 'bg-muted-foreground/40 hover:bg-muted-foreground/60 w-3'
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
