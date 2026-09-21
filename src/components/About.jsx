import { motion } from "framer-motion";
import { FaDownload, FaNodeJs } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiDotnet,
  SiMysql,
  SiFirebase,
} from "react-icons/si";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "https://docs.google.com/document/d/1bfoBKdbFeE0Us4ut3QFpR04PY1ugwSuEsv9ELoFOR7I/edit?usp=sharing";
  link.download = "https://docs.google.com/document/d/1bfoBKdbFeE0Us4ut3QFpR04PY1ugwSuEsv9ELoFOR7I/edit?usp=sharing";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "#61dafb",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#6cc24a",
  },
  {
    name: "ASP.NET",
    icon: SiDotnet,
    color: "#a855f7",
  },
  {
    name: "SQL",
    icon: SiMysql,
    color: "#f29111",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#ffca28",
  },
];

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

const bodyFont = "var(--font-body)";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-6 md:py-32"
      style={{
        background: "var(--color-bg)",
        fontFamily: bodyFont,
      }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-[20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(200,240,90,0.055) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Section Header */}
        <motion.div
          {...fadeUp(0)}
          className="mb-7 flex items-center gap-4"
        >
          <span
            className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.24em] sm:text-[11px]"
            style={{
              color: "var(--color-accent)",
            }}
          >
            01 / About
          </span>

          <div
            className="h-px flex-1"
            style={{
              background: "var(--color-border)",
            }}
          />

          <span
            className="hidden text-[10px] uppercase tracking-[0.18em] sm:block"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            Developer · Builder · Problem Solver
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          {...fadeUp(0.05)}
          className="mb-14 max-w-5xl"
        >
          <p
            className="mb-5 text-xs font-medium uppercase tracking-[0.2em]"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            A little about me
          </p>

          <h2
            className="m-0"
            style={{
              color: "var(--color-text)",
              fontFamily: bodyFont,
              fontSize: "clamp(2.7rem, 7vw, 5.8rem)",
              fontWeight: 650,
              letterSpacing: "-0.065em",
              lineHeight: 0.94,
            }}
          >
            I build things
            <br />
            <span
              style={{
                color: "var(--color-accent)",
              }}
            >
              people can use.
            </span>
          </h2>

          <p
            className="mt-7 max-w-2xl text-sm leading-7 sm:text-base"
            style={{
              color: "var(--color-text-muted)",
            }}
          >
            Full-stack developer focused on building practical,
            user-centered products from idea to production.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
          {/* LEFT COLUMN */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-col gap-7"
          >
            {/* Profile Card */}
            <div className="group relative">
              <div
                className="absolute -bottom-3 -right-3 h-full w-full rounded-[24px]"
                style={{
                  border: "1px solid var(--color-accent)",
                  opacity: 0.25,
                }}
              />

              <div
                className="relative overflow-hidden rounded-[24px]"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://avatars.githubusercontent.com/u/68081630?v=4"
                    alt="Ramy Campusano"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{
                      filter: "grayscale(8%)",
                      objectPosition: "center",
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.05) 48%, transparent 75%)",
                    }}
                  />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p
                      className="m-0 text-lg font-semibold"
                      style={{
                        color: "#fff",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Ramy Campusano
                    </p>

                    <p
                      className="mt-1 text-xs"
                      style={{
                        color: "rgba(255,255,255,0.68)",
                      }}
                    >
                      Full-Stack Developer
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div
                  className="flex items-center justify-between px-5 py-4"
                  style={{
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-50"
                        style={{
                          background: "var(--color-accent)",
                        }}
                      />

                      <span
                        className="relative inline-flex h-2.5 w-2.5 rounded-full"
                        style={{
                          background: "var(--color-accent)",
                        }}
                      />
                    </span>

                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                      style={{
                        color: "var(--color-text-muted)",
                      }}
                    >
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <p
                  className="m-0 text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: "var(--color-text-muted)",
                  }}
                >
                  Core technologies
                </p>

                <span
                  className="text-[10px]"
                  style={{
                    color: "var(--color-text-muted)",
                  }}
                >
                  06
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.15 + index * 0.05,
                        duration: 0.4,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="group/skill flex items-center gap-3 rounded-xl px-3.5 py-3"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          background: `${skill.color}12`,
                        }}
                      >
                        <Icon
                          aria-hidden="true"
                          style={{
                            fontSize: "1rem",
                            color: skill.color,
                          }}
                        />
                      </div>

                      <span
                        className="text-[10px] font-semibold uppercase tracking-[0.04em]"
                        style={{
                          color: "var(--color-text)",
                        }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            {...fadeUp(0.15)}
            className="min-w-0"
          >
            {/* Introduction */}
            <div className="max-w-3xl">
              <p
                className="m-0"
                style={{
                  color: "var(--color-text)",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                  fontWeight: 450,
                  lineHeight: 1.8,
                  letterSpacing: "-0.02em",
                }}
              >
                I’m{" "}
                <span
                  style={{
                    color: "var(--color-accent)",
                    fontWeight: 650,
                  }}
                >
                  Ramy Campusano
                </span>
                , a Computer Science student and full-stack developer at
                Oakwood University. I enjoy turning ideas into real products
                that solve practical problems and create better experiences
                for users.
              </p>

              <p
                className="mt-6 m-0 text-sm leading-7 sm:text-base"
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                My experience spans frontend and backend development,
                including React, TypeScript, JavaScript, Node.js, ASP.NET,
                Firebase, Supabase, SQL, and REST APIs. I have worked on
                projects ranging from campus platforms and navigation tools to
                AI-powered applications and progressive web apps.
              </p>

              <p
                className="mt-6 m-0 text-sm leading-7 sm:text-base"
                style={{
                  color: "var(--color-text-muted)",
                }}
              >
                Beyond writing code, I enjoy taking ownership of projects,
                collaborating with other developers, mentoring students, and
                learning technologies that help me build better solutions.
              </p>
            </div>

            {/* Divider */}
            <div
              className="my-10 h-px w-full"
              style={{
                background: "var(--color-border)",
              }}
            />

            {/* Highlights */}
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <span
                  className="mb-3 block text-[10px] font-bold uppercase tracking-[0.17em]"
                  style={{
                    color: "var(--color-accent)",
                  }}
                >
                  Leadership
                </span>

                <p
                  className="m-0 text-sm leading-6"
                  style={{
                    color: "var(--color-text)",
                  }}
                >
                  Lead dashboard development for the Oakwood CS Club and
                  collaborate with a team of developers.
                </p>
              </div>

              <div>
                <span
                  className="mb-3 block text-[10px] font-bold uppercase tracking-[0.17em]"
                  style={{
                    color: "var(--color-accent)",
                  }}
                >
                  Development
                </span>

                <p
                  className="m-0 text-sm leading-6"
                  style={{
                    color: "var(--color-text)",
                  }}
                >
                  Build full-stack applications across frontend, backend,
                  databases, APIs, and deployment.
                </p>
              </div>

              <div>
                <span
                  className="mb-3 block text-[10px] font-bold uppercase tracking-[0.17em]"
                  style={{
                    color: "var(--color-accent)",
                  }}
                >
                  Mentorship
                </span>

                <p
                  className="m-0 text-sm leading-6"
                  style={{
                    color: "var(--color-text)",
                  }}
                >
                  Tutor Computer Science students in programming, algorithms,
                  debugging, and problem solving.
                </p>
              </div>
            </div>

            {/* What I Build */}
            <div
              className="mt-10 rounded-2xl p-6 sm:p-7"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p
                    className="m-0 text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      color: "var(--color-accent)",
                    }}
                  >
                    What I bring
                  </p>

                  <h3
                    className="mt-2 text-xl font-semibold"
                    style={{
                      color: "var(--color-text)",
                      letterSpacing: "-0.035em",
                    }}
                  >
                    From idea to production
                  </h3>
                </div>

                <span
                  className="hidden text-2xl sm:block"
                  style={{
                    color: "var(--color-text-muted)",
                  }}
                >
                  ↗
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Responsive and accessible interfaces",
                  "Scalable frontend architecture",
                  "Backend APIs and database integration",
                  "Real-world product development",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{
                        background: "var(--color-accent)",
                      }}
                    />

                    <span
                      className="text-sm leading-6"
                      style={{
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume CTA */}
            <motion.button
              type="button"
              onClick={handleDownload}
              whileHover="hover"
              whileTap={{
                scale: 0.985,
              }}
              initial="rest"
              aria-label="Download Ramy's resume"
              className="group relative mt-8 w-full overflow-hidden rounded-2xl text-left"
              style={{
                background: "var(--color-accent)",
                border: "1px solid var(--color-accent)",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <motion.div
                variants={{
                  rest: {
                    x: "-120%",
                  },
                  hover: {
                    x: "120%",
                    transition: {
                      duration: 0.65,
                      ease: "easeInOut",
                    },
                  },
                }}
                className="pointer-events-none absolute inset-y-0 w-1/2 skew-x-[-15deg]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)",
                }}
              />

              <div
                className="relative flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5"
                style={{
                  color: "var(--color-bg)",
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(12,12,12,0.13)",
                    }}
                  >
                    <FaDownload
                      aria-hidden="true"
                      style={{
                        fontSize: "0.85rem",
                      }}
                    />
                  </div>

                  <div>
                    <span
                      className="block text-[11px] font-bold uppercase tracking-[0.12em]"
                      style={{
                        lineHeight: 1.2,
                      }}
                    >
                      Download Resume
                    </span>

                    <span
                      className="mt-1 block text-[10px]"
                      style={{
                        opacity: 0.65,
                      }}
                    >
                      PDF · Updated 2026
                    </span>
                  </div>
                </div>

                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                    },
                    hover: {
                      x: 6,
                    },
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-semibold"
                  style={{
                    background: "rgba(12,12,12,0.13)",
                  }}
                >
                  →
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}