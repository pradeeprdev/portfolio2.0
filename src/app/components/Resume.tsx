import React from 'react'
import { resumeItems } from '../Data/data'

const Resume = () => {
  return (
    <div className='p-5 pt-20' id='Resume'>
        <div className='flex justify-center'>
            <div className='relative'>
                <p className='text-6xl font-bold'>Resume</p>
                <p className='absolute -left-20 top-5 text-8xl opacity-15 font-bold'>Resume</p>
            </div>
            <div>
            </div>
        </div>
        <p className='mt-7 text-center'>About Eager to leverage technical skills and problem-solving abilities to contribute to innovative projects in a fast-paced environment.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {resumeItems.map((item, index) => (
                <div key={index} className="rounded-md bg-gray-100 bg-opacity-15 p-8">
                    <p className='text-2xl primary-color font-extrabold'>{item.duration}</p>
                    <p className='text-2xl mt-3'>{item.title}</p>
                    <p className='text-gray-300 text-xs tracking-widest mt-3 uppercase'>{item.organization}</p>
                    <p className='mt-4 text-gray-400'>{item.description}</p>
                </div>
            ))}
        </div>
        <div className='flex justify-center mt-20'>
            <div className='text-xs tracking-widest button primary-button text-black w-fit'>DOWNLOAD CV</div>
        </div>
    </div>
  )
}

export default Resume