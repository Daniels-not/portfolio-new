import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CodeRain from "./CodeRain";

const bootSteps = [
  "initializing system...",
  "loading modules...",
  "connecting to network...",
  "compiling interface...",
  "launching experience..."
];

export default function Loader({ onFinish }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (currentLine >= bootSteps.length) {
      const timer = setTimeout(() => {
        onFinish();
      }, 1200);

      return () => clearTimeout(timer);
    }

    const text = bootSteps[currentLine];
    let charIndex = 0;

    const typing = setInterval(() => {
      setTypedText(text.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === text.length) {
        clearInterval(typing);

        setTimeout(() => {
          setLines((prev) => [...prev, text]);
          setTypedText("");
          setCurrentLine((prev) => prev + 1);
          setProgress(((currentLine + 1) / bootSteps.length) * 100);
        }, 400);
      }
    }, 30);

    return () => clearInterval(typing);
  }, [currentLine, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black text-white font-mono flex items-center justify-center z-[200]"
    >
      {/* Matrix background */}
      <CodeRain />

      <div className="relative z-10 w-[90%] max-w-3xl">

        <h1 className="text-white text-2xl mb-6">
          Daniels Boot Sequence
        </h1>

        <div className="space-y-2 text-sm md:text-base">

          {lines.map((line, i) => (
            <div key={i}>
              <span className="text-white mr-2">{">"}</span>
              {line} <span className="text-white">[ OK ]</span>
            </div>
          ))}

          {currentLine < bootSteps.length && (
            <div>
              <span className="text-white mr-2">{">"}</span>
              {typedText}
              <span className="animate-pulse ml-1">█</span>
            </div>
          )}

        </div>

        {/* Progress Bar */}
        <div className="mt-8">

          <div className="w-full bg-gray-800 h-2 rounded">
            <motion.div
              className="h-2 bg-white"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <p className="text-white mt-2 text-sm">
            Boot Progress: {Math.floor(progress)}%
          </p>

        </div>

      </div>
    </motion.div>
  );
}