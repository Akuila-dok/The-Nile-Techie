
"use client"
import { motion } from "framer-motion";
import Approach from "@/components/Approach";
import Client from "@/components/Client";
import CodeSnippet from "@/components/CodeSnippet";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { GlobeDemo } from "@/components/GridGlobe";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const scrollBounce = {
  hidden: { y: 0 },
  visible: {
    y: [0, -15, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <motion.main
    className="relative dark: bg-blue-950 flex 
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeInUp}
    >
      <div className="max-w-7xl border-emerald-500 w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <motion.div variants={fadeInUp}>
          <GlobeDemo />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <RecentProjects />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <CodeSnippet />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Client />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Experience />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Approach />
        </motion.div>
        <Footer />
      </div>
    </motion.main>
  );
}
