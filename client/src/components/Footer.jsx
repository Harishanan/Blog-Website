import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30
        text-gray-500'>
            <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b 
            border-gray-500/30 text-gray-500'>

                <div>
                    <img src={assets.logo} alt='logo' className='w-32 sm:w-44'/>
                    <p className='max-w-[410px] mt-6'>Pathway – A Dev Log is a personal web application to document achievements, 
                        coding progress, and learning milestones, helping track growth while practicing and showcasing MERN stack development 
                        skills.
                    </p>
                </div>

            </div>
        </div>

        <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
            Copyright 2025 &copy; Pathway A Dev Log (Harishanan Thevarajah) - All rights reserved.     
        </p>
    </div>
  )
}

export default Footer