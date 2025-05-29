"use client";

import React from 'react'
import { projectItems } from '../Data/data'
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className='p-5 pt-60' id='Projects'>
        <div className='flex justify-center'>
            <div className='relative'>
                <p className='text-6xl font-bold'>Our Projects</p>
                <p className='absolute -left-3 top-5 text-8xl opacity-15 font-bold'>Projects</p>
            </div>
        </div>
        <p className='mt-7 text-center'>Developed projects in the field of growing technologies containing ML, Blockchain, Cloud Computing.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {projectItems.map((item, index) => (
              <motion.div
                key={index}
                className="group hover:cursor-pointer rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.15 }}
              >
                <div className="relative group-hover:bg-yellow-400 transition-colors duration-300 overflow-hidden h-52 w-full" >
                  <Image
                    className='object-cover hover:opacity-50 h-full w-full'
                    src={item.image}
                    alt='Project Image'
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xl">{item.name}</p>
                    <p className='text-xs tracking-widest mt-2'>{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Projects