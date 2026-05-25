import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import CropHub from "@/components/sections/CropHub";
import Innovation from "@/components/sections/Innovation";
import Roadmap from "@/components/sections/Roadmap";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <CropHub />
        <Innovation />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
