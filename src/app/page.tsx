import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import CropHub from "@/components/sections/CropHub";
import Innovation from "@/components/sections/Innovation";
import Farmcation from "@/components/sections/Farmcation";
import Roadmap from "@/components/sections/Roadmap";
import Updates from "@/components/sections/Updates";
import Gallery from "@/components/sections/Gallery";
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
        <Farmcation />
        <Roadmap />
        <Updates />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
