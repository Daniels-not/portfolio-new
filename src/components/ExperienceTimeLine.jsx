import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "Early Development",
    year: "2022",
    xp: "+120 XP",
    items: [
      {
        title: "Full Stack Engineer",
        org: "LogicOne",
        description:
          "Developed full-stack web applications using React, ASP.NET MVC, Node.js, and SQL. Worked across both frontend and backend features and helped structure application architecture.",
        impact:
          "Built responsive user interfaces, developed backend functionality, integrated APIs, and helped deliver complete features from development to deployment.",
        badges: ["React", "Node.js", "ASP.NET MVC", "SQL", "REST APIs"],
      },
    ],
  },

  {
    phase: "Professional Development",
    year: "2022",
    xp: "+200 XP",
    items: [
      {
        title: "Full Stack Developer",
        org: "Mercury Soluciones",
        description:
          "Developed business applications using ASP.NET, WebForms, VB, and Windows Services. Worked on backend functionality, integrations, and system documentation.",
        impact:
          "Helped improve internal business processes by developing reliable applications and services while supporting system integrations and maintaining technical documentation.",
        badges: [
          "ASP.NET",
          "VB",
          "WebForms",
          "Windows Services",
          "APIs",
        ],
      },
    ],
  },

  {
    phase: "Technical Support",
    year: "2024 – 2026",
    xp: "+300 XP",
    items: [
      {
        title: "Help Desk Support Specialist",
        org: "Oakwood University",
        description:
          "Provided first-line technical support to students, faculty, and staff. Troubleshot account access, system issues, software problems, and general technical requests.",
        impact:
          "Helped users resolve technical issues efficiently while reducing downtime and improving the overall support experience.",
        badges: [
          "Technical Support",
          "Troubleshooting",
          "Account Management",
          "Systems",
          "Customer Service",
        ],
      },
    ],
  },

  {
    phase: "Community & Leadership",
    year: "2023 – Present",
    xp: "+350 XP",
    items: [
      {
        title: "Web Developer",
        org: "OLA Church",
        description:
          "Developed and maintained the organization's website using WordPress. Worked on page structure, content updates, responsive layouts, and the overall user experience.",
        impact:
          "Created a more modern and accessible online presence while helping the organization communicate information and connect with its community.",
        badges: ["WordPress", "UI/UX", "Web Development", "Content"],
      },
      {
        title: "Audio Engineer",
        org: "OLA Church",
        description:
          "Managed live audio production, microphones, mixing, and streaming equipment for services and events. Worked with the production team to prepare and operate audio systems.",
        impact:
          "Supported reliable live and online services by managing audio quality and troubleshooting technical issues during events.",
        badges: ["Audio Production", "Live Streaming", "Troubleshooting", "Teamwork"],
      },
    ],
  },

  {
    phase: "Leadership & Advanced Development",
    year: "2025 – Present",
    xp: "+500 XP",
    items: [
      {
        title: "Software Developer — Dashboard Lead",
        org: "OU Computer Science Club",
        description:
          "Lead the dashboard development team for Campus Connect. Work with other developers through weekly standups, feature planning, Git workflows, and collaborative development.",
        impact:
          "Helped turn student-focused ideas into real software features, including an interactive campus map using Mapbox GL JS and responsive web and mobile interfaces.",
        badges: [
          "React",
          "TypeScript",
          "Mapbox GL JS",
          "Firebase",
          "Git",
          "Leadership",
        ],
      },
      {
        title: "Computer Science Tutor",
        org: "Oakwood University",
        description:
          "Provide individualized tutoring in programming, algorithms, C++, frontend and backend development, and general problem solving.",
        impact:
          "Help students understand difficult programming concepts by breaking problems into smaller steps, debugging code with them, and helping them build confidence.",
        badges: [
          "C++",
          "Algorithms",
          "Programming",
          "Mentorship",
          "Problem Solving",
        ],
      },
    ],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function Roadmap() {
  return (
    <section id="experience" className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto relative">
        {/* Title */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-4 mb-6"
        >
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
          Where I've
          <br />
          <em
            style={{
              color: "#000000",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            been.
          </em>
        </motion.h2>

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gray-300 transform -translate-x-1/2 hidden md:block" />

        {/* Experience */}
        <div className="space-y-32">
          {roadmap.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">
              {/* Phase Title */}
              <motion.div
                {...fadeUp(phaseIndex * 0.05)}
                className="text-center mb-16"
              >
                <h3 className="text-2xl font-semibold">
                  {phase.phase}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  {phase.year} • {phase.xp}
                </p>
              </motion.div>

              {/* Items */}
              <div className="space-y-16">
                {phase.items.map((item, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: isLeft ? -100 : 100,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`flex ${
                        isLeft
                          ? "md:justify-start"
                          : "md:justify-end"
                      } justify-center`}
                    >
                      <div className="w-full md:w-[45%] border border-gray-300 bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:bg-black hover:text-white transition-all duration-300 group">
                        {/* Role */}
                        <h4 className="text-lg font-semibold">
                          {item.title}
                        </h4>

                        {/* Organization */}
                        <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-300">
                          {item.org}
                        </p>

                        {/* Description */}
                        <p className="text-sm leading-6 mb-4 text-gray-700 group-hover:text-gray-300">
                          {item.description}
                        </p>

                        {/* Impact */}
                        <div className="border-l-2 border-gray-200 pl-4 mb-5 group-hover:border-gray-500">
                          <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                            Impact
                          </p>

                          <p className="text-sm leading-6 text-gray-600 group-hover:text-gray-300">
                            {item.impact}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {item.badges.map((badge, i) => (
                            <span
                              key={i}
                              className="text-xs border border-gray-300 px-2.5 py-1 rounded-full text-gray-600 group-hover:border-gray-500 group-hover:text-gray-200"
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