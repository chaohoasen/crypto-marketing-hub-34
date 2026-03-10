import { useCallback } from "react";

interface NavRailProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const sections = [
  { id: "intro", label: "//INTRO" },
  { id: "work", label: "//WORK" },
  { id: "projects", label: "//PROJECTS" },
  { id: "contact", label: "//CONTACT" },
];

const NavRail = ({ activeSection, onNavigate }: NavRailProps) => {
  const handleClick = useCallback(
    (id: string) => {
      onNavigate(id);
    },
    [onNavigate]
  );

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-16 md:w-20 z-40 flex flex-col justify-center items-center border-r border-border bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col gap-8">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => handleClick(s.id)}
            className={`font-mono text-[10px] md:text-xs tracking-widest transition-colors duration-200 writing-mode-vertical ${
              activeSection === s.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-1.5 h-1.5 bg-primary rounded-full data-pulse" />
      </div>
    </nav>
  );
};

export default NavRail;
