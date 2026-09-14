"use client"
import React from 'react'
import { GithubOutlined, LinkedinFilled, PhoneFilled } from "@ant-design/icons";
import {
  Form,
  notification,
} from "antd";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoLocation } from "react-icons/io5";
// import logo from "../../../assets/image/rct.png";
import Link from "next/link";
const Footer = () => {

    const [loading, setLoading] = useState(false);
  const [contactForm] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const router = useRouter();

  const onFormSubmitted = async (values: any) => {
   console.log(values,"send data")
    // setLoading(true);
    // try {
    //   const res = await fetch("/api/send-email", {
    //     method: "POST",
    //     cache: "no-cache",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });

    //   if (res.ok) {
    //     api.success({
    //       message: "Message Sent Successfully!",
    //       placement: "top",
    //     });
    //     contactForm.resetFields();
    //   } else {
    //     api.error({
    //       message: "Failed to Send Message!",
    //       placement: "top",
    //     });
    //   }
    // } catch (error: any) {
    //   api.error({
    //     message: error?.message || `Failed to Send Message!`,
    //     placement: "top",
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <div className='relative' id='contact'>
      Footer  
       {/* Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 overflow-hidden z-10">
          <div className="w-40 h-40 bg-red-50 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute -top-20 -right-20 w-40 h-40 overflow-hidden z-10">
          <div className="w-40 h-40 bg-red-50 rounded-full backdrop-blur-lg"></div>
        </div>


 {/* Footer Content */}
        <div className="relative z-0 bg-linear-to-br from-white to-red-100 rounded-tl-[80px] rounded-tr-[80px] rounded-br-[30px] rounded-bl-[30px] px-4 sm:px-6 lg:px-12">
          
            <div className='flex flex-col'>
              <h1
                className="text-center text-[#FA222A] font-bold p-4">
                Contact Me
              </h1>

 <div className="flex justify-between w-full flex-wrap gap-6 ">
                {/* Left Side Info */}
                <div className="w-full md:w-[48%]">
                  <div className=" flex justify-between flex-col gap-4 ">
                    <h1 className="mb-1 font-bold">
                      Drop me a Message
                    </h1>
                    <p className="text-lg font-medium">
                      I&apos;m a frontend developer specializing in modern web technologies and thoughtful user experiences. I enjoy turning ideas into fast, accessible, and visually engaging digital products.
Whether you’re looking to collaborate, have a project in mind, or simply want to connect, feel free to reach out.
                    </p>

                    <div className="flex flex-col gap-4">
                      <div className="flex cursor-pointer ">

                        <button
  type="button"
  className=" flex w-10 items-center justify-center rounded-full
             bg-transparent text-[#E53935] text-2xl
             transition
             hover:bg-[#E53935] hover:text-white
             hover:shadow-[0_0_15px_rgba(239,68,68,0.7)]"
  onClick={() => window.open("tel:+1234567890")}
>
  <PhoneFilled />
</button>                  
                        <a href="tel:+977-9868339080"
  className="text-base font-medium text-black transition group-hover:text-[#E53935] group-hover:underline"
>
  +977-9868339080
</a>
                      </div>


                      <div className="cursor-pointer">

                        <div className=" flex items-center gap-3">
  <button
    type="button"
    onClick={() =>
      window.open(
        "https://maps.app.goo.gl/WpCorC7Hg5sfc4fL7",
        "_blank"
      )
    }
    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full
               text-2xl text-[#E53935]
               transition
               group-hover:bg-[#E53935]
               group-hover:text-white
               group-hover:shadow-[0_0_15px_rgba(239,68,68,0.7)]"
  >
    <IoLocation />
  </button>

  <a
    href="https://maps.app.goo.gl/WpCorC7Hg5sfc4fL7"
    target="_blank"
    rel="noopener noreferrer"
    className="text-base font-medium text-black transition
               group-hover:text-[#E53935]
               group-hover:underline"
  >
    Kathmandu, Nepal
  </a>
</div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
              

                <div className="w-full md:w-[40%]">
  <div className="w-full rounded-lg bg-white p-6 text-center shadow-lg">
    <form onSubmit={onFormSubmitted} className="space-y-4">
      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          className="w-full rounded-lg border-0 bg-gray-100 px-4 py-3 text-base
                     outline-none transition
                     focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border-0 bg-gray-100 px-4 py-3 text-base
                     outline-none transition
                     focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          placeholder="Type your message here"
          required
          rows={5}
          className="w-full resize-none rounded-lg border-0 bg-gray-100 px-4 py-3 text-base
                     outline-none transition
                     focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white
                   transition hover:bg-blue-700
                   disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  </div>
</div>

              </div>

</div>
</div>
    </div>
    </>
  
  )
}
export default Footer