import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import Founder from "@/components/Founder";
import SessionsSection from "@/components/SessionsSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingBook from "@/components/FloatingBook";

/**
 * Rendered per request rather than at build time, so <SessionsSection /> reads
 * the live event straight from the API on every refresh. Everything else on the
 * page is static, but the whole route has to be dynamic for that one section.
 */
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <FeatureStrip />
        <SessionsSection />
        <Gallery />
        <Testimonials />
        <Founder />
      </main>
      <Footer />
      <FloatingBook />
    </>
  );
}
