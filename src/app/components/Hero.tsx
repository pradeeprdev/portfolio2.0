import React from 'react'
import Image from 'next/image';
import HeroImage from '../../../public/Hero.png'

const Hero = () => {
  return (
    <div id='Home'>
      <div className='hidden md:block'>
        <div className='flex justify-between items-center pt-10 p-5'>
            <div className='w-100'>
                <p className='primary-color tracking-widest'>HELLO!</p>
                <p className='text-5xl font-bold primary-color mt-5'><span className='text-white'>I&lsquo;m </span>Pradeep</p>
                <p className='text-5xl font-bold primary-color'>Rawat</p>

                <p className='text-xl py-6'>A freelancer web developer</p>

                <div className='flex'>
                    <a href='#About'><div className='text-xs tracking-widest button primary-button text-black'>HIRE ME</div></a>
                    <a href='#Projects'><div className='text-xs tracking-widest button border border-gray-400 mx-1'>MY WORK</div></a>
                </div>
            </div>
            <div className='h-screen'>
                <Image src={HeroImage} alt="Hero Image" className='object-cover w-full h-full'/>
            </div>
        </div>
      <div/>
    </div>
    <div className='relative block md:hidden'>
        <div className='h-screen pt-10'>
          <Image src={HeroImage} alt="Hero Image" className='object-cover w-full h-full opacity-50'/>
        </div>
          <div className='absolute inset-0 flex flex-col justify-center items-center text-center'>
            <div className='pt-40'>
                <p className='primary-color tracking-widest'>HELLO!</p>
                <p className='text-5xl font-bold primary-color mt-5'><span className='text-white'>I&lsquo;m </span>Pradeep</p>
                <p className='text-5xl font-bold primary-color'>Rawat</p>

                <p className='text-xl py-6'>A freelancer web developer</p>

                <div className='flex justify-center'>
                    <div className='text-xs tracking-widest button primary-button text-black mx-1'>HIRE ME</div>
                    <div className='text-xs tracking-widest button border border-gray-400 mx-1'>MY WORK</div>
                </div>
            </div>
          </div>
    </div>
    </div>
  )
}

export default Hero