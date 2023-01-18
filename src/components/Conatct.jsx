import React from 'react'
import Scroll from './Scroll'

const Conatct = () => {
  return (
    <div id='contact' className=' relative'>
      <div className='flex justify-center py-20'>
        <form action="https://getform.io/f/fd3487da-6185-43c3-af07-924968026585" method='POST' className='  md:w-1/2 flex flex-col '>
            <input type="text"  name='name' placeholder='Name' className='text-white w-[16rem] sm:w-full p-2 border-2 rounded-md my-4 focus:outline-none border-[#7D09E3] bg-transparent'/>
            <input type="text"  name='gmail' placeholder='Email' className='text-white w-[16rem] sm:w-full p-2 border-2 border-[#7D09E3] rounded-md focus:outline-none   bg-transparent'/>
            <textarea placeholder='Message' name="message" id="" cols="30" rows="10 " className='text-white w-[16rem] sm:w-full my-4 p-2 border-2 border-[#7D09E3] rounded-md focus:outline-none   bg-transparent'></textarea>
                <button  className='btn-bg  text-white px-4 py-2 rounded-md '>Send message</button>
        </form>
      </div>
      <Scroll ScrollTitle='Contact' DIV='Div-4' TEXTCO='text-container-4'/>
    </div>
  )
}

export default Conatct
