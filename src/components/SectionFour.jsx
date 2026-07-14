import React from "react";
import worldmap from "../assets/images/worldmap.jpg"
import bike3 from "../assets/images/bike3.png"

const SectionFour = () => {
    return(
        <>
            <div className="relative flex justify-center mt-5 lg:mt-0 pb-215 md:pb-0">
                <img src={worldmap} alt="worldmap" className="w-full hidden md:block lg:block" />
                
                <div className="absolute top-0 text-black md:text-white lg:text-white flex flex-col justify-center items-center p-4 lg:w-4xl lg:mt-20 md:mt-5 bg-red-50 md:bg-transparent lg:bg-transparent">
                <h2 className="font-bold uppercase text-center text-2xl lg:text-3xl">guided motorcycle tours <span className="text-red-600">since 1880</span></h2>
                <p className="text-sm text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis labore delectus corrupti, soluta tempora fuga eligendi eius asperiores alias? Similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ea!</p>
                </div>

                <div className="absolute top-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 text-black md:text-white lg:text-white lg:w-full md:-mt-5 bg-red-50 md:bg-transparent lg:bg-transparent lg:mt-20">
                    <div className="py-2 px-5 lg:py-25 lg:px-20 lg:bg-red-500/50">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex flex-row gap-15 mb-3">
                            <p className="text-sm uppercase text-center font-bold"><span className="text-2xl">1000</span>km <br /> 2days</p>
                            <p className="text-sm uppercase text-center font-bold"><span className="text-3xl">3000</span>km <br /> 7days</p></div>
                            <p className="md:h-45 md:overflow-scroll lg:overflow-hidden lg:h-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quia error quaerat. Culpa repellat expedita voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo maiores atque id unde magni omnis sunt velit pariatur error. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt harum doloribus placeat aperiam facilis aliquam quo reprehenderit excepturi commodi blanditiis.</p>
                        </div>
                    </div>

                    <div className="py-2 px-5 lg:py-25 lg:px-20">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex flex-row gap-15 mb-3">
                            <p className="text-sm uppercase text-center font-bold"><span className="text-3xl">50+</span> <br />countries</p>
                            <p className="text-sm uppercase text-center font-bold"><span className="font-bold text-2xl">1000</span>km <br /> 2days</p></div>
                            <p className="md:h-45 md:overflow-scroll lg:overflow-hidden lg:h-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quia error quaerat. Culpa repellat expedita voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo maiores atque id unde magni omnis sunt velit pariatur error. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt harum doloribus placeat aperiam facilis aliquam quo reprehenderit excepturi commodi blanditiis.</p>
                        </div>
                    </div>
                    
                    <div className="absolute lg:-bottom-9 lg:left-120 hidden lg:block"><img src={bike3} alt="bike3" className="w-75" /></div>
                </div>


            </div>
        
        </>
    )
}


export default SectionFour;