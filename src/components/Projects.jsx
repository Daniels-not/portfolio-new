import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


// NOTE on placeholders:
// OakEats, usemoor, and Untangle use placehold.co placeholder images
// (styled to match the dark/lime brand) since real screenshots weren't
// available yet — swap `image` for actual screenshots when you have them.
// Their `github`/`live` links are set to "#" as placeholders too — fill
// in the real repo/deploy URLs.
const projects = [
  {
    title: "Oakwood Campus Map",
    description: "Mobile-first campus platform for Oakwood University with an interactive map, faculty info, and real-time updates, built for the CS Club.",
    image: "https://i.ibb.co/5x9JCq8j/oakwood-campus-map.png",
    tech: ["React", "Ionic", "Node.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/oucomputerscienceclub-dot/OU-CampusConnect/tree/dev",
    live: "#",
    number: "01",
  },
  {
    title: "OakEats",
    description: "Smart cafeteria PWA built for a university leadership demo — live crowd voting, calorie tracking with exportable charts, allergen detection, and a role-based staff portal.",
    image: "https://placehold.co/800x500/141414/c8f05a?text=OakEats",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
    number: "02",
  },
  {
    title: "ReceiptIQ",
    description: "AI-powered receipt scanning with automatic categorization, budget monitoring, and rich financial visualization. Zero manual entry. Instant insight.",
    image: "https://i.ibb.co/dwpzBJpn/receiptiq-portfolio-cover.png",
    tech: ["React", "AI", "Supabase", "Tailwind CSS"],
    github: "https://github.com/Daniels-not/receiptiq",
    live: "https://receiptiq-neon.vercel.app/",
    number: "03",
  },
  {
    title: "ResumeAI",
    description: "A free AI-powered resume builder with a 9-step guided form, 5 templates, and multi-page PDF export — built after struggling to find a good free tool for his own resume.",
    image: "https://i.ibb.co/JR4nY1Tk/resumeai-linkedin.jpg",
    tech: ["React", "AI", "TypeScript", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/Daniels-not/resumeai",
    live: "https://resumeai-delta-ten.vercel.app",
    number: "04",
  },
  {
    title: "usemoor",
    description: "Open-source React hook library for offline-first, optimistic state management with background sync — published to npm with a full marketing and docs site.",
    image: "https://i.ibb.co/FLbzp2yK/use-Moor.jpg",
    tech: ["React", "TypeScript", "npm", "Open Source"],
    github: "https://github.com/Daniels-not/usemoor",
    live: "https://usemoor.vercel.app/",
    number: "05",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "var(--color-bg)" }}
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 0, 0, 0.04) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
          <span style={{
            color: "",
            fontFamily: "var(--font-body)",
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}>
            03 / Projects
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
          Things I've<br />
          <em style={{ color: "var(--color-accent)", fontStyle: "italic", fontWeight: 300 }}>
            shipped.
          </em>
        </motion.h2>

        {/* Project list */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Accent border glow on hover */}
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px rgba(200,240,90,0.25)" }}
              />

              <div className="flex flex-col md:flex-row">

                {/* Image */}
                <div
                  className="md:w-[38%] h-56 md:h-auto overflow-hidden relative flex-shrink-0"
                  style={{ minHeight: "220px" }}
                >
                  <motion.img
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(0.85)" }}
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to right, transparent 60%, var(--color-surface) 100%)",
                    }}
                  />
                  {/* Number watermark */}
                  <div
                    className="absolute top-4 left-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.15em",
                      color: "rgba(200,240,90,0.7)",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-7 md:p-8 gap-5 flex-1">

                  <div className="flex flex-col gap-3">
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Link buttons — top right */}
                      <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                        {project.github !== "#" && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center w-8 h-8 rounded-lg"
                            style={{
                              background: "var(--color-surface-2)",
                              border: "1px solid var(--color-border)",
                              color: "var(--color-text-muted)",
                            }}
                          >
                            <FaGithub style={{ fontSize: "0.85rem" }} />
                          </motion.a>
                        )}
                        {project.live !== "#" && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center w-8 h-8 rounded-lg"
                            style={{
                              background: "var(--color-accent)",
                              border: "none",
                              color: "var(--color-bg)",
                            }}
                          >
                            <FaExternalLinkAlt style={{ fontSize: "0.75rem" }} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.75,
                      }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--color-text-muted)",
                          background: "var(--color-surface-2)",
                          border: "1px solid var(--color-border)",
                          padding: "3px 10px",
                          borderRadius: "99px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}