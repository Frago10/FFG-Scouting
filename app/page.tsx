import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import WhoWeAre from "@/components/WhoWeAre";
import Philosophy from "@/components/Philosophy";
import WhoWeServe from "@/components/WhoWeServe";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Staff from "@/components/Staff";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative bg-ink-deep">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Ticker />
      <WhoWeAre />
      <Philosophy />
      <WhoWeServe />
      <Process />
      <Services />
      <Staff />
      <Manifesto />
      <Contact />
      <Footer />
    </main>
  );
}
