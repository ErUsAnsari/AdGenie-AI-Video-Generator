import { useRef } from "react";
import { featuresData } from "../assets/dummy-data";
import Title from "./Title";
import { motion } from "framer-motion";

export default function Features() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <section id="features" className="py-20 2xl:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Features"
          heading={
            <>
              Everything you need to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                scale viral
              </span>
            </>
          }
          description="Transform your ideas into high-impact video ads. Our AI-driven workflow handles the scripting, editing, and optimization so you can focus on scaling your brand across TikTok, Reels, and Shorts."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <motion.div
              ref={(el) => {
                refs.current[index] = el;
              }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.1 + index * 0.1,
              }}
              key={index}
              onAnimationComplete={() => {
                const card = refs.current[index];
                if (card) {
                  card.classList.add(
                    "transition",
                    "duration-300",
                    "hover:border-white/15",
                    "hover:-translate-y-1",
                  );
                }
              }}
              className="rounded-2xl p-6 bg-white/3 border border-white/6 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-lg bg-violet-900/20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
