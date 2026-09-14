"use client";
import Image from "next/image";
import React from 'react'
import htmlSvg from "@/assets/svg/html5.svg";
import javaScriptSvg from "@/assets/svg/javascript.svg";
import nextJsSvg from "@/assets/svg/nextjs.svg";
import tailwindSvg from "@/assets/svg/tailwindcss.svg";
import reactJsSvg from "@/assets/svg/reactjs.svg";
const Skills = () => {
     const skills = [
         { id: 3, name: "HTML", image: htmlSvg },
         { id: 4, name: "CSS (Tailwind)", image: tailwindSvg },
    { id: 1, name: "JavaScript", image: javaScriptSvg },
    { id: 2, name: "React", image: reactJsSvg },
    { id: 7, name: "Next.js", image: nextJsSvg },
  ];
  return (
    <>
       <div className=" bg-white py-10">
          <h1   className="text-center text-[#FA222A] font-bold text-2xl mb-8">
            Skills
          </h1>
       
<div className="relative z-10 flex w-full justify-center">
  <div className="grid w-full max-w-4xl grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
    {skills.map((item) => (
      <div
        key={item.id}
        className="flex cursor-pointer flex-col items-center justify-center gap-3 transition-transform duration-300 hover:scale-125"
      >
        <Image
          src={item.image}
          alt={item.name}
          width={50}
          height={20}
          className="object-contain"
        />

        <span className="font-semibold">
          {item.name}
        </span>
      </div>
    ))}
  </div>
</div>


    </div>
    </>
  )
}

export default Skills