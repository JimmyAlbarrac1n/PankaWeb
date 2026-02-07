import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { t } from '@/lib/translations';

export function FAQ() {
    return (
        <section
            id="faq"
            className="py-14 md:py-20 px-6 bg-transparent"
        >
            <div className="container mx-auto max-w-3xl">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-10 animate-fade-in-up">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                        {t.faq.title}
                    </h2>
                    <p className="mt-3 text-base text-muted-foreground">
                        {t.faq.subtitle}
                    </p>
                </div>

                {/* Accordion */}
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <Accordion type="single" collapsible className="space-y-3">
                        {t.faq.questions.map((faq, index) => (
                            <div
                                key={index}
                                className="animate-fade-in"
                                style={{ animationDelay: `${150 + index * 75}ms` }}
                            >
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="bg-card/80 border border-border/50 rounded-xl px-5 hover:border-primary/30 transition-colors data-[state=open]:border-primary/50 backdrop-blur-sm"
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
