'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { t } from '@/lib/translations';

// Inline SVG icons
function MenuIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function XIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

export function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: t.nav.work, href: '#work' },
        { label: t.nav.about, href: '#about' },
        { label: t.nav.contact, href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <>
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in',
                    isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
                )}
                aria-label="Navegación principal"
            >
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#"
                            className="text-2xl font-bold text-foreground tracking-tight hover:text-primary transition-colors hover:scale-105"
                            aria-label="Panka - Ir al inicio"
                        >
                            Panka
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="px-4 py-3 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 hover:scale-105"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden w-12 h-12"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        >
                            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu"
                className={cn(
                    "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                aria-hidden={!isOpen}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-6" aria-label="Menú móvil">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-2xl font-medium text-foreground hover:text-primary transition-colors py-3 px-6"
                            tabIndex={isOpen ? 0 : -1}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
}
