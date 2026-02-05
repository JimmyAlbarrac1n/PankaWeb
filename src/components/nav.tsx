'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';

export function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();

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
            >
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#"
                            className="text-2xl font-bold text-foreground tracking-tight hover:text-primary transition-colors hover:scale-105"
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
                                    className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 hover:scale-105"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {item.label}
                                </a>
                            ))}

                            {/* ES/EN Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="ml-4 flex items-center gap-1 px-3 py-1.5 rounded-full border border-border/50 text-sm hover:border-primary/50 transition-all hover:scale-105 active:scale-95"
                            >
                                <span className={cn(
                                    "transition-colors",
                                    language === 'es' ? 'text-foreground font-medium' : 'text-muted-foreground'
                                )}>
                                    ES
                                </span>
                                <span className="text-muted-foreground">/</span>
                                <span className={cn(
                                    "transition-colors",
                                    language === 'en' ? 'text-foreground font-medium' : 'text-muted-foreground'
                                )}>
                                    EN
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col items-center justify-center h-full gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Mobile ES/EN Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="mt-4 px-4 py-3 flex items-center gap-3 text-lg border-t border-border/50 pt-6"
                    >
                        <span className={cn(
                            "transition-colors",
                            language === 'es' ? 'text-foreground font-medium' : 'text-muted-foreground'
                        )}>
                            ES
                        </span>
                        <span className="text-muted-foreground">/</span>
                        <span className={cn(
                            "transition-colors",
                            language === 'en' ? 'text-foreground font-medium' : 'text-muted-foreground'
                        )}>
                            EN
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
}
