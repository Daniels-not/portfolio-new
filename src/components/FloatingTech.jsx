// src/components/FloatingTech.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiJavascript } from "react-icons/si";

const techIcons = [
  { icon: <FaReact />, x: -220, y: -120, color: "#61DBFB" },
  { icon: <SiJavascript />, x: 220, y: -150, color: "#F7DF1E" },
  { icon: <FaNodeJs />, x: -260, y: 120, color: "#68A063" },
  { icon: <FaPython />, x: 260, y: 140, color: "#3776AB" },
  { icon: <SiMongodb />, x: -120, y: 220, color: "#47A248" },
  { icon: <SiFirebase />, x: 160, y: 200, color: "#FFCA28" },
  { icon: <FaGitAlt />, x: 0, y: -230, color: "#F1502F" }
];

export default function FloatingTech() {

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: tech.x,
            y: tech.y
          }}

          animate={{
            opacity: 0.9,
            y: [tech.y - 20, tech.y + 20, tech.y - 20],
            x: [tech.x - 10, tech.x + 10, tech.x - 10],
            rotate: [-5, 5, -5]
          }}

          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut"
          }}

          className="absolute text-5xl drop-shadow-xl"
          style={{
            color: tech.color,
            filter: `drop-shadow(0 0 8px ${tech.color})`
          }}
        >
          {tech.icon}
        </motion.div>
      ))}

    </div>
  );
}