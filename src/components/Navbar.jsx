import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";

const Links = [
  {
    id: 1,
    url: "home",
  },
  {
    id: 2,
    url: "about",
  },
  {
    id: 3,
    url: "experience",
  },
  {
    id: 4,
    url: "portfolio",
  },
  {
    id: 5,

    url: "resume",
  },
  {
    id: 6,

    url: "contact",
  },
];
const Navbar = ({ ThemeHandler, theme }) => {
  let [Menu, setMenu] = useState(false);

  const MenuHandler = () => {
    setMenu((Menu = !Menu));
  };

  return (
    <div className="nav flex fixed  justify-between items-center w-full  h-10 px-4 z-50 bg-gradient-to-b from-[#A10DFF] dark:to-black to-white">
      <h1 className="dark:text-white text-black  font-['Lobster'] text-[1.5rem] z-50">
        PARSA
      </h1>

      <ul className="hidden md:flex md:justify-between">
        {theme === "light" ? (
          <li
            onClick={ThemeHandler}
            className=" cursor-pointer  flex  items-center"
          >
            <BsFillMoonFill className=" text-black" />
          </li>
        ) : (
          <li
            onClick={ThemeHandler}
            className=" cursor-pointer  flex   items-center"
          >
            <BsFillSunFill className=" text-white" />
          </li>
        )}

        {Links.map((items) => {
          return (
            <li
              className=" flex ml-8 capitalize cursor-pointer dark:text-white text-black hover:scale-110 duration-100"
              key={items.id}
            >
              <Link to={items.url} smooth duration={500} offset="500">
                {items.url}
              </Link>
            </li>
          );
        })}
      </ul>


      <div className="md:hidden" onClick={MenuHandler}>
 
        {Menu ? (
          <AiOutlineClose
            size={25}
            className="text-white duration-100 absolute top-2 right-2 z-50 md:hidden"
          />
        ) : (
          <AiOutlineMenu
            size={25}
            className="text-white md:hidden absolute top-2 right-2 z-50"
          />
        )}
      </div>
      {Menu && (
        
        <ul className="w-full flex fixed justify-center capitalize items-center z-20 h-full flex-col  left-[50%] translate-x-[-50%] top-0 bg-gradient-to-b from-[#A20EFF] to-[#070707] ">
                  {theme === "light" ? (
            <li
              onClick={ThemeHandler}
              className=" cursor-pointer  flex text-xl  items-center  absolute top-[10rem] md:hidden "
            >
              <BsFillMoonFill className=" text-black" />
            </li>
          ) : (
            <li
              onClick={ThemeHandler}
              className=" cursor-pointer  flex text-xl  items-center absolute top-[10rem] md:hidden"
            >
              <BsFillSunFill className=" text-white" />
            </li>
          )}

          {Links.map((items) => {
            return (
              <li
                className=" flex cursor-pointer mb-4 text-white"
                key={items.id}
              >
                <Link
                  to={items.url}
                  onClick={MenuHandler}
                  className="text-[1.5rem]"
                  smooth
                  duration={500}
                >
                  {items.url}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
