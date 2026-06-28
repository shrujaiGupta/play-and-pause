import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSession from "@/components/FeaturedSession";
import WhyParents from "@/components/WhyParents";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import DayTimeline from "@/components/DayTimeline";
import Founder from "@/components/Founder";
import InstagramFeed from "@/components/InstagramFeed";
import BookingCTA from "@/components/BookingCTA";
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
        <FeaturedSession />
        <WhyParents />
        <Gallery />
        <Testimonials />
        <DayTimeline />
        <Founder />
        <InstagramFeed />
        <BookingCTA />
      </main>
      <Footer />
      <FloatingBook />
    </>
  );
}
