import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './scrol.css'

const Scroll = (props) => {

    useEffect(()=>{
        Aos.init({duration : 1500})
    },[])
  return (
    <div>
      <div data-aos='fade-left' className={props.DIV}>
        <div  className={props.TEXTCO}>
            <h1  className='text'>{props.ScrollTitle}</h1>
        </div>
      </div>
    </div>
  )
}

export default Scroll;
