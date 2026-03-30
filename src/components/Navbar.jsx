import { useState, useEffect } from "react"
import { Menu, X, Code2 } from "lucide-react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ]

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md h-16" : "bg-black h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full text-white">
        <div className="flex items-center gap-2 font-bold">
          <Code2 size={22} />
          Daniels<span className="animate-pulse">_</span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 uppercase tracking-widest text-sm">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              smooth
              duration={600}
              spy
              offset={-70}
              activeClass="text-gray-400"
              className="cursor-pointer hover:text-gray-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black text-white flex flex-col items-center gap-6 py-6 border-t border-white/10"
          >
            {links.map((link, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-70}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer uppercase tracking-widest hover:text-gray-400 transition"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}