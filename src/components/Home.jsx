import parsapic from '../assets/PARSAIMGFINAL2.png'
import './homecss.css'
import { AiOutlineDoubleRight } from "react-icons/ai";
import Media from './SocialMedia';
import Scroll from './Scroll';
import {Link} from 'react-scroll'

const Home = ()=>{
    return (

        
  <div>
    
        <div  id='home'  className='  w-full h-full relative  top-0 py-[4.5rem] mb-11 px-2 md:py-20 md:mb-2 '>
       

            <div   className="  flex flex-col justify-center items-center w-full h-full md:flex md:flex-row md:justify-around md:items-center md:pt-[6rem]">
               <div  className='flex flex-col justify-center items-center md:items-start md:pl-20 lg:pl-48'>
                <h1 className='text-[#C5C5C5] text-[8vw] font-[Andika] md:text-[3rem]'>PARSA SHAMS</h1>
                <p className='text-[#C5C5C5] mb-4 text-[4vw] md:text-[1.5rem] font-[Andika] '>FrontEnd Developer</p>
                <Link to='about' smooth duration={500}  className='group btn-bg mb-4 text-white px-6 cursor-pointer rounded-md py-3 flex justify-center items-center '>
                    About
                    <AiOutlineDoubleRight  className='text-white ml-3 group-hover:rotate-90 duration-100'/>
                </Link>
               </div>
               <div className='w- flex justify-center '>
                    <img  className='mypic w-[30rem] md:w-[35rem] ' src={parsapic} alt="parsapic" />

               </div>


               <Scroll ScrollTitle='HOME' DIV='Div' TEXTCO='text-container'/>
            </div>
        </div>


        <div>
            <Media/>
        </div>

        </div>
    )
}

export default Home;
