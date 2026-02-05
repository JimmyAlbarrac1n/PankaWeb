import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Clients } from "@/components/sections/clients";
import dynamic from "next/dynamic";

// Lazy load below-the-fold sections to reduce initial JavaScript
const FAQ = dynamic(() => import("@/components/sections/faq").then((mod) => ({ default: mod.FAQ })), {
  loading: () => <div className="py-20" />,
});

const Contact = dynamic(() => import("@/components/sections/contact").then((mod) => ({ default: mod.Contact })), {
  loading: () => <div className="py-20" />,
});

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Clients />
      <FAQ />
      <Contact />
    </main>
  );
}
