"use client";
import React from 'react'
import { Card, Col, Flex, Row, Typography } from "antd";
import { FaCode } from "react-icons/fa";
const Services = () => {

    const servicesName = [
  {
    title: "Interactive Frontend Web Development",
    description:
      "Building high-quality, responsive user interfaces using React, Tailwind CSS, and Ant Design. From landing pages to complex SPAs, I focus on delivering smooth, accessible, and engaging user experiences tailored to your business needs.",
  },
  {
    title: "Custom Dashboard & Admin Panel Solutions",
    description:
      "Creating intuitive admin interfaces with charts, filters, tables, and role-based access control. Designed for performance and usability, powered by React and integrated with backend APIs to give you control over your data.",
  },
  {
    title: "Clean UI Code & Component Libraries",
    description:
      "Specializing in writing scalable, maintainable frontend code with reusable React components and custom design systems. I prioritize code quality, performance, and consistency across large-scale applications.",
  },
];

  return (
    <div className='mx-8'>
  <div className="flex flex-col bg-[#FAF9F6] py-10">
        <div
          className="flex-col lg:flex-row gap-12 relative z-10"
        >
          <h1 
            className="text-center text-[#FA222A] font-bold text-2xl mb-6"
          >
            What can I Do
          </h1>
          {/* <Row gutter={[48, 48]}>
            {servicesName.map((service, index: number) => (
              <Col
                lg={8}
                xs={24}
                md={12}
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card className="!border-none group w-full min-h-[250px] hover:!bg-[#A0A0A0]    !shadow-lg hover:!shadow-red-900 hover:!scale-105 !transition-all !duration-300 !ease-in-out !cursor-pointer">
                  <Flex
                    justify="center"
                    className="!transition-colors !text-red-300 group-hover:!text-red-400"
                  >
                    <FaCode size={60} />
                  </Flex>

                  <Flex justify="center" className="!text-center">
                    <Typography.Title
                      level={4}
                      style={{ margin: 0 }}
                      className="!mb-2 !font-bold !transition-colors group-hover:!text-white"
                    >
                      {service.title}
                    </Typography.Title>
                  </Flex>

                  <Typography.Paragraph
                    className="!text-sm !text-center !italic !transition-colors group-hover:!text-white"
                    style={{ fontSize: "18px" }}
                  >
                    {service.description}
                  </Typography.Paragraph>
                </Card>
              </Col>
            ))}
          </Row> */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
  {servicesName.map((service, index: number) => (
    <div
      key={index}
      className="group flex min-h-62.5 w-full cursor-pointer flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#A0A0A0] hover:shadow-red-900"
    >
      {/* Icon */}
      <div className="flex justify-center text-red-300 transition-colors group-hover:text-red-400">
        <FaCode size={60} />
      </div>

      {/* Title */}
      <h4 className="mb-2 text-center text-lg font-bold transition-colors group-hover:text-white">
        {service.title}
      </h4>

      {/* Description */}
      <p className="text-center text-[18px] italic transition-colors group-hover:text-white">
        {service.description}
      </p>
    </div>
  ))}
</div>
        </div>
    </div>
    </div>
  )
}
export default Services

