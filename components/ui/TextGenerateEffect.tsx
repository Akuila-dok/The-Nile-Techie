"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string[];
  className?: string;
  filter?: boolean;
  duration?: number;
  interval?: number;
}

export const TextGenerateEffect = ({
  words = [], // Default to empty array if not provided
  className,
  filter = true,
  duration = 0.9,
  interval = 7000, // Interval for cycling words
}: TextGenerateEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true; // Ensure component is mounted

    const cycleWords = async () => {
      if (words.length === 0) return; // Exit early if no words to display

      while (isMounted) {
        try {
          if (controls) {
            // Wait for the animation to complete before proceeding
            await controls.start({ opacity: 1, y: 0, transition: { duration } });
            await new Promise((resolve) => setTimeout(resolve, interval));
            await controls.start({ opacity: 0, y: -20, transition: { duration } });

            // Update the word index, ensuring component is mounted
            if (isMounted) {
              setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
          }
        } catch (error) {
          console.error("Error during animation:", error);
        }
      }
    };

    cycleWords();

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      isMounted = false;
      controls.stop();
    };
  }, [controls, words, interval, duration]); // Ensure `words` is included in dependencies

  // Check if `words` array is not empty and `currentWordIndex` is within bounds
  const displayWord = words.length > 0 ? words[currentWordIndex] : '';

  return (
    <div className={cn("relative inline-block", className)}>
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 20 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className={cn("text-white", className)}>{displayWord}</span>
      </motion.div>
    </div>
  );
};
