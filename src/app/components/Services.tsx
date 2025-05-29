"use client";

import React from 'react';
import { servicieItems } from '../Data/data';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const Services = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="p-5 pt-60 mb-20"
        id="Services"
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
            <p className="text-6xl font-bold">Services</p>
            <p className="absolute -left-20 top-5 text-8xl opacity-15 font-bold">
              Services
            </p>
          </div>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {servicieItems.map((item, index) => (
            <m.div
              key={index}
              className="text-center rounded-md bg-gray-100 bg-opacity-15 p-8 hover:cursor-pointer hover:bg-[#ffbd39] hover:text-black transition duration-500 ease-in-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="mt-4">{item.title}</p>
              <div className="flex justify-center mt-3">
                <div className="w-8 primary-color" style={{ border: '1px solid #ffbd39' }}></div>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default Services;