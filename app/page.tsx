import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import Founder from "@/components/Founder";
import UpcomingSessions from "@/components/UpcomingSessions";
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
        <UpcomingSessions />
        <Gallery />
        <Testimonials />
        <Founder />
      </main>
      <Footer />
      <FloatingBook />
    </>
  );
}
