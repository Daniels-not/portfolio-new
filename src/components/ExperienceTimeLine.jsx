import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "Foundation",
    year: "2022",
    xp: "+120 XP",
    items: [
      {
        title: "Dynamics Developer",
        org: "LogicOne",
        description: "Built enterprise applications using Dynamics 365 and Power Apps.",
        impact: "Improved internal business workflows, reducing manual processes and increasing operational efficiency.",
        badges: ["Enterprise Systems", "Microsoft Stack"],
      },
      {
        title: "Full Stack Developer",
        org: "LogicOne",
        description: "Developed scalable web applications using React, Node.js, and ASP.NET MVC.",
        impact: "Enhanced client digital presence by delivering modern, responsive applications.",
        badges: ["React", "Node.js", "SQL"],
      },
    ],
  },
  {
    phase: "Professional Growth",
    year: "2022 – 2024",
    xp: "+200 XP",
    items: [
      {
        title: "Full Stack Developer",
        org: "Mercury Soluciones",
        description: "Developed ASP.NET applications, APIs, and Windows services.",
        impact: "Improved system reliability and streamlined operations.",
        badges: ["C#", ".NET", "APIs"],
      },
      {
        title: "Help Desk Specialist",
        org: "Oakwood University",
        description: "Provided technical support and resolved system issues.",
        impact: "Minimized downtime and improved IT support efficiency.",
        badges: ["IT Support", "Networking", "Systems"],
      },
    ],
  },
  {
    phase: "Leadership & Impact",
    year: "2023 – Present",
    xp: "+300 XP",
    items: [
      {
        title: "Web Developer",
        org: "OLA Church",
        description: "Led website development using WordPress.",
        impact: "Improved community engagement with a modern website.",
        badges: ["WordPress", "UI/UX", "Leadership"],
      },
      {
        title: "Audio Engineer",
        org: "OLA Church",
        description: "Managed live audio and streaming systems.",
        impact: "Enhanced live and online service experience.",
        badges: ["Streaming", "Production", "Teamwork"],
      },
    ],
  },
  {
    phase: "Advanced Development",
    year: "2025 – Present",
    xp: "+500 XP",
    items: [
      {
        title: "Software Developer",
        org: "OU Computer Science Club",
        description: "Built an interactive campus map.",
        impact: "Improved campus navigation with real-time interaction.",
        badges: ["TypeScript", "Firebase", "Mapbox"],
      },
      {
        title: "Computer Science Tutor",
        org: "Oakwood University",
        description: "Mentor students in programming.",
        impact: "Helped students improve coding skills and confidence.",
        badges: ["Mentorship", "Algorithms", "Teaching"],
      },
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Roadmap() {
  return (
    <section id="experience" className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto relative">

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
            04 / Experience
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        <motion.h2
          {...fadeUp(0.08)}
          className="mb-24"
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
            been.
          </em>
        </motion.h2>

        {/* ── Original Design Below, Untouched ── */}

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-300 transform -translate-x-1/2" />

        {/* Content */}
        <div className="space-y-32">
          {roadmap.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">

              {/* Phase Title */}
              <div className="text-center mb-16">
                <h3 className="text-2xl font-semibold">{phase.phase}</h3>
                <p className="text-sm text-gray-500">{phase.year} • {phase.xp}</p>
              </div>

              {/* Items */}
              <div className="space-y-16">
                {phase.items.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
                    >
                      <div className="w-full md:w-[45%] border border-gray-300 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:bg-black hover:text-white transition duration-300 group">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-2 group-hover:text-gray-300">{item.org}</p>
                        <p className="text-sm mb-3 text-gray-700 group-hover:text-gray-300">{item.description}</p>
                        <p className="text-xs text-gray-500 mb-3 group-hover:text-gray-400">{item.impact}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.badges.map((badge, i) => (
                            <span
                              key={i}
                              className="text-xs border border-gray-400 px-2 py-1 rounded group-hover:border-white"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}