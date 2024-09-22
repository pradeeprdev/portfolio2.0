import React from 'react'
import Image from 'next/image';
import highlightBg from '../../../public/highlight.avif'
import { highlightItems } from '../Data/data';

const Highlights = () => {
  return (
    <div className='mt-32'>
      <div className='block md:hidden mb-32 p-5'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-20'>
          {highlightItems.map((item, index) => (
            <div key={index} className='bg-secondary text-center p-8 rounded-md'>
              <p className='font-bold primary-color text-4xl'>{item.count}</p>
              <p className='mt-3'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    <div className='relative'>
      <div className='h-96'>
        <Image 
          className='object-cover w-full h-full fade-image backdrop:blur-sm opacity-25'
          src={highlightBg}
          alt="Background"
        />
        <div className='flex justify-center text-center'>
          <div className='p-5 absolute -top-5 md:-top-36' style={{ maxWidth: '70rem' }}>
            <div className='hidden md:block'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-20'>
                {highlightItems.map((item, index) => (
                  <div key={index} className='bg-secondary text-center p-8 rounded-md'>
                    <p className='font-bold primary-color text-4xl'>{item.count}</p>
                    <p className='mt-3'>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className='font-bold text-4xl mt-20'>I am <span className='primary-color'>Available</span> for freelancing</p>
            <p className='mt-5 text-gray-500'>Ready to turn your ideas into reality? Whether it&apos;s building dynamic web applications or exploring blockchain and cloud solutions, I bring dedication and expertise to every project. Let&apos;s collaborate and create something impactful!</p>
            <div className='flex justify-center mt-5'>
              <a href='#About'><div className='text-xs tracking-widest button primary-button text-black w-fit'>HIRE ME</div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Highlights