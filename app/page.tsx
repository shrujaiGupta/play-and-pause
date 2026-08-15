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
