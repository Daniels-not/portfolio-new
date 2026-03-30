import { motion } from "framer-motion";

const education = [
  {
    school: "Oakwood University",
    degree: "Bachelor's Degree in Computer Science",
    date: "Jan 2023 - Jul 2027",
    gpa: "GPA: 3.7",
    description:
      "Focused on software engineering, full-stack development, and problem-solving through academic and applied projects.",
    skills: ["R", "ASP.NET Core", "Team Leadership", "Communication"],
  },
  {
    school: "ITLA",
    degree: "Software Technologist",
    date: "Aug 2020 - Aug 2025",
    description:
      "Developed strong technical foundations in web development, backend systems, and database management through hands-on training.",
    skills: ["Django", "React.js", "ASP.NET", ".NET Framework", "SQL", "Jira"],
  },
  {
    school: "Nuestra Señora del Perpetuo Socorro",
    degree: "High School - IT Focus",
    date: "2008 - 2020",
    description:
      "Built early experience in technology and web development, including creating foundational websites.",
    skills: ["Web Development", "Foundations", "Problem Solving"],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Education() {
  return (
    <section id="education" className="bg-white text-black py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── New Title Block ── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
          <span
            style={{
              color: "#1a5c38",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            06 / Education
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#0c0c0c",
          }}
        >
          Where I've<br />
          <em style={{ color: "#000000", fontStyle: "italic", fontWeight: 300 }}>
            studied.
          </em>
        </motion.h2>

        {/* ── Original Design Below, Untouched ── */}

        <p className="text-center text-gray-500 mb-20">
          Academic background and technical foundation
        </p>

        <div className="relative border-l border-gray-300">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-16 ml-6"
            >
              <span className="absolute -left-3 w-6 h-6 bg-black rounded-full" />

              <div className="border border-gray-300 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:bg-black hover:text-white transition duration-300 group">
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-sm text-gray-600 mb-1 group-hover:text-gray-300">{edu.degree}</p>
                <p className="text-sm text-gray-500 mb-2 group-hover:text-gray-400">{edu.date}</p>

                {edu.gpa && (
                  <span className="inline-block text-xs px-3 py-1 border border-gray-400 rounded-full mb-3 group-hover:border-white">
                    {edu.gpa}
                  </span>
                )}

                <p className="text-sm mb-4 leading-relaxed text-gray-700 group-hover:text-gray-300">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 border border-gray-400 rounded-full group-hover:border-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}