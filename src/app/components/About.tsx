'use client';

import React from 'react';
import Image from 'next/image';
import HeroImage from '../../../public/Hero.png';
import { aboutItems, totalProjects } from '../Data/data';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Pradeep_Rawat_Resume.pdf';
    link.download = 'Pradeep_Rawat_Resume.pdf';
    link.click();
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="flex pt-28 p-5"
        id="About"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <m.div
          className="hidden md:block"
          style={{ width: '30rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={HeroImage} alt="Hero Image" className="object-cover w-full h-full" priority placeholder="blur" />
        </m.div>

        <m.div
          className=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative text-center md:text-start">
            <p className="text-6xl font-bold">About</p>
            <p className="absolute top-5 text-8xl opacity-15 font-bold left-12 md:left-0">About</p>
          </div>

          <p className="text-gray-400 py-5">
            Eager to leverage technical skills and problem-solving abilities to contribute to innovative projects in a fast-paced environment.
          </p>

          <div className="flex py-5">
            <ul className="font-bold space-y-4">
              {aboutItems.map((item, index) => (
                <li key={index}>{item.name}:</li>
              ))}
            </ul>
            <ul className="text-gray-400 pl-5 space-y-4">
              {aboutItems.map((item, index) => (
                <li key={index}>{item.description}</li>
              ))}
            </ul>
          </div>

          <p className="text-xl py-4">
            <span className="primary-color">{totalProjects}</span> Project complete
          </p>

          <div onClick={handleDownload} className="text-xs tracking-widest button primary-button text-black w-fit cursor-pointer">
            DOWNLOAD CV
          </div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default About;