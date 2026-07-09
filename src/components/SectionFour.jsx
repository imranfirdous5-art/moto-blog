import React from "react";
import worldmap from "../assets/images/worldmap.jpg"

const SectionFour = () => {
    return(
        <>
            <div className="relative flex justify-center">
                <img src={worldmap} alt="worldmap" className="w-full hidden lg:block" />
                
                <div className=" border absolute top-0 text-white flex flex-col justify-center items-center p-4 lg:w-4xl lg:mt-5">
                <h2 className="font-bold uppercase text-center text-2xl lg:text-3xl">guided motorcycle tours <span className="text-red-600">since 1880</span></h2>
                <p className="text-sm text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis labore delectus corrupti, soluta tempora fuga eligendi eius asperiores alias? Similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, ea!</p>
                </div>

                {/* <div className="absolute grid grid-cols-1 lg:grid-cols-2 text-white">
                    <div className="bg-red-500 border max-h-max p-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quia error quaerat. Culpa repellat expedita voluptates. Tempore maiores officiis fugiat dignissimos labore asperiores culpa nisi. Harum placeat eos quibusdam assumenda similique dolorum corrupti? Maxime dicta rerum eos at deserunt eum quia aut modi quo! Ullam explicabo eligendi deserunt illo beatae.</div>
                    <div className="border">two</div>
                </div> */}


            </div>
        
        </>
    )
}


export default SectionFour;