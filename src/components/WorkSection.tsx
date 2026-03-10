import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "DeFi Protocol Launch",
    role: "Lead Marketing Strategist",
    date: "2025",
    metrics: [
      { label: "TVL Growth", value: "+340%", highlight: true },
      { label: "Community", value: "85K+", highlight: false },
      { label: "Impressions", value: "12M", highlight: false },
    ],
    description:
      "Spearheaded the go-to-market strategy for a next-gen DeFi lending protocol. Built community from zero to 85K across Discord and Twitter through targeted content, KOL partnerships, and a tokenized referral program.",
    tags: ["DeFi", "Community Building", "Token Launch"],
  },
  {
    id: "02",
    title: "NFT Marketplace Rebrand",
    role: "Marketing Lead",
    date: "2024",
    metrics: [
      { label: "User Growth", value: "+520%", highlight: true },
      { label: "Volume", value: "$4.2M", highlight: false },
      { label: "Retention", value: "67%", highlight: false },
    ],
    description:
      "Led a complete brand overhaul and user acquisition campaign for an NFT marketplace transitioning from PFP collections to utility-focused digital assets. Introduced data-driven content loops and cross-chain marketing.",
    tags: ["NFTs", "Brand Strategy", "Growth"],
  },
  {
    id: "03",
    title: "Layer 2 Ecosystem Growth",
    role: "Growth Marketing Manager",
    date: "2024",
    metrics: [
      { label: "DAU Increase", value: "+890%", highlight: true },
      { label: "Developers", value: "1.2K+", highlight: false },
      { label: "Partnerships", value: "45+", highlight: false },
    ],
    description:
      "Designed and executed a developer-focused growth strategy for an L2 scaling solution. Combined hackathons, grant programs, and technical content marketing to build a thriving builder ecosystem.",
    tags: ["Layer 2", "Developer Marketing", "Ecosystem"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="snap-section relative">
      <div className="pl-20 md:pl-28 pr-8 w-full py-16">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-xs text-muted-foreground tracking-[0.3em]">
              {"> CASE_STUDIES.LOG"}
            </span>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-foreground mt-2">
              SELECTED WORK
            </h2>
            <div className="w-16 h-px bg-primary mt-4" />
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border p-6 md:p-8 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:gap-12">
                  {/* Meta column */}
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <span className="font-mono text-4xl font-bold text-muted-foreground/30">
                      {project.id}
                    </span>
                    <div className="mt-3 space-y-1">
                      <p className="font-mono text-xs text-muted-foreground">{project.date}</p>
                      <p className="font-mono text-xs text-primary">{project.role}</p>
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="md:w-3/4">
                    <h3 className="font-mono text-xl md:text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>

                    {/* Metrics */}
                    <div className="flex gap-6 mt-4 mb-4">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="border-l border-border pl-3">
                          <p
                            className={`font-mono text-lg font-bold ${
                              m.highlight ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {m.value}
                          </p>
                          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] tracking-wider border border-border px-2 py-1 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
