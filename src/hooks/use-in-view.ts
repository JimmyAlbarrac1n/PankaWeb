'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseInViewOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useInView({
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
}: UseInViewOptions = {}) {
    const elementRef = useRef<HTMLElement | null>(null);
    const [isInView, setIsInView] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const setRef = useCallback((node: HTMLElement | null) => {
        // Cleanup previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        if (node) {
            elementRef.current = node;

            observerRef.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        if (triggerOnce && observerRef.current) {
                            observerRef.current.unobserve(node);
                        }
                    } else if (!triggerOnce) {
                        setIsInView(false);
                    }
                },
                { threshold, rootMargin }
            );

            observerRef.current.observe(node);
        }
    }, [threshold, rootMargin, triggerOnce]);

    useEffect(() => {
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return { ref: setRef, isInView };
}
