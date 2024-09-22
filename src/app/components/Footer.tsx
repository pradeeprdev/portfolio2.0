import React from 'react'
import { footerItems } from '../Data/data'

const Footer = () => {
  return (
    <div>
        <div id='Footer' className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-36 p-5">
            {footerItems.map((item, index) => (
                <div key={index}>
                    <p className='font-bold text-2xl mb-19'>{item.name}</p>
                    {item.subItems && item.subItems.length > 0 &&
                    <div>   
                    {item.subItems.map((subItem, subIndex) => (
                        <a key={subIndex} href={`#${subItem.name}`}>
                        <div className='text-secondary flex mt-4'>
                            {subItem.icon && 
                            <div className='mr-2'>
                                <subItem.icon 
                                    fontSize="small"
                                />
                            </div>}
                            <p className='leading-7'>{subItem.name}</p>
                        </div>
                       </a>
                    ))}
                    </div>}
                    {item.socialProfiles && item.socialProfiles.length > 0 && 
                    <div className='flex mt-14'>
                        {item.socialProfiles.map((profile, subIndex) => (
                            <a key={subIndex} href={profile.url} target='_blank'>
                                <div className={`text-secondary bg-secondary rounded-full p-3 ${subIndex != 0 && 'ml-4'}`}>
                                    <profile.icon 
                                        fontSize="medium"
                                    />
                                </div>
                            </a> 
                        ))}
                    </div>}
                </div>
            ))}
        </div>
        <p className='text-center text-secondary mt-32 mb-36'>Copyright ©2024 All rights reserved | Pradeep Rawat</p>
    </div>
  )
}

export default Footer