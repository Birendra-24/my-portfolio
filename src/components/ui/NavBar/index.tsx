"use client"
import React from 'react'
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import {Button,Flex} from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaHome, FaRProject } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";
// import ContentWrapper from "../../layout/ContentWrapper";
import Link from "next/link";


const Navbar = () => {
     const router = useRouter();
  const pathname = usePathname(); // ✅ Get current route path
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const sections = [
    { key: "", label: "Home", icon: <FaHome size={20} /> },
    { key: "services", label: "Services", icon: <FaRProject size={20} /> },
    { key: "skills", label: "Skills", icon: <FaHome size={20} /> },
    { key: "contact", label: "Contact", icon: <GrContact size={20} /> },
  ];

  const isActive = (key: string) =>
    pathname === `/${key}` || (key === "" && pathname === "/");

  const handleNavigation = (key:string) => {
  if (key === "contact") {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
       setIsMobileMenuOpen(false);
    return;
  }

  router.push(`/${key}`);
   setIsMobileMenuOpen(false);
};

  return (
    <nav  className="sticky top-0 z-50 w-full bg-[#FAF9F6] shadow-lg">
       <div
         className='flex justify-between items-center pb-2 px-5'
        >
          <Link href={"/"} className="text-red-500 font-bold">
            Birendra
          </Link>

{/* Desktop Navigation part */}

<div className='hidden md:flex items-center gap-4'>
    {sections.map(({key,icon,label}) => {
        return (
        <button key={key} 
              type="button"
            
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-colors ${
          isActive(key)
            ? "border-b-2 border-red-500 text-red-500"
            : "text-[#36454F] hover:text-red-500"
        }`}
        onClick={() => handleNavigation(key)}
        >
        <span>{icon}</span>
<span className='text-lg'>{label}</span>
</button>
        )
    })}
</div>

{/* right side button */}
 <div className="flex items-center m-3 gap-3">
            <a href="/birendra-resume.pdf" download>
              <button type="button"  className="flex items-center gap-2 bg-red-500 text-white p-2">
                <IoMdDownload />
                {/* Text */}
                {/* <span className="hidden md:inline"> Resume</span> */}
                <span className="inline">Resume</span>
              </button>
            </a>

            <button  className="block md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}>
<MenuOutlined />
            </button>
          </div>

          </div>

           {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex md:hidden">
          <div className="absolute right-0 top-0 h-full w-64 bg-red-300 p-6 flex flex-col gap-4">
           
            <button className='self-end text-white text-2xl cursor-pointer px-1'
  type="button"
  aria-label="Close navigation menu"
  onClick={() => setIsMobileMenuOpen(false)}
>
  <CloseOutlined />
</button>

            {sections.map(({key,icon,label}) => (
              <button
                key={key}
                type='button'
                className={`flex items-center align-middle gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                  isActive(key)
                    ? "text-red-500 bg-white"
                    : "text-white hover:text-red-500 hover:bg-white"
                }`}
                onClick={() => handleNavigation(key) }
              >
                {icon}
                <span className="text-lg">{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
