import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiReact, SiTypescript, SiDotnet, SiMysql, SiFirebase } from "react-icons/si";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "https://docs.google.com/document/d/1bfoBKdbFeE0Us4ut3QFpR04PY1ugwSuEsv9ELoFOR7I/edit?usp=sharing";
  link.download = "https://docs.google.com/document/d/1bfoBKdbFeE0Us4ut3QFpR04PY1ugwSuEsv9ELoFOR7I/edit?usp=sharing";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const GITHUB_USER = "Daniels-not";

const skills = [
  { name: "React",      icon: SiReact,      color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Node.js",    icon: FaNodeJs,     color: "#6cc24a" },
  { name: "ASP.NET",    icon: SiDotnet,     color: "#a855f7" },
  { name: "SQL",        icon: SiMysql,      color: "#f29111" },
  { name: "Firebase",   icon: SiFirebase,   color: "#ffca28" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "var(--color-bg)" }}
      className="min-h-screen flex items-center py-24 px-6 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,240,90,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* ── Section Label ── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
          <span
            className="text-xs tracking-[0.22em] uppercase"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-body)" }}
          >
            01 / About
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
        </motion.div>

        {/* ── Title ── */}
        <motion.h2
          {...fadeUp(0.08)}
          className="mb-16"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Crafting digital<br />
          <em style={{ color: "var(--color-accent)", fontStyle: "italic", fontWeight: 300 }}>
            experiences
          </em>{" "}
          that matter.
        </motion.h2>

        {/* ── Main Grid ── */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — Image + Skills */}
          <motion.div {...fadeUp(0.15)} className="flex flex-col gap-8">

            {/* Photo */}
            <div className="relative w-fit">
              <div
                className="absolute -bottom-3 -right-3 w-full h-full"
                style={{
                  border: "1.5px solid var(--color-accent)",
                  borderRadius: "16px",
                  opacity: 0.5,
                }}
              />
              <div
                className="w-72 h-[380px] overflow-hidden relative"
                style={{
                  borderRadius: "16px",
                  border: "1px solid var(--color-border)",
                }}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/68081630?v=4"
                  alt="Ramy Campusano"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(15%)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(12,12,12,0.35) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>

            {/* Skill Icons Grid */}
            <div className="grid grid-cols-3 gap-3">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.45 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl cursor-default"
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <Icon style={{ fontSize: "1.6rem", color: skill.color }} />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        color: "var(--color-text-muted)",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Bio + GitHub + Button */}
          <motion.div {...fadeUp(0.22)} className="flex flex-col gap-10">

            {/* Bio */}
            <div className="flex flex-col gap-5">
              <p style={{ fontFamily: "var(--font-body)", color: "var(--color-text)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                I'm{" "}
                <span style={{ fontFamily: "var(--font-display)", color: "var(--color-accent)", fontWeight: 600 }}>
                  Ramy Campusano
                </span>
                , a Computer Science student and Full Stack Developer passionate about building
                modern web applications and scalable systems.
              </p>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--color-text-muted)", fontSize: "0.97rem", lineHeight: 1.8 }}>
                I specialize in React, TypeScript, Node.js, ASP.NET, and SQL — developing
                solutions that solve real-world problems. My experience spans both software
                development and technical support, giving me sharp analytical and
                problem-solving instincts.
              </p>
            </div>

            {/* GitHub Streak Stats */}
            <div
              className="rounded-2xl overflow-hidden p-5 flex flex-col gap-4"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <FaGithub style={{ color: "#ffffff", fontSize: "0.95rem" }} />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    color: "#ffffff",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  GitHub Stats
                </span>
              </div>
              <img
                src={`https://streak-stats.demolab.com?user=${GITHUB_USER}&theme=transparent&hide_border=true&ring=c8f05a&fire=c8f05a&currStreakLabel=c8f05a&sideLabels=f0ece4&dates=7a7570&currStreakNum=f0ece4&sideNums=f0ece4`}
                alt="GitHub Streak Stats"
                className="w-full"
              />
            </div>

            {/* ── Resume Download Button ── */}
            <motion.button
              onClick={handleDownload}
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              initial="rest"
              className="relative w-full overflow-hidden rounded-2xl"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "var(--color-accent)" }}
              />
              <motion.div
                variants={{
                  rest: { x: "-110%", skewX: "-15deg" },
                  hover: { x: "110%", skewX: "-15deg", transition: { duration: 0.55, ease: "easeInOut" } },
                }}
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                  width: "60%",
                  top: 0,
                  bottom: 0,
                }}
              />
              <div
                className="relative flex items-center justify-between px-6 py-4"
                style={{ color: "var(--color-bg)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(12,12,12,0.15)" }}
                  >
                    <FaDownload style={{ fontSize: "0.8rem" }} />
                  </div>
                  <div className="flex flex-col items-start">
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                      }}
                    >
                      Download Resume
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.65rem",
                        opacity: 0.65,
                        letterSpacing: "0.04em",
                      }}
                    >
                      PDF · Updated 2025
                    </span>
                  </div>
                </div>
                <motion.div
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 4, transition: { duration: 0.25 } },
                  }}
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(12,12,12,0.15)", fontSize: "1rem", fontWeight: 700 }}
                >
                  ↓
                </motion.div>
              </div>
            </motion.button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}