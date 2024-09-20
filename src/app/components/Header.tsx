"use client"    

import React, { useState } from 'react'
import { navItems } from '../Data/data'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
  return (
        <div className='fixed w-screen z-10'  style={{ maxWidth: '70rem' }}>
        <div className='flex justify-between bg-black items-center py-3 p-5'>
            <div className='font-extrabold text-2xl hover:cursor-pointer '>
                Pradeep
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-6'>
                    {navItems.map((item, index) => (
                        <li key={index} className='hover:cursor-pointer hover:text-[#ffbd39] transition duration-200 ease-in-out'>
                            <a href={`#${item.name}`}>{item.name}</a>    
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            <div 
                className='flex md:hidden text-secondary items-center cursor-pointer'
                onClick={(e)=>setMobileMenu(!mobileMenu)}
            >
                <MenuIcon />  
                Menu
            </div>
        </div>
        { mobileMenu &&  
        <div className='visible md:hidden p-5 bg-black bg-opacity-75'>
            <ul className='block  gap-6'>
                {navItems.map((item, index) => (
                    <li key={index} className='hover:cursor-pointer hover:text-[#ffbd39] transition duration-200 ease-in-out'>
                        <a onClick={()=>setMobileMenu(!mobileMenu)} href={`#${item.name}`}>{item.name}</a>    
                    </li>
                ))}
            </ul>
        </div>
        }
        </div>
  )
}

export default Header







