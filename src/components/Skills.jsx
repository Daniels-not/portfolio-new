import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaWordpress
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiDotnet, SiFirebase,
  SiFigma, SiGithub, SiMysql, SiNumpy, SiIonic, SiJira, SiDjango, SiMongodb
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />,       name: "HTML",       color: "#E34F26" },
  { icon: <FaCss3Alt />,     name: "CSS",         color: "#1572B6" },
  { icon: <SiJavascript />,  name: "JavaScript",  color: "#F7DF1E" },
  { icon: <SiTypescript />,  name: "TypeScript",  color: "#3178C6" },
  { icon: <FaReact />,       name: "React",       color: "#61DBFB" },
  { icon: <SiTailwindcss />, name: "Tailwind",    color: "#38BDF8" },
  { icon: <FaNodeJs />,      name: "Node.js",     color: "#68A063" },
  { icon: <SiDotnet />,      name: "ASP.NET",     color: "#7B4FD4" },
  { icon: <SiDotnet />,      name: "C#",          color: "#9B70E4" },
  { icon: <SiDjango />,      name: "Django",      color: "#44B78B" },
  { icon: <SiMysql />,       name: "SQL",         color: "#4479A1" },
  { icon: <SiMongodb />,     name: "MongoDB",     color: "#47A248" },
  { icon: <SiFirebase />,    name: "Firebase",    color: "#FFCA28" },
  { icon: <FaGitAlt />,      name: "Git",         color: "#F1502F" },
  { icon: <SiGithub />,      name: "GitHub",      color: "#e0e0e0" },
  { icon: <SiFigma />,       name: "Figma",       color: "#F24E1E" },
  { icon: <FaWordpress />,   name: "WordPress",   color: "#21759B" },
  { icon: <SiNumpy />,       name: "NumPy",       color: "#4D77CF" },
  { icon: <SiIonic />,       name: "Ionic",       color: "#3880FF" },
  { icon: <SiJira />,        name: "Jira",        color: "#2684FF" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ background: "var(--color-bg)" }}
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,240,90,0.05) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
          <span style={{
            color: "var(--color-accent)",
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}>
            02 / Skills
          </span>
          <div className="flex-1 h-px" style={{ background: "var(--color-border)" }} />
        </motion.div>

        {/* Title */}
        <motion.h2
          {...fadeUp(0.08)}
          className="mb-20"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Tools I build<br />
          <em style={{ color: "var(--color-accent)", fontStyle: "italic", fontWeight: 300 }}>
            with.
          </em>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.04 * i,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover="hover"
              className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl cursor-default overflow-hidden"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                aspectRatio: "1 / 1",
              }}
            >
              {/* Animated color flood from bottom on hover */}
              <motion.div
                variants={{
                  hover: { height: "100%", opacity: 1 },
                }}
                initial={{ height: "0%", opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  background: `linear-gradient(to top, ${skill.color}28, transparent)`,
                }}
              />

              {/* Glow dot behind icon */}
              <motion.div
                variants={{ hover: { opacity: 1, scale: 1.4 } }}
                initial={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute w-10 h-10 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${skill.color}55, transparent 70%)`,
                  filter: "blur(8px)",
                }}
              />

              {/* Icon */}
              <motion.span
                variants={{ hover: { scale: 1.18, y: -2 } }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10"
                style={{
                  fontSize: "2.4rem",
                  color: skill.color,
                  filter: `drop-shadow(0 0 0px ${skill.color})`,
                  display: "flex",
                }}
              >
                <motion.span
                  variants={{
                    hover: { filter: `drop-shadow(0 0 8px ${skill.color}cc)` },
                  }}
                  style={{ display: "flex" }}
                >
                  {skill.icon}
                </motion.span>
              </motion.span>

              {/* Name */}
              <motion.span
                variants={{ hover: { color: "#f0ece4", y: -1 } }}
                transition={{ duration: 0.25 }}
                className="relative z-10 text-center"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.65rem",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                }}
              >
                {skill.name}
              </motion.span>

              {/* Bottom accent line */}
              <motion.div
                variants={{ hover: { scaleX: 1, opacity: 1 } }}
                initial={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                style={{
                  background: skill.color,
                  transformOrigin: "left",
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}