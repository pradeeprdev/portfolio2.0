import React from 'react'
import { servicieItems } from '../Data/data'

const Services = () => {
  return (
    <div className='p-5 pt-60 mb-20' id='Services'>
        <div className='flex justify-center'>
            <div className='relative'>
                <p className='text-6xl font-bold'>Services</p>
                <p className='absolute -left-20 top-5 text-8xl opacity-15 font-bold'>Services</p>
            </div>
            <div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {servicieItems.map((item, index) => (
                <div key={index} className="text-center rounded-md bg-gray-100 bg-opacity-15 p-8 hover:cursor-pointer hover:bg-[#ffbd39] hover:text-black transition duration-500 ease-in-out">
                    <p className='mt-4'>{item.title}</p>
                    <div className='flex justify-center mt-3'>
                        <div className='w-8 primary-color' style={{border: '1px solid #ffbd39'}}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services