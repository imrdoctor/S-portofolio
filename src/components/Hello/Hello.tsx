"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";

const greetings = [
  "مـرحـبـاً",
  "Hello",
  "こんにちは",
  "Bonjour",
  "안녕하세요",
  "Hallo",
  "नमस्ते",
  "Ciao",
  "নমস্কার",
];

type HelloProps = {
  onEnd?: () => void;
};

const Hello: React.FC<HelloProps> = ({ onEnd }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isSlideOut, setIsSlideOut] = useState(false);

  const handleEnd = useCallback(() => {
    if (onEnd) onEnd();
  }, [onEnd]);

  useEffect(() => {
    if (isSlideOut) return;

    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => {
        const nextGreeting = prev + 1;
        return nextGreeting < greetings.length ? nextGreeting : prev;
      });
    }, 200);

    const finishTimer = setTimeout(() => {
      setIsSlideOut(true);
      setTimeout(() => {
        handleEnd();
      }, 900);
    }, greetings.length * 200);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(finishTimer);
    };
  }, [isSlideOut, handleEnd]);

  return (
    <AnimatePresence>
      <motion.section
        className="flex items-center justify-center h-screen bg-[#ffffff] load-shadow"
        key="intro-section"
        initial={{ y: 0 }}
        animate={{ y: isSlideOut ? "-100%" : 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGreeting}
            initial={{ opacity: currentGreeting === 0 ? 0 : 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={currentGreeting === 0 ? { duration: 0.7 } : { duration: 0 }}
            style={{
              fontSize: "4rem",
              color: "black",
              backgroundImage:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8))",
              fontFamily:
                greetings[currentGreeting] === "مـرحـبـاً" ? "Cairo, sans-serif" : "var(--font-poppins)",
            }}
          >
            {greetings[currentGreeting]}
          </motion.div>
        </AnimatePresence>
      </motion.section>
    </AnimatePresence>
  );
};

export default Hello;
