import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Clients } from "@/components/sections/clients";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

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
