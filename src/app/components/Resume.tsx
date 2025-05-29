"use client";

import React from 'react';
import { resumeItems } from '../Data/data';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Pradeep_Rawat_Resume.pdf';
    link.download = 'Pradeep_Rawat_Resume.pdf';
    link.click();
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="p-5 pt-20"
        id="Experience"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <m.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <p className="text-6xl font-bold">Experience</p>
            <p className="absolute -left-8 sm:-left-20 md:-left-28 top-5 text-7xl sm:text-7xl md:text-8xl opacity-15 font-bold">
              Experience
            </p>
          </div>
        </m.div>

        <m.p
          className="mt-7 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          I am passionate about applying my technical expertise and problem-solving abilities to drive innovation and deliver impactful solutions. I thrive in dynamic, fast-paced environments, where I can contribute to forward-thinking projects and continually refine my skills.
        </m.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {resumeItems.map((item, index) => (
            <m.div
              key={index}
              className="rounded-md bg-gray-100 bg-opacity-15 p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl primary-color font-extrabold">{item.duration}</p>
              <p className="text-2xl mt-3">{item.title}</p>
              <p className="text-gray-300 text-xs tracking-widest mt-3 uppercase">{item.organization}</p>
              <p className="mt-4 text-gray-400">{item.description}</p>
            </m.div>
          ))}
        </div>

        <m.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            onClick={handleDownload}
            className="text-xs tracking-widest button primary-button text-black w-fit cursor-pointer"
          >
            DOWNLOAD CV
          </div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default Resume;
