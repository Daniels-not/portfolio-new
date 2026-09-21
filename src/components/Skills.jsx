import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaNpm,
  FaMicrosoft,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiMysql,
  SiNextdotjs,
  SiIonic,
  SiTailwindcss,
  SiDotnet,
  SiFirebase,
  SiFigma,
  SiGithub,
  SiSupabase,
  SiMongodb,
  SiFramer,
  SiMapbox,
  SiVercel,
  SiExpress,
} from "react-icons/si";
/* ========================================================= BRAND COLORS ========================================================= */ const brandColors =
  {
    javascript: "#F7DF1E",
    cpp: "#00599C",
    csharp: "#68217A",
    sql: "#4479A1",
    react: "#61DAFB",
    nextjs: "#000000",
    ionic: "#3880FF",
    html: "#E34F26",
    css: "#1572B6",
    tailwind: "#06B6D4",
    framer: "#0055FF",
    node: "#339933",
    express: "#111111",
    dotnet: "#512BD4",
    firebase: "#FFCA28",
    supabase: "#3ECF8E",
    mysql: "#4479A1",
    mongodb: "#47A248",
    firestore: "#FFCA28",
    postgresql: "#4169E1",
    git: "#F05032",
    github: "#181717",
    npm: "#CB3837",
    vercel: "#000000",
    figma: "#F24E1E",
    mapbox: "#4264FB",
    wordpress: "#21759B",
    api: "#61DAFB",
  };
/* ========================================================= SKILL GROUPS ========================================================= */ const skillGroups =
  [
    {
      label: "Languages",
      description: "Languages I use to build applications and solve problems.",
      skills: [
        {
          icon: <SiJavascript />,
          name: "JavaScript",
          color: brandColors.javascript,
        },
        { icon: <SiCplusplus />, name: "C++", color: brandColors.cpp },
        { icon: <FaMicrosoft />, name: "C#", color: brandColors.csharp },
        { icon: <SiMysql />, name: "SQL", color: brandColors.sql },
      ],
    },
    {
      label: "Front-End",
      description:
        "Frameworks and tools I use to build modern user interfaces.",
      skills: [
        { icon: <FaReact />, name: "React", color: brandColors.react },
        { icon: <SiNextdotjs />, name: "Next.js", color: brandColors.nextjs },
        { icon: <SiIonic />, name: "Ionic", color: brandColors.ionic },
        { icon: <FaHtml5 />, name: "HTML5", color: brandColors.html },
        { icon: <FaCss3Alt />, name: "CSS3", color: brandColors.css },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind CSS",
          color: brandColors.tailwind,
        },
        {
          icon: <SiFramer />,
          name: "Framer Motion",
          color: brandColors.framer,
        },
      ],
    },
    {
      label: "Back-End",
      description:
        "Technologies I use for APIs, services, authentication, and application logic.",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", color: brandColors.node },
        { icon: <SiExpress />, name: "Express", color: brandColors.express },
        { icon: <SiDotnet />, name: "ASP.NET", color: brandColors.dotnet },
        { icon: <SiFirebase />, name: "Firebase", color: brandColors.firebase },
        { icon: <SiSupabase />, name: "Supabase", color: brandColors.supabase },
      ],
    },
    {
      label: "Databases",
      description: "Database technologies I have worked with in applications.",
      skills: [
        { icon: <SiMysql />, name: "MySQL", color: brandColors.mysql },
        { icon: <SiMongodb />, name: "MongoDB", color: brandColors.mongodb },
        {
          icon: <SiFirebase />,
          name: "Firestore",
          color: brandColors.firestore,
        },
        {
          icon: <SiSupabase />,
          name: "PostgreSQL",
          color: brandColors.postgresql,
        },
      ],
    },
    {
      label: "Tools & Platforms",
      description:
        "Tools I use for development, collaboration, deployment, and design.",
      skills: [
        { icon: <FaGitAlt />, name: "Git", color: brandColors.git },
        { icon: <SiGithub />, name: "GitHub", color: brandColors.github },
        { icon: <FaNpm />, name: "npm", color: brandColors.npm },
        { icon: <SiVercel />, name: "Vercel", color: brandColors.vercel },
        { icon: <SiFigma />, name: "Figma", color: brandColors.figma },
        { icon: <SiMapbox />, name: "Mapbox", color: brandColors.mapbox },
        {
          icon: <FaWordpress />,
          name: "WordPress",
          color: brandColors.wordpress,
        },
      ],
    },
    {
      label: "Development",
      description:
        "Practices and technologies I use throughout the development process.",
      skills: [
        { icon: <FaCode />, name: "REST APIs", color: brandColors.api },
        { icon: <SiGithub />, name: "Git Workflow", color: brandColors.github },
        {
          icon: <FaReact />,
          name: "Component Design",
          color: brandColors.react,
        },
        { icon: <SiFigma />, name: "UI / UX", color: brandColors.figma },
      ],
    },
  ];
/* ========================================================= ANIMATION ========================================================= */ const fadeUp =
  (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  });
/* ========================================================= SKILL CARD ========================================================= */ function SkillCard({
  skill,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.035,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl"
      tabIndex={0}
      aria-label={skill.name}
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {" "}
      {/* Brand glow */}{" "}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient( circle at 50% 20%, ${skill.color}18, transparent 68% )`,
        }}
      />{" "}
      {/* Top accent */}{" "}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ background: skill.color, transformOrigin: "center" }}
      />{" "}
      <div className="relative z-10 flex items-center gap-4 px-5 py-4">
        {" "}
        {/* Icon container */}{" "}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 2 }}
          transition={{ duration: 0.25 }}
          className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
          style={{
            background: `${skill.color}14`,
            border: `1px solid ${skill.color}35`,
          }}
        >
          {" "}
          <span
            className="flex items-center justify-center text-[1.45rem]"
            style={{
              color: skill.color,
              filter:
                skill.name === "GitHub" ||
                skill.name === "Vercel" ||
                skill.name === "Next.js" ||
                skill.name === "Express"
                  ? "drop-shadow(0 0 1px rgba(255,255,255,0.35))"
                  : "none",
            }}
          >
            {" "}
            {skill.icon}{" "}
          </span>{" "}
        </motion.div>{" "}
        {/* Skill name */}{" "}
        <div className="min-w-0">
          {" "}
          <p
            className="text-sm font-medium truncate"
            style={{
              color: "var(--color-text)",
              fontFamily: "var(--font-body)",
            }}
          >
            {" "}
            {skill.name}{" "}
          </p>{" "}
          <p
            className="text-[0.65rem] mt-0.5"
            style={{ color: "var(--color-text-muted)" }}
          >
            {" "}
            Technology{" "}
          </p>{" "}
        </div>{" "}
        {/* Arrow */}{" "}
        <motion.span
          className="ml-auto text-xs opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
          style={{ color: skill.color }}
          whileHover={{ x: 3 }}
        >
          {" "}
          ↗{" "}
        </motion.span>{" "}
      </div>{" "}
    </motion.div>
  );
}
/* ========================================================= SKILLS SECTION ========================================================= */ export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28 px-6"
      style={{ background: "var(--color-bg)" }}
    >
      {" "}
      {/* Background decoration */}{" "}
      <div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,240,90,0.045) 0%, transparent 70%)",
          transform: "translate(-45%, -50%)",
        }}
      />{" "}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,240,90,0.04) 0%, transparent 70%)",
          transform: "translate(35%, 35%)",
        }}
      />{" "}
      <div className="max-w-6xl mx-auto relative z-10">
        {" "}
        {/* Section label */}{" "}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
          {" "}
          <span
            style={{
              color: "var(--color-accent)",
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            {" "}
            02 / Skills{" "}
          </span>{" "}
          <div
            className="flex-1 h-px"
            style={{ background: "var(--color-border)" }}
          />{" "}
        </motion.div>{" "}
        {/* Heading */}{" "}
        <motion.div {...fadeUp(0.08)} className="max-w-3xl mb-8">
          {" "}
          <h2
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {" "}
            Tools I build <br />{" "}
            <em
              style={{
                color: "var(--color-accent)",
                fontStyle: "italic",
                fontWeight: 300,
              }}
            >
              {" "}
              with.{" "}
            </em>{" "}
          </h2>{" "}
        </motion.div>{" "}
        {/* Intro */}{" "}
        <motion.div {...fadeUp(0.12)} className="max-w-2xl mb-16">
          {" "}
          <p
            className="text-base md:text-lg leading-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            {" "}
            My stack covers the full development process — from designing
            interfaces and building frontend applications to developing APIs,
            connecting databases, and deploying production-ready software.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* Quick stack */}{" "}
        <motion.div {...fadeUp(0.16)} className="flex flex-wrap gap-2 mb-20">
          {" "}
          {[
            "Full-Stack Development",
            "JavaScript",
            "React",
            "Node.js",
            "ASP.NET",
            "Firebase",
            "Supabase",
            "SQL",
            "REST APIs",
          ].map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-full text-xs"
              style={{
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
                background: "var(--color-surface)",
                letterSpacing: "0.03em",
              }}
            >
              {" "}
              {item}{" "}
            </span>
          ))}{" "}
        </motion.div>{" "}
        {/* Skill groups */}{" "}
        <div className="space-y-14">
          {" "}
          {skillGroups.map((group, groupIndex) => (
            <motion.div key={group.label} {...fadeUp(0.05 * groupIndex)}>
              {" "}
              {/* Group heading */}{" "}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-5">
                {" "}
                <div>
                  {" "}
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.78rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--color-text)",
                      fontWeight: 600,
                    }}
                  >
                    {" "}
                    {group.label}{" "}
                  </h3>{" "}
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {" "}
                    {group.description}{" "}
                  </p>{" "}
                </div>{" "}
                <span
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {" "}
                  {String(group.skills.length).padStart(2, "0")} skills{" "}
                </span>{" "}
              </div>{" "}
              {/* Skill cards */}{" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {" "}
                {group.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
        {/* Bottom summary */}{" "}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-20 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {" "}
          <div>
            {" "}
            <p
              className="text-xs uppercase tracking-[0.16em] mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              {" "}
              How I work{" "}
            </p>{" "}
            <p
              className="text-sm leading-6 max-w-xl"
              style={{ color: "var(--color-text-muted)" }}
            >
              {" "}
              I focus on writing maintainable code, building useful user
              experiences, collaborating through Git, and learning whatever
              technology a project requires.{" "}
            </p>{" "}
          </div>{" "}
          <div
            className="flex items-center gap-3 shrink-0"
            style={{ color: "var(--color-text-muted)" }}
          >
            {" "}
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />{" "}
            <span className="text-xs uppercase tracking-wider">
              {" "}
              Always learning{" "}
            </span>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
