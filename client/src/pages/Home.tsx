import Hero from "@/components/Hero";
import About from "@/components/About";
import GaliniaShowcase from "@/components/GaliniaShowcase";
import Technology from "@/components/Technology";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <GaliniaShowcase />
      <Technology />
      <Newsletter />
      <Footer />
    </div>
  );
}
