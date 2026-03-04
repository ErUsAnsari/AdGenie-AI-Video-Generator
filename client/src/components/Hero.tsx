import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from "lucide-react";
import { PrimaryButton, GhostButton } from "./Buttons";
import { motion } from "framer-motion";

export default function Hero() {
  const trustedUserImages = [
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop",
  ];

  const mainImageUrl =
    "https://plus.unsplash.com/premium_photo-1663013409007-c3d30371d269?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const galleryStripImages = [
    "https://images.unsplash.com/photo-1642310290551-091541073559?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1634942536790-dad8f3c0d71b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1642726197634-2a21f764220a?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const trustedLogosText = [
    "TikTok",
    "Instagram",
    "Gemini AI",
    "YouTube",
    "Snapchat",
    "Meta",
    "Google Cloud",
    "PostgreSQL",
  ];

  return (
    <>
      <section id="home" className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 min-h-screen max-md:w-screen max-md:overflow-hidden pt-32 md:pt-26 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <motion.a
                href="https://prebuiltui.com/tailwind-templates?ref=pixel-forge"
                className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-white/10 mb-6 justify-start"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                }}
              >
                <div className="flex -space-x-2">
                  {trustedUserImages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Client ${index + 1}`}
                      className="size-6 rounded-full border border-black/50"
                      width={40}
                      height={40}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-200/90">
                  Generated 50k+ Viral Ads
                </span>
              </motion.a>

              <motion.h1
                className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
              >
                We generate & automate <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 to-purple-500">
                  high-impact video ads
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-300 max-w-lg mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.2,
                }}
              >
                An AI-powered creative engine helping brands and agencies scale
                through intelligent scripting, automated editing, and
                performance-driven video generation.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.3,
                }}
              >
                <a href="/" className="w-full sm:w-auto">
                  <PrimaryButton className="max-sm:w-full py-3 px-7 bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                    Generate your first ad
                    <ArrowRightIcon className="size-4" />
                  </PrimaryButton>
                </a>

                <GhostButton className="max-sm:w-full max-sm:justify-center py-3 px-5 bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95">
                  <PlayIcon className="size-4" />
                  View sample reels
                </GhostButton>
              </motion.div>

              <motion.div
                className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-200 bg-white/10 rounded"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 70,
                  mass: 1,
                  delay: 0.1,
                }}
              >
                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                  <ZapIcon className="size-4 text-sky-500" />
                  <div>
                    <div>AI-Driven Creativity</div>
                    <div className="text-xs text-gray-400">
                      AI scripts built for conversion.
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block h-6 w-px bg-white/6" />

                <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-white/3 transition-colors">
                  <CheckIcon className="size-4 text-cyan-500" />
                  <div>
                    <div>End-to-End Automation</div>
                    <div className="text-xs text-gray-400">
                      Instant scripts to final render.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: modern mockup card */}
            <motion.div
              className="mx-auto w-full max-w-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 70,
                mass: 1,
                delay: 0.5,
              }}
            >
              <motion.div className="rounded-3xl overflow-hidden border border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent">
                <div className="relative aspect-16/10 bg-gray-900">
                  <img
                    src={mainImageUrl}
                    alt="agency-work-preview"
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-black/15 backdrop-blur-sm text-xs">
                    Prompt • Script • Render
                  </div>

                  <div className="absolute right-4 bottom-4">
                    <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/6 backdrop-blur-sm hover:bg-white/10 transition focus:outline-none">
                      <PlayIcon className="size-4" />
                      <span className="text-xs">Preview</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              <div className="mt-4 flex gap-3 items-center justify-start">
                {galleryStripImages.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 70,
                      mass: 1,
                      delay: 0.1 + index * 0.1,
                    }}
                    className="w-14 h-10 rounded-lg overflow-hidden border border-white/6"
                  >
                    <img
                      src={src}
                      alt="project-thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                <motion.div
                  className="text-sm text-gray-400 ml-2 flex items-center gap-2"
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 70,
                    mass: 1,
                    delay: 0.2,
                  }}
                >
                  <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300" />

                    <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                  </div>
                  5-second average render time
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGO MARQUEE */}
      <motion.section
        className="border-y border-white/5 bg-slate-950/50 max-md:mt-10 backdrop-blur-sm"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full overflow-x-hidden py-6">
            <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
              {trustedLogosText.concat(trustedLogosText).map((logo, index) => (
                <span
                  key={index}
                  className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-indigo-300 tracking-wide transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
