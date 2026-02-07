'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { t } from '@/lib/translations';

// Inline SVG icons
function MessageCircleIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    );
}

function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function SendIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    );
}

// NUMERO DE WHATSAPP - Cambia este valor por tu número
const phoneNumber = "123456789";

export function Contact() {
    const [message, setMessage] = useState('');

    const handleWhatsAppClick = () => {
        const textToSend = message.trim() || t.contact.defaultMessage;
        const encodedMessage = encodeURIComponent(textToSend);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <section
            id="contact"
            className="py-16 md:py-20 px-6 bg-transparent"
        >
            <div className="container mx-auto max-w-2xl">
                {/* Section Header */}
                <div className="text-center mb-8 animate-fade-in-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                        {t.contact.title}
                    </h2>
                    <p className="mt-3 text-base text-muted-foreground">
                        {t.contact.subtitle}
                    </p>
                </div>

                {/* Message Input */}
                <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div>
                        <label htmlFor="contact-message" className="sr-only">Tu mensaje</label>
                        <Textarea
                            id="contact-message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={t.contact.placeholder}
                            className="min-h-[120px] bg-card/80 border-border/50 text-foreground placeholder:text-muted-foreground resize-none rounded-xl p-4 text-base focus:border-primary/50 focus:ring-primary/20 backdrop-blur-sm"
                        />
                    </div>

                    {/* WhatsApp Button */}
                    <div>
                        <Button
                            onClick={handleWhatsAppClick}
                            className="w-full py-6 text-base font-semibold rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <MessageCircleIcon className="mr-2 h-5 w-5" />
                            {t.contact.button}
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 pt-2">
                        <span className="text-muted-foreground text-sm">{t.contact.social}</span>

                        <a
                            href="https://instagram.com/panka"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Síguenos en Instagram"
                            className="p-3 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-accent transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
                        >
                            <InstagramIcon className="h-5 w-5" />
                        </a>

                        <a
                            href="https://t.me/panka"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contáctanos por Telegram"
                            className="p-3 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-accent transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
                        >
                            <SendIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-14 pt-8 border-t border-border/50 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <p className="text-muted-foreground text-sm">
                        {t.footer.copyright}
                    </p>
                </footer>
            </div>
        </section>
    );
}
