// src/components/Hero.jsx
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CodeRain from "./CodeRain";
import FloatingTech from "./FloatingTech";
import GridBackground from "./GridBackground";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <GridBackground />
      <CodeRain />
      <FloatingTech />

      <div className="relative z-10 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Hi, I'm Daniels
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 font-mono"
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Frontend Engineer",
                "Backend Developer",
                "AI Application Builder",
                "React & Node.js Developer",
                "Problem Solver Through Code",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex justify-center gap-6"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="cursor-pointer px-6 py-3 bg-white text-black hover:bg-gray-300 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="cursor-pointer px-6 py-3 border bg-white border-white hover:bg-gray-300 transition"
          >
            Contact Me
          </button>
        </motion.div>

      </div>
    </section>
  );
}