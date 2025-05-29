'use client';

import React from 'react';
import Image from 'next/image';
import HeroImage from '../../../public/Hero.png';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div id="Home">
        <div className="hidden md:block">
          <div className="flex justify-between items-center pt-10 p-5">
            <m.div
              className="w-100"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="primary-color tracking-widest">HELLO!</p>
              <p className="text-5xl font-bold primary-color mt-5">
                <span className="text-white">I&rsquo;m </span>Pradeep
              </p>
              <p className="text-5xl font-bold primary-color">Rawat</p>
              <p className="text-xl py-6">A freelancer web developer</p>
              <div className="flex">
                <a href="#About">
                  <div className="text-xs tracking-widest button primary-button text-black">HIRE ME</div>
                </a>
                <a href="#Projects">
                  <div className="text-xs tracking-widest button border border-gray-400 mx-1">MY WORK</div>
                </a>
              </div>
            </m.div>
            <m.div
              className="h-screen"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Image src={HeroImage} alt="Hero Image" className="object-cover w-full h-full" priority placeholder="blur" />
            </m.div>
          </div>
        </div>

        <div className="relative block md:hidden">
          <m.div
            className="h-screen pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src={HeroImage} alt="Hero Image" className="object-cover w-full h-full opacity-50" priority placeholder="blur" />
          </m.div>
          <m.div
            className="absolute inset-0 flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="pt-40">
              <p className="primary-color tracking-widest">HELLO!</p>
              <p className="text-5xl font-bold primary-color mt-5">
                <span className="text-white">I&rsquo;m </span>Pradeep
              </p>
              <p className="text-5xl font-bold primary-color">Rawat</p>
              <p className="text-xl py-6">A freelancer web developer</p>
              <div className="flex justify-center">
                <div className="text-xs tracking-widest button primary-button text-black mx-1">HIRE ME</div>
                <div className="text-xs tracking-widest button border border-gray-400 mx-1">MY WORK</div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Hero;
