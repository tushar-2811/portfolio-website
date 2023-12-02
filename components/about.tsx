"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About Me");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center mt-20 leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am living in Delhi for past 3 years, Now in{" "}
        <span className="font-medium">Janakpuri</span>, I decided to pursue my
        passion for programming. I enrolled in a Engineering College,{" "}
        <span className="font-medium">I can say that I am an Self-Taught Programmer.</span> {""}
        <span className="italic">In Personal Life , I am funny and Humor is my thing,</span> {""}
        I feel like one Should Live his/her life end to end and should not leave any room for regret !!  <span className="underline"></span> 
        {" "}
        <span className="font-medium flex flex-col">
          Cool , Funny , Very Spontaneous , adventurous {" "}
        </span>
       {" "}
        <span className="font-medium flex flex-col text-red-500 ">  
         ( Sorry I used your photograph here without your permission )
        </span>
        
     
      </p>

      
    </motion.section>
  );
}
