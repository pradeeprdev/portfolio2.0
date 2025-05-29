"use client";

import React from 'react'
import { skillItems } from '../Data/data'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='p-5 pt-60' id='Skills'>
        <div className='flex justify-center'>
            <div className='relative'>
                <p className='text-6xl font-bold'>My Skills</p>
                <p className='absolute -left-0 top-5 text-8xl opacity-15 font-bold'>Skills</p>
            </div>
            <div></div>
        </div>
        <p className='mt-10 text-center'>I thrive on bringing innovative ideas to life through code. With a passion for building responsive web applications and a growing interest in blockchain and cloud technologies.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            {skillItems.map((item, index) => {
              const widthPercent = Number(item.rating) * 10;
              return (
                <div key={index} className="relative rounded-md bg-gray-100 bg-opacity-15 p-1">
                  <div className='absolute bottom-2 flex justify-between' style={{width: `${widthPercent}%` }}>
                      <div>{item.name}</div>
                      <div>{widthPercent}%</div>
                  </div>
                  <motion.div 
                    className="absolute top-0 left-0 rounded-md bg-[#ffbd39] p-1"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPercent}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Skills