import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="snap-section relative">
      <div className="pl-20 md:pl-28 pr-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs text-muted-foreground tracking-[0.3em]">
              {"> INITIATE_CONTACT"}
            </span>
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-foreground mt-2">
              LET'S BUILD
              <br />
              <span className="text-primary">TOGETHER</span>
            </h2>
            <div className="w-16 h-px bg-primary mt-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 font-body text-muted-foreground leading-relaxed max-w-xl"
          >
            I help Web3 projects cut through the noise with sharp positioning,
            data-driven growth strategies, and communities that actually stick.
            Currently open to full-time and advisory roles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="mailto:hello@janedoe.xyz"
              className="inline-flex items-center justify-center px-8 py-4 font-mono text-sm font-bold tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 border border-primary"
            >
              {">"} HIRE ME
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 font-mono text-sm tracking-widest border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-200"
            >
              VIEW RESUME
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex gap-8"
          >
            {["Twitter/X", "LinkedIn", "Telegram"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider"
              >
                {platform}
              </a>
            ))}
          </motion.div>

          <div className="mt-16 border-t border-border pt-4">
            <p className="font-mono text-[10px] text-muted-foreground/50 tracking-widest">
              © 2026 JANE DOE — ALL SYSTEMS OPERATIONAL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
