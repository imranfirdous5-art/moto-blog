import React from "react";
import banner from "../assets/images/banner.png"
import redblock from "../assets/images/redblock.png"
import bike from "../assets/images/bike.png"
import logo from "../assets/images/logo.png"
import { FaFacebookF, FaInstagram, FaYoutube, } from "react-icons/fa";

const Home = () => {
    return(
        <>
            {/* header-section */}
            <div className="relative min-h-60 md:min-h-105 lg:min-h-screen">
                <div className="absolute top-0 left-0 z-50 flex flex-col md:flex-row items-center justify-between
                 w-full px-5 pt-10 border">
                    <div className="uppercase flex flex-col items-center relative text-white">
                        <img src={logo} alt="logo" className="w-8 h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 absolute md:bottom-6.5  bottom-6.5 left-12 lg:bottom-8 lg:left-17" />
                        <p className="font-bold text-[13px] leading-3">endless <span className="text-red-500">ride</span></p>
                        <p className="text-[10px]">tagline here</p>
                    </div>
                    <nav className="w-full mt-2 md:w-110 lg:w-170 md:mb-5 lg:mb-5">
                        <ul className="flex flex-wrap justify-center md:flex-row text-white uppercase text-[12px] md:text-[10px] lg:text-[13px] lg:gap-5">
                            <li className="border border-transparent px-3 py-1 hover:border-t-white hover:border-b-white rounded-2xl transition-all duration-300 cursor-pointer">home</li>
                            <li className="border border-transparent px-3 py-1 hover:border-t-white hover:border-b-white rounded-2xl transition-all duration-300 cursor-pointer">destinations</li>
                            <li className="border border-transparent px-3 py-1 hover:border-t-white hover:border-b-white rounded-2xl transition-all duration-300 cursor-pointer">rental</li>
                            <li className="border border-transparent px-3 py-1 hover:border-t-white hover:border-b-white rounded-2xl transition-all duration-300 cursor-pointer">motorcycles</li>
                            <li className="border border-transparent px-3 py-1 hover:border-t-white hover:border-b-white rounded-2xl transition-all duration-300 cursor-pointer">blog</li>
                            <li className="border border-transparent px-3 py-1 hover:border-t-white hover:border-b-white rounded-2xl transition-all duration-300 cursor-pointer">contact</li>
                        </ul>
                    </nav>

                    {/* media-icons */}
                    <div className="hidden md:flex flex-row gap-3 md:gap-1 lg:gap-4 md:mb-4 lg:mb-4 px-1">
                        <a href="https://www.facebook.com/" target="blank" rel="noopener noreferrer" className="text-white p-1 border border-transparent  hover:border-white hover:rounded-full transition-all duration-500"> <FaFacebookF /></a>
                        <a href="https://www.instagram.com/" target="blank" rel="noopener noreferrer" className="text-white p-1 border border-transparent  hover:border-white hover:rounded-full transition-all duration-500"> <FaInstagram /></a>
                        <a href="https://www.youtube.com/" target="blank" rel="noopener noreferrer" className="text-white p-1 border border-transparent  hover:border-white hover:rounded-full transition-all duration-500">
                        <FaYoutube /></a>
                    </div>
                </div>

                <div className="relative hidden md:block top-35 left-0 z-40 lg:text-3xl lg:flex lg:justify-center lg:text-center md:justify-center md:text-center md:text-2xl md:top-26 lg:top-35 text-white">
                    <h1>2500 tours in over 1000 destinations and 36 <br /> years of experience!</h1>
                </div>

                {/* banner */}
                <div className="absolute left-0 top-0 w-full">
                    <img src={banner} alt="banner" className="w-full h-55 md:h-105 lg:h-165 object-cover" />
                    <div className="absolute inset-0 bg-linear-to-b from-black/80 to-transparent"></div>
                </div>
                {/* red block */}
                <div className="absolute top-0 right-0 z-30">
                    <img src={redblock} alt="redblock" className="w-65 h-55 md:w-110 md:h-100 lg:w-190 lg:h-163" />
                </div>
                {/* bike */}
                <div className="absolute right-23 top-32 md:right-40 md:top-45 lg:right-70 lg:top-55 z-30">
                    <img src={bike} alt="redblock" className="w-full h-[100px] md:h-[200px] lg:h-[350px]" />
                </div>
            </div>

            

            

        </>
    )
}


export default Home;