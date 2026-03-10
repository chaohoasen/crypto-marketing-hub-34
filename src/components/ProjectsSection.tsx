import { motion } from "framer-motion";

const archive = [
  {
    id: "P-001",
    name: "TokenVault",
    category: "DeFi",
    year: "2025",
    status: "LIVE",
    description: "Multi-chain yield aggregator marketing & launch strategy.",
  },
  {
    id: "P-002",
    name: "MetaCanvas",
    category: "NFT",
    year: "2025",
    status: "LIVE",
    description: "Generative art marketplace brand identity and growth campaign.",
  },
  {
    id: "P-003",
    name: "ChainPulse",
    category: "Analytics",
    year: "2024",
    status: "LIVE",
    description: "On-chain analytics dashboard go-to-market and content strategy.",
  },
  {
    id: "P-004",
    name: "ZKBridge",
    category: "Infrastructure",
    year: "2024",
    status: "LIVE",
    description: "Zero-knowledge bridge protocol developer relations and outreach.",
  },
  {
    id: "P-005",
    name: "SocialFi Hub",
    category: "SocialFi",
    year: "2024",
    status: "ARCHIVED",
    description: "Decentralized social platform community building and influencer campaigns.",
  },
  {
    id: "P-006",
    name: "StakeFlow",
    category: "DeFi",
    year: "2023",
    status: "ARCHIVED",
    description: "Liquid staking protocol launch across 3 EVM chains.",
  },
  {
    id: "P-007",
    name: "PixelDAO",
    category: "DAO",
    year: "2023",
    status: "ARCHIVED",
    description: "DAO governance tooling brand strategy and community onboarding.",
  },
  {
    id: "P-008",
    name: "CryptoEd",
    category: "Education",
    year: "2023",
    status: "ARCHIVED",
    description: "Web3 education platform content marketing and SEO growth.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="snap-section relative">
      <div className="pl-20 md:pl-28 pr-8 w-full py-16">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="font-mono text-xs text-muted-foreground tracking-[0.3em]">
              {"> PROJECT_ARCHIVE.DB"}
            </span>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mt-2">
              ALL PROJECTS
            </h2>
            <div className="w-16 h-px bg-primary mt-4" />
            <p className="font-body text-sm text-muted-foreground mt-3">
              Complete index of executed campaigns and strategic engagements.
            </p>
          </motion.div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-4 border-b border-border pb-2 mb-2 font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
            <span className="col-span-1">ID</span>
            <span className="col-span-3">Project</span>
            <span className="col-span-2">Category</span>
            <span className="col-span-1">Year</span>
            <span className="col-span-1">Status</span>
            <span className="col-span-4">Description</span>
          </div>

          {/* Rows */}
          <div className="space-y-0">
            {archive.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-4 border-b border-border hover:border-primary/30 hover:bg-muted/30 transition-all duration-200 px-1"
              >
                <span className="md:col-span-1 font-mono text-xs text-muted-foreground/40">
                  {project.id}
                </span>
                <span className="md:col-span-3 font-mono text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </span>
                <span className="md:col-span-2 font-mono text-xs text-muted-foreground">
                  {project.category}
                </span>
                <span className="md:col-span-1 font-mono text-xs text-muted-foreground">
                  {project.year}
                </span>
                <span className="md:col-span-1">
                  <span
                    className={`font-mono text-[10px] tracking-wider px-2 py-0.5 border ${
                      project.status === "LIVE"
                        ? "border-primary/40 text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {project.status}
                  </span>
                </span>
                <span className="md:col-span-4 font-body text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 font-mono text-[10px] text-muted-foreground/40 tracking-widest"
          >
            {`> ${archive.length} RECORDS FOUND — END OF LOG`}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
