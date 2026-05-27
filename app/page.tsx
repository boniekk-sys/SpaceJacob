import { About } from "@/components/About";
import { AssistantDashboard } from "@/components/AssistantDashboard";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Contact, Footer } from "@/components/ContactFooter";
import { Categories, Comparison, FleetGallery } from "@/components/FleetSections";
import { Hero } from "@/components/Hero";
import { LoadingGate } from "@/components/LoadingGate";
import { Navbar } from "@/components/Navbar";
import { ShipBuilder } from "@/components/ShipBuilder";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-void text-white">
      <LoadingGate />
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <FleetGallery />
      <ShipBuilder />
      <AssistantDashboard />
      <Comparison />
      <Contact />
      <Footer />
    </main>
  );
}
