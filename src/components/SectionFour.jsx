import React from "react";
import worldmap from "../assets/images/worldmap.jpg"

const SectionFour = () => {
    return(
        <>
            <div className="relative flex justify-center">
                <img src={worldmap} alt="worldmap" className="w-full hidden md:block lg:block" />
                
                <div className=" border absolute top-0 text-black md:text-white lg:text-white flex flex-col justify-center items-center p-4 lg:w-4xl lg:mt-5">
                <h2 className="font-bold uppercase text-center text-2xl lg:text-3xl">guided motorcycle tours <span className="text-red-600">since 1880</span></h2>
                <p className="text-sm text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis labore delectus corrupti, soluta tempora fuga eligendi eius asperiores alias? Similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ea!</p>
                </div>

                <div className="absolute top-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 text-black md:text-white lg:text-white lg:w-full">
                    <div className="border md:bg-red-500/50">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex flex-row gap-10 mb-3">
                            <p className="text-sm uppercase text-center font-bold"><span className="text-2xl">1000</span>km <br /> 2days</p>
                            <p className="text-sm uppercase text-center font-bold"><span className="text-3xl">3000</span>km <br /> 7days</p></div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quia error quaerat. Culpa repellat expedita voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eum?</p>
                        </div>
                    </div>

                    <div className="border">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex flex-row gap-10 mb-3">
                            <p className="text-sm uppercase text-center font-bold"><span className="text-3xl">50+</span> <br />countries</p>
                            <p className="text-sm uppercase text-center font-bold"><span className="font-bold text-2xl">1000</span>km <br /> 2days</p></div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quia error quaerat. Culpa repellat expedita voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, eum?</p>
                        </div>
                    </div>
                    
                    {/* <div className="border">two</div> */}
                </div>


            </div>
        
        </>
    )
}


export default SectionFour;