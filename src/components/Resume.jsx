import React from "react";
import "./resume.css";
import resumePic from "../assets/resume.jpg";
import Scroll from "./Scroll";

const Resume = ({ theme }) => {


  return (
    <div className="relative" id="resume">
      <div className="main mb-10 ">
        {theme === "light" ? (
          <div className="lightBox">
            <a
              className=" w-full h-full absolute flex justify-center items-center"
              href='/resume.jpg'
            >
              <img className=" w-[14.6rem] absolute z-10" src={resumePic} alt="" />
            </a>
          </div>
        ) : (
          <div className="darkBox">
            <a
              className=" w-full h-full absolute flex justify-center items-center"
              href='/resume.jpg'
            >
              <img className=" w-[14.6rem] absolute z-10" src={resumePic} alt="" />
            </a>
          </div>
        )}
      </div>

      <Scroll ScrollTitle='Resume' DIV='Div-6' TEXTCO='text-container-6'/>
    </div>
  );
};

export default Resume;
