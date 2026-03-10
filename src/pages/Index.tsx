import { useState, useCallback, useRef } from "react";
import NavRail from "@/components/NavRail";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import GridOverlay from "@/components/GridOverlay";

const Index = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNavigate = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const sections = ["intro", "work", "contact"];
    const container = containerRef.current;
    if (!container) return;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top >= -100 && rect.top < window.innerHeight / 2) {
          setActiveSection(id);
          break;
        }
      }
    }
  }, []);

  return (
    <div className="relative bg-background min-h-screen">
      <GridOverlay />
      <div className="scanline" />
      <NavRail activeSection={activeSection} onNavigate={handleNavigate} />
      <div
        ref={containerRef}
        className="snap-container"
        onScroll={handleScroll}
      >
        <HeroSection />
        <WorkSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
