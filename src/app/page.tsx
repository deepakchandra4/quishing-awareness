import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScanSection from "@/components/ScanSection";
import SimulationSection from "@/components/SimulationSection";
import RiskSection from "@/components/RiskSection";
import ChecklistSection from "@/components/ChecklistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-white text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <ScanSection />
        <SimulationSection />
        <RiskSection />
        <ChecklistSection />
      </main>
      <Footer />
    </div>
  );
}
