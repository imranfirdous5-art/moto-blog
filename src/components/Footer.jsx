import React from "react";
import journey from "../assets/images/journey.jpg"
import bigicon from "../assets/images/bigicon.png"
import { FaFacebookF, FaMobileAlt, FaInstagram  } from "react-icons/fa";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
 
const Footer = () => {
    return(
        <>
            <div className="mt-5 md:mt-5 lg:mt-3 relative">
                <img src={journey} alt="journey" className="min-h-60 md:min-h-96 lg:min-h-120" />
                <div className="bg-black/70 absolute bottom-0 left-0 w-full min-h-60 md:min-h-96 lg:min-h-120 flex flex-col text-center justify-center text-white lg:px-20 gap-4 p-3">
                    <h3 className="text-2xl md:text-3xl uppercase font-bold">start your journey</h3>
                    <p className="h-30 overflow-scroll lg:overflow-hidden">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis est quasi a aut minima? Velit sint neque repellat enim, vel sed fuga distinctio cupiditate modi dolorum et repellendus illo dolor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus tenetur, provident quisquam distinctio eveniet sunt quaerat atque. Distinctio, animi blanditiis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium corrupti mollitia dignissimos nulla. Error repellendus, voluptatem ad quisquam laborum quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsa sint commodi accusantium temporibus obcaecati eaque eum quas optio eius.</p>
                </div>
                <img src={bigicon} alt="bigicon" className="hidden md:block absolute w-12 lg:w-16 -bottom-6 lg:-bottom-8 left-1/2 -translate-x-1/2 animate-bounce" />
            </div>
            
            {/* address */}
            <div className="mt-5 md:mt-10">
                <ul className="flex flex-col md:flex-row md:justify-center items-center gap-2">
                    <li className="flex flex-row items-center gap-3 rounded px-6 py-2 md:py-4 bg-red-100 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <a href="#" className="text-3xl"><MdOutlineEmail /></a>
                        <div>
                            <span className="uppercase">email</span>
                            <p className="text-sm">demo@gmail.com</p>
                        </div>
                    </li>
                    <li className="flex flex-row items-center gap-3 bg-red-100 rounded px-9 py-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <a href="#"  className="text-3xl"><FaMobileAlt /></a>
                        <div>
                            <span className="uppercase">phone</span>
                            <p className="text-sm">+1234567890</p>
                            <p className="text-sm">+1234567890</p>
                        </div>
                    </li>
                    <li className="flex flex-row items-center gap-3 bg-red-100 rounded p-2 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <a href="#"  className="text-3xl"><LiaMapMarkedAltSolid /></a>
                        <div>
                            <span className="uppercase">address</span>
                            <p className="text-sm">123 main road new city <br /> 123456</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* mediaicons */}
            <div>
                <ul className="flex flex-row gap-5 items-center justify-center p-5">
                    <li className="border border-red-600 rounded-full p-2 cursor-pointer hover:scale-110 transition-all duration-300">
                        <a href="https://www.facebook.com/" target="blank" rel="noopener noreferrer"><FaFacebookF /></a>
                    </li>
                    <li className="border border-red-600 rounded-full p-2 cursor-pointer hover:scale-110 transition-all duration-300">
                        <a href="https://www.youtube.com/" target="blank" rel="noopener noreferrer"><TfiYoutube /></a>
                    </li>
                    <li className="border border-red-600 rounded-full p-2 cursor-pointer hover:scale-110 transition-all duration-300">
                        <a href="https://www.instagram.com/?hl=en" target="blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </li>
                </ul>
            </div>
            <div className="bg-red-500 flex justify-center p-5 capitalize text-white">
                <p>designed by imran firdous</p>
            </div>

        </>
    )
}

export default Footer;