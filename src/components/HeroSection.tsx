import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

const useDecryptText = (text: string, delay: number = 0) => {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        iteration += 1 / 2;
        if (iteration >= text.length) {
          setDisplay(text);
          setDone(true);
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return { display, done };
};

const HeroSection = () => {
  const name = useDecryptText("JANE DOE", 300);
  const title = useDecryptText("MARKETING SPECIALIST", 800);
  const sub = useDecryptText("Web3 · Growth · Strategy", 1400);

  return (
    <section id="intro" className="snap-section relative">
      <div className="pl-20 md:pl-28 pr-8 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-2 font-mono text-xs text-muted-foreground tracking-[0.3em]"
          >
            {"> IDENTITY_VERIFIED"}
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold text-foreground leading-none tracking-tight">
            {name.display}
            {!name.done && <span className="cursor-blink text-primary">_</span>}
          </h1>

          <div className="mt-4 border-t border-border pt-4">
            <p className="font-mono text-lg md:text-2xl text-primary tracking-wider">
              {title.display}
              {!title.done && name.done && <span className="cursor-blink">_</span>}
            </p>
          </div>

          <div className="mt-6">
            <p className="font-mono text-sm text-muted-foreground tracking-widest">
              {sub.display}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="mt-12 flex items-center gap-4"
          >
            <div className="w-12 h-px bg-secondary" />
            <span className="font-mono text-xs text-muted-foreground tracking-widest">
              SCROLL TO EXPLORE
            </span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-primary font-mono"
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
