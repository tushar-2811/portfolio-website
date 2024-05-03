"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center mt-20 leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Beautiful you</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">In the grand tapestry of existence, you are the rarest gem, a celestial jewel that outshines all others with your grace and magnificence.</span>
       
        
     
      </p>

      
    </motion.section>
  );
}
