import React from 'react'
import fristpic from '../assets/calculator.png'
import midpic from '../assets/qrcode.png'
import latspic from '../assets/techfinder.png'
import imanipic from '../assets/visitcard.png'
import Scroll from './Scroll'

const Portfolio = () => {

  const project = [
    {
      id: 1,
      title : 'Calculator',
      url : fristpic,
      address : 'https://github.com/Parsa-PT/calculator'
    },
    {
      id: 2,
      title : 'Qrcode',
      url : midpic,
      address : 'https://github.com/Parsa-PT/Qrcode'
    },
    {
      id: 3,
      title : 'Tech-finder',
      url : latspic,
      address : 'https://github.com/Parsa-PT/tech-finder'
    },
    {
      id: 4,
      title : 'Visit card',
      url : imanipic,
      address : 'https://github.com/Parsa-PT/imanishop.github'
    },
  ]
  return (
    <div id='portfolio' className=' relative'>
      <div className='grid grid-cols-1 px-20 py-20 gap-10 sm:grid-cols-2 md:grid-cols-3'>
        

          {project.map((item)=>{
            return(
              <div className='w-full overflow-hidden rounded-lg  gap-4 flex flex-col items-center bg-[#2d0c658f]'>
                  <img className=' hover:scale-105 duration-150' src={item.url} alt="mypic" />
                  <p className='text-white'>{item.title}</p>
                  <a target={'_blank'} rel="noreferrer" className='btn-bg w-[10rem] mb-3 text-white px-4 py-2 rounded-md flex  justify-center' href={item.address}>GitHub </a>
              </div>
            )
          })}

        
      </div>

      <Scroll ScrollTitle='Portfolio' DIV='Div-5' TEXTCO='text-container-5'/>
    </div>
  )
}

export default Portfolio
