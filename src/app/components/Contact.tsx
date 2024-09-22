"use client"; 

import React, { useState } from 'react'
import Image from 'next/image'
import { contactItems } from '../Data/data'
import HeroImage from '../../../public/Hero.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='pt-56 p-5' id='Contact'>
        <div className='flex justify-center'>
            <div className='relative'>
                <p className='text-6xl font-bold'>Contact Me</p>
                <p className='absolute -left-3 top-5 text-8xl opacity-15 font-bold'>Contact</p>
            </div>
        </div>
        <p className='mt-10 text-center text-gray-400'>Let&apos;s Connect and Build Something Amazing Together!</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {contactItems.map((item, index) => (
                <div key={index} className='text-center'>
                  <div className='flex justify-center'>
                    <div className='h-24 w-24 primary-color rounded-full bg-secondary flex justify-center items-center'>
                      <item.icon 
                      fontSize="large"
                      />
                    </div>
                  </div>
                  <p className='mt-8 uppercase'>{item.name}</p>
                  <p className='mt-8'>{item.description}</p>
                </div>
            ))}
        </div>
        <div className='mt-36'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='bg-secondary'>
              <Image src={HeroImage} alt="Hero Image" className='object-cover w-full h-full'/>
            </div>
            <div className='bg-white text-black p-10'>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    placeholder='Your Name'
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder='Your Email'
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    placeholder='Subject'
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder='Message'
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='message-input'
                  />
                </div>
                <div className='text-xs tracking-widest button primary-button text-black w-fit mt-5'>Send Message</div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact