import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { WhoWeServe } from "@/components/site/WhoWeServe";
import { Process } from "@/components/site/Process";
import { Framework } from "@/components/site/Framework";
import { Advisory } from "@/components/site/Advisory";
import { Insights } from "@/components/site/Insights";
import { Register } from "@/components/site/Register";
import { Investor } from "@/components/site/Investor";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div data-testid="micells-home" className="bg-white text-[color:var(--mc-ink)]">
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <WhoWeServe />
        <Process />
        <Framework />
        <Advisory />
        <Insights />
        <Register />
        <Investor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
