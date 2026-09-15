"use client";
import React from 'react'
import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import { Avatar, Button, Flex, Typography } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { IoMdMail } from "react-icons/io";
import image from "../../../../public/birendra.jpg"

const index = () => {
    const texts = useMemo(
    () => [
      "Frontend-Developer",
      "2+ Years Crafting Responsive Web Interfaces",
      "Building with React, Tailwind and Modern UI Patterns",
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 10000); // Change text every 10 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayText([]);
    const currentText = texts[currentIndex].split("");

    const timeout = setTimeout(() => {
      currentText.forEach((_, i) => {
        setTimeout(() => {
          setDisplayText((prev) => [...prev, currentText[i]]);
        }, i * 50);
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentIndex, texts]);
  return (
    <div className="!text-black mx-8 flex items-center relative overflow-hidden bg-gradient-to-br from-[#FAF9F6] to-white min-h-[calc(100vh-4rem)] h-full">
      <div className="absolute inset-0 z-0" />
        <Flex
          align="center"
          justify="center"
          className="!flex-col lg:!flex-row !gap-12 !relative !z-10 !justify-between"
        >
          {/* IMAGE SECTION - Appears on top for sm/md, right for lg */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

              <motion.div
                className="relative rounded-full overflow-hidden w-full h-full"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Image
                  src={image}
                  alt="Birendra Kshetri"
                  layout="fill"
                  loading='eager'
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT SECTION - Appears below image on sm/md, left for lg */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left order-2 lg:order-1"
          >
            <Typography.Text className=" !text-lg md:!text-2xl  !block  !mb-2">
              Hi there! <span className="animate-wave cursor-pointer">👋</span>{" "}
              I&apos;m
            </Typography.Text>

            <Typography.Title
              level={1}
              className="!text-[#FA222A]  !text-5xl md:text-5xl font-bold gradient-text !mt-0 !mb-2"
            >
              Birendra Kshetri
            </Typography.Title>

            <Typography.Title
              level={2}
              className=" !m-0 !font-bold !text-4xl md:!text-4xl min-h-[60px] "
            >
              {displayText.map((char, index) => (
                <motion.span
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </Typography.Title>

            <Typography.Text className=" !text-lg md:!text-xl !mb-8 max-w-2xl block leading-relaxed">
              Building intuitive, responsive web applications with modern technologies. I’m passionate about creating thoughtful interfaces that deliver seamless user experiences and meaningful real-world impact.
            </Typography.Text>

            <Flex
              gap="middle"
              className="justify-center md:!justify-start flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  shape="round"
                  type="primary"
                  onClick={() => {
                    const myProjectScroll =
                      document.getElementById("myProjects");
                    if (myProjectScroll) {
                      myProjectScroll.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View My Work
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  shape="round"
                  onClick={() => {
                    const contactScroll = document.getElementById("contact");
                    if (contactScroll) {
                      contactScroll.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Contact Me
                </Button>
              </motion.div>
            </Flex>

            {/* Social Icons */}
            <motion.div
              className="mt-8 flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="https://gitlab.com/birendra24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  size="large"
                  className="!cursor-pointer hover:!shadow-[0_0_15px_rgba(239,68,68,0.7)] !text-[#E53935] hover:!text-white !text-2xl hover:!bg-[#E53935]"
                >
                  <GithubOutlined />
                </Avatar>
              </a>

              <a
                href="https://www.linkedin.com/in/birendra-kshetri-2982a4189"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar
                  size="large"
                  className="!cursor-pointer hover:!shadow-[0_0_15px_rgba(239,68,68,0.7)] !text-[#E53935] hover:!text-white !text-2xl hover:!bg-[#E53935]"
                >
                  <LinkedinFilled />
                </Avatar>
              </a>
              <a href="mailto:kshetribirendra24@gmail.com">
                <Avatar
                  size="large"
                  className="!cursor-pointer hover:!shadow-[0_0_15px_rgba(239,68,68,0.7)] !text-[#E53935] hover:!text-white !text-2xl hover:!bg-[#E53935]"
                >
                  <IoMdMail />
                </Avatar>
              </a>
            </motion.div>
          </motion.div>
        </Flex>
    </div>
   
  )
}
export default index
