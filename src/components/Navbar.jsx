import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import {Link} from 'react-scroll'


const Links = [
    {
        id : 1,
        url : 'home'
    },
    {
        id : 2,
        url : 'about'
    },
    {
        id : 3,
        url : 'experience'
    },
    {
        id : 4,
        url : 'portfolio'
    },
    {
        id : 5,

        url : 'contact'
    },
]
const Navbar = ()=>{
    let [Menu , setMenu] = useState(false)

    const MenuHandler = ()=>{
        setMenu(Menu = !Menu)
    }


    return(
        <div  className="nav flex fixed justify-between items-center w-full h-10 px-4 z-50 bg-gradient-to-b from-[#A10DFF] to-black">
            <h1 className="text-white font-['Lobster'] text-[1.5rem] z-50">PARSA</h1>
            
            <ul className="hidden md:flex md:justify-between">
                {Links.map((items)=>{
                    return (
                        <li className=" flex ml-8 capitalize cursor-pointer text-white hover:scale-110 duration-100" key={items.id}>
                          <Link to={items.url}  smooth duration={500} offset='500'>{items.url}</Link>
                        </li>
                    )
                })}
            </ul>

            <div className='md:hidden' onClick={MenuHandler} >
                {Menu ? 
                <AiOutlineClose size={25} className='text-white  duration-100 absolute top-2 right-2 z-50 md:hidden' />
                   : <AiOutlineMenu size={25} className='text-white md:hidden absolute top-2 right-2 z-50' /> }
            </div>
            {Menu && (
            <ul className="w-full flex fixed justify-center capitalize items-center z-20 h-full flex-col  left-[50%] translate-x-[-50%] top-0 bg-gradient-to-b from-[#A20EFF] to-[#070707] ">
                {Links.map((items)=>{
                    return (
                        <li className=" flex cursor-pointer mb-4 text-white" key={items.id}>
                            <Link to={items.url} onClick={MenuHandler} className='text-[1.5rem]' smooth duration={500}>{items.url}</Link>
                        </li>
                    )
                })}
            </ul>
            )}
        </div>
    )
}

export default Navbar;