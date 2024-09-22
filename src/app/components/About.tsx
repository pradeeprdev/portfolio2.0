import React from 'react'
import Image from 'next/image';
import HeroImage from '../../../public/Hero.png'
import { aboutItems, totalProjects } from '../Data/data';

const About = () => {
  return (
    <div className='flex pt-28 p-5' id='About'>
        <div className='hidden md:block' style={{maxWidth: '70rem'}}>
            <Image src={HeroImage} alt="Hero Image" className='object-cover w-full h-full'/>
        </div>
        <div className=''>
            <div className='relative text-center md:text-start'>
                <p className='text-6xl font-bold'>About</p>
                <p className='absolute top-5 text-8xl opacity-15 font-bold left-12 md:left-0'>About</p>
            </div>
            <p className='text-gray-400 py-5'>Eager to leverage technical skills and problem-solving abilities to contribute to innovative projects in a fast-paced environment.</p>
            <div className='flex py-5'>
                <ul className='font-bold space-y-4'>
                {aboutItems.map((item, index) => (
                    <li key={index}>{item.name}:</li>
                ))}
                </ul>
                <ul className='text-gray-400 pl-5 space-y-4'>
                {aboutItems.map((item, index) => (
                    <li key={index}>{item.description}</li>
                ))}
                </ul>
            </div>
            <p className='text-xl py-4'><span className='primary-color'>{totalProjects}</span> Project complete</p>
            <div className='text-xs tracking-widest button primary-button text-black w-fit'>DOWNLOAD CV</div>
        </div>
    </div>
  )
}

export default About