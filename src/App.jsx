import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceTimeLine from "./components/ExperienceTimeLine";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {

  const [loading, setLoading] = useState(true);

  return (
    <div className="scroll-smooth">

      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Toaster position="top-right" />

          <Navbar />

          <main className="overflow-hidden">

            <Hero />

            <About />

            <Skills />

            <Projects />

            <ExperienceTimeLine />

            <Education />

            <Contact />

          </main>

          <Footer />
        </>
      )}
    </div>
  );
}