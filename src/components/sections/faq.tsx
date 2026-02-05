'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { useInView } from '@/hooks/use-in-view';
import { useLanguage } from '@/contexts/language-context';
import { cn } from '@/lib/utils';

export function FAQ() {
    const { ref, isInView } = useInView({ threshold: 0.2 });
    const { t } = useLanguage();

    return (
        <section
            id="faq"
            ref={ref}
            className="py-14 md:py-20 px-6 bg-transparent"
        >
            <div className="container mx-auto max-w-3xl">
                {/* Section Header */}
                <div
                    className={cn(
                        "text-center mb-8 md:mb-10 transition-all duration-600",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                        {t.faq.title}
                    </h2>
                    <p className="mt-3 text-base text-muted-foreground">
                        {t.faq.subtitle}
                    </p>
                </div>

                {/* Accordion */}
                <div
                    className={cn(
                        "transition-all duration-600 delay-100",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    <Accordion type="single" collapsible className="space-y-3">
                        {t.faq.questions.map((faq, index) => (
                            <div
                                key={index}
                                className="transition-all duration-500"
                                style={{ transitionDelay: `${150 + index * 75}ms` }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className={cn(
                                        "bg-card/80 border border-border/50 rounded-xl px-5 hover:border-primary/30 transition-colors data-[state=open]:border-primary/50 backdrop-blur-sm",
                                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                    )}
                                >
                                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4 text-sm md:text-base font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
