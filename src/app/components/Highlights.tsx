"use client";

import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import CountUp from 'react-countup'
import highlightBg from '../../../public/highlight.avif'
import { highlightItems } from '../Data/data'

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i:any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const Highlights = () => {
  return (
    <div className="mt-32">
      <div className="block md:hidden mb-32 p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          {highlightItems.map((item, index) => (
            <MotionDiv
              key={index}
              className="bg-secondary text-center p-8 rounded-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={itemVariants}
            >
              <p className="font-bold primary-color text-4xl">
                <CountUp start={0} end={item.count} duration={2} enableScrollSpy />
                {item.isPlus && '+'}
              </p>
              <p className="mt-3">{item.name}</p>
            </MotionDiv>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="h-96">
          <Image
            className="object-cover w-full h-full fade-image backdrop:blur-sm opacity-25"
            src={highlightBg}
            alt="Background"
          />
          <div className="flex justify-center text-center">
            <div className="p-5 absolute -top-5 md:-top-36" style={{ maxWidth: '70rem' }}>
              <div className="hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
                  {highlightItems.map((item, index) => (
                    <MotionDiv
                      key={index}
                      className="bg-secondary text-center p-8 rounded-md"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index}
                      variants={itemVariants}
                    >
                      <p className="font-bold primary-color text-4xl">
                        <CountUp start={0} end={item.count} duration={2} enableScrollSpy />
                        {item.isPlus && '+'}
                      </p>
                      <p className="mt-3">{item.name}</p>
                    </MotionDiv>
                  ))}
                </div>
              </div>
              <p className="font-bold text-4xl mt-20">
                I am <span className="primary-color">Available</span> for freelancing
              </p>
              <p className="mt-5 text-gray-500">
                Ready to turn your ideas into reality? Whether it&apos;s building dynamic web
                applications or exploring blockchain and cloud solutions, I bring dedication and
                expertise to every project. Let&apos;s collaborate and create something impactful!
              </p>
              <div className="flex justify-center mt-5">
                <a href="#About">
                  <div className="text-xs tracking-widest button primary-button text-black w-fit">
                    HIRE ME
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights