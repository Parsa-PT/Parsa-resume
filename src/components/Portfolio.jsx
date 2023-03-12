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
      address : 'https://github.com/Parsa-PT/calculator',
      liveMode: 'https://calculatorapp.w3spaces.com/'
    },
    {
      id: 2,
      title : 'Qrcode',
      url : midpic,
      address : 'https://github.com/Parsa-PT/Qrcode',
      liveMode: 'https://qr-code-generator.w3spaces.com/'
    },
    {
      id: 3,
      title : 'Tech-finder',
      url : latspic,
      address : 'https://github.com/Parsa-PT/tech-finder',
      liveMode: 'https://pouyandev1.pythonanywhere.com'
    },
    {
      id: 4,
      title : 'Visit card',
      url : imanipic,
      address : 'https://github.com/Parsa-PT/imanishop.github',
      liveMode: 'https://stirring-daffodil-6edb36.netlify.app/'
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
                  <div className='lg:flex lg:gap-4 px-3'>
                      <a target={'_blank'} rel="noreferrer" className='btn-bg w-[10rem] mb-3 text-white px-4 py-2 rounded-md flex  justify-center' href={item.address}>GitHub </a>
                      <a target={'_blank'} rel="noreferrer" className='btn-bg w-[10rem] mb-3 text-white px-4 py-2 rounded-md flex  justify-center' href={item.liveMode}>Live </a>
                  </div>
                
              </div>
            )
          })}
          
           <div className='w-full overflow-hidden rounded-lg  gap-4 flex flex-col items-center bg-[#2d0c658f]'>
          <video src={Rex}   autoPlay controls></video>
          <p className='text-white'>Rex-shop</p>
          <p className='text-white mb-1'>React & Redux & Api</p>
            <p className='text-white'></p>
                  <div className='lg:flex lg:gap-4 px-3'>
                    <a target={'_blank'} rel="noreferrer" href='https://github.com/Parsa-PT/Rex-shop-react-redux' className='btn-bg w-[10rem] mb-4 text-white px-4 py-2 rounded-md flex cursor-pointer  justify-center' >GitHub </a>
                  </div>
          </div>

        
      </div>

      <Scroll ScrollTitle='Portfolio' DIV='Div-5' TEXTCO='text-container-5'/>
    </div>
  )
}

export default Portfolio
