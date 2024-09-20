import React from 'react'
import { skillItems } from '../Data/data'

const Skills = () => {
  return (
    <div className='p-5 pt-60' id='Skills'>
        <div className='flex justify-center'>
            <div className='relative'>
                <p className='text-6xl font-bold'>My Skills</p>
                <p className='absolute -left-0 top-5 text-8xl opacity-15 font-bold'>Skills</p>
            </div>
            <div>
            </div>
        </div>
        <p className='mt-10 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa minus excepturi suscipit omnis quas quidem, corrupti et quasi sapiente similique.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            {skillItems.map((item, index) => (
                <div key={index} className="relative rounded-md bg-gray-100 bg-opacity-15 p-1">
                    <div className='absolute bottom-2 flex justify-between' style={{width: `${(item.rating*10)}%` }}>
                        <div>{item.name}</div>
                        <div>{item.rating*10}%</div>
                    </div>
                    <div className={`absolute top-0 left-0 rounded-md bg-[#ffbd39] p-1`} style={{width: `${(item.rating*10)}%` }}>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills