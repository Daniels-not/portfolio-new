import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/20 py-12 px-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left - Name */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">
            Ramy Campusano
          </h3>
          <p className="text-sm text-gray-400 mt-2">
            Full Stack Developer building modern web experiences.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex gap-6 text-sm">

          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-gray-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-gray-400 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-gray-400 transition">
            Experience
          </a>

        </div>

        {/* Right - Socials */}
        <div className="flex gap-5 text-xl">

          <a
            href="https://github.com/Daniels-not"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ramy-campusano-volquez-a110ba14a/"
            target="_blank"
            className="hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Daniels-not. All rights reserved.
      </div>

    </footer>
  );
}