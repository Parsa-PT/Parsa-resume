import React from 'react'
import { AiFillLinkedin , AiFillGithub, AiOutlineMail, AiOutlineCopyright } from "react-icons/ai";
import {  BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col items-center bg-[#4b00797d] pt-[1rem] mt-[5rem] w-full sm:h-[8rem]'>
       <div className='w-[50%] sm:w-full flex flex-col  items-start sm:items-center sm:flex sm:flex-row sm:justify-around'>
       <div className='flex items-center'>
            <AiFillLinkedin className='text-white' size={30}/>
            <p className='text-[1rem] ml-1 text-white'>Parsa shams</p>
        </div>
        <div className='flex items-center'>
            <AiOutlineMail className='text-white' size={30}/>
            <p className='text-[1rem] ml-1 text-white'>mrparsahsams@gmail.com</p>
        </div>
        <div className='flex items-center'>
            <BsTelegram className='text-white' size={30}/>
            <p className='text-[1rem] text-white ml-1'>@PARSA_2332</p>
        </div>
        <div className='flex items-center'>
            <AiFillGithub className='text-white' size={30}/>
            <p className='text-[1rem] text-white ml-1'>Parsa-pt</p>
        </div>
       
       </div>


        <div className='w-full flex flex-col justify-center items-center py-4'>
        <hr className='w-60 rounded-md h-1 md:w-[25rem] bg-white' />
       <div className='pt-2 flex items-center text-white'>
         
         <AiOutlineCopyright className=' mr-2' size={20}/>
         <p className='text-lg mr-2'>2023</p>
         <h1 className='sm:text-[1.3rem]'>Made by Reglat</h1>
       </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
