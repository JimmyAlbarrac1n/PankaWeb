'use client';

import { useState } from 'react';
import { MessageCircle, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useInView } from '@/hooks/use-in-view';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';

// NUMERO DE WHATSAPP - Cambia este valor por tu número
const phoneNumber = "123456789";

export function Contact() {
    const [message, setMessage] = useState('');
    const { ref, isInView } = useInView({ threshold: 0.2 });
    const { t } = useLanguage();

    const handleWhatsAppClick = () => {
        const textToSend = message.trim() || t.contact.defaultMessage;
        const encodedMessage = encodeURIComponent(textToSend);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="py-16 md:py-20 px-6 bg-transparent"
        >
            <div className="container mx-auto max-w-2xl">
                {/* Section Header */}
                <div
                    className={cn(
                        "text-center mb-8 transition-all duration-600",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                        {t.contact.title}
                    </h2>
                    <p className="mt-3 text-base text-muted-foreground">
                        {t.contact.subtitle}
                    </p>
                </div>

                {/* Message Input */}
                <div
                    className={cn(
                        "space-y-4 transition-all duration-600 delay-150",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <div>
                        <Textarea
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
                            className="w-full py-5 text-base font-semibold rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <MessageCircle className="mr-2 h-5 w-5" />
                            {t.contact.button}
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div
                        className={cn(
                            "flex items-center justify-center gap-4 pt-2 transition-all duration-600 delay-300",
                            isInView ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <span className="text-muted-foreground text-sm">{t.contact.social}</span>

                        <a
                            href="https://instagram.com/panka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-accent transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
                        >
                            <Instagram className="h-4 w-4" />
                        </a>

                        <a
                            href="https://t.me/panka"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-accent transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95"
                        >
                            <Send className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <div
                    className={cn(
                        "mt-14 pt-8 border-t border-border/50 text-center transition-opacity duration-500 delay-500",
                        isInView ? "opacity-100" : "opacity-0"
                    )}
                >
                    <p className="text-muted-foreground text-sm">
                        {t.footer.copyright}
                    </p>
                </div>
            </div>
        </section>
    );
}
