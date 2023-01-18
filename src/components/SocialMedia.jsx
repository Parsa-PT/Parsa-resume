import { AiFillLinkedin , AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Media = ()=>{
    useEffect(()=>{
        Aos.init({duration : 1500})
    })
    const Media = [
        {
            id : 1,
            icon : (<> GitHub <AiFillGithub className="text-white"  size={30} /> </>),
            name:'GitHub',
            url: 'https://github.com/Parsa-PT'
        },
        {
            id : 2,
            icon : (
                <>Linkdin <AiFillLinkedin className="text-white"  size={27}/></>
            ),
            name:'Linkdin',
            url: 'https://www.linkedin.com/in/parsa-shams-68b96422b/'
        },
        {
            id : 3,
            icon : (
                <> Telegram <BsTelegram className="text-white" size={25}/> </>
            ),
            name:'Telegram',
            url: 'https://t.me/PARSA_2332'
        },
    ]

    return(
        <div>
            <div>
                <div className=" flex-col fixed z-10  sm:top-[47%] hidden md:top-[40%] sm:flex  md:flex">
                    <ul data-aos='fade-right'>
                    {Media.map((item)=>{
                        return <li  key={item.id}  className=' anime w-40 h-14 flex justify-center items-center ml-[-100px]  hover:ml-[-10px] px-4 duration-200 mb-2 rounded-md bg-[#4B0079]'>
                            <a className="flex text-white items-center justify-between w-full" href={item.url}>{item.icon}</a>
                        </li>
                    })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Media;