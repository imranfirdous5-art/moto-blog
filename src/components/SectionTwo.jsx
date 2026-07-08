import React from "react";
import rider1 from "../assets/images/rider1.png"
import rider2 from "../assets/images/rider2.png"
import rider3 from "../assets/images/rider3.png"
import bike2 from "../assets/images/bike2.png"

const SectionTwo = () => {
    return(
        <>
            <div className="grid grid-rows-2 md:grid-cols-2 justify-items-center mt-10 lg:mt-20 relative">
                <div className="w-full bg-red-700 text-white flex flex-col justify-center items-center">
                    <h3 className="text-3xl uppercase font-bold">we are world wide</h3>
                    <p className="text-sm mt-5 h-60 overflow-scroll lg:overflow-visible px-10 lg:px-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, in adipisci sequi in adipisci sequi adipisci sequi in adipisci sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi, illo praesentium omnis soluta quibusdam dolorem quis odio nihil veniam dolorum saepe cumque aut, minima quos repellat fugiat tenetur distinctio eos rem ad iure accusamus autem modi. Necessitatibus tempore dicta nemo, sed magnam dolores? Eius inventore earum quo dicta accusantium? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum excepturi impedit consequuntur facilis repellat ipsam ab odio adipisci minus alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nulla nisi. Itaque quis iste quod assumenda omnis veniam earum illo iusto, atque, hic, magnam eligendi delectus obcaecati recusandae tempore culpa.
                    </p>
                </div>

                <div className="absolute bottom-85 hidden lg:block"><img src={bike2} alt="bike2" className="w-48 animate-float" /></div>

                <div className="w-full flex flex-col items-center py-5 gap-5">
                    <div className="flex flex-row w-90 p-2 rounded-2xl bg-red-50 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img src={rider1} alt="rider1" className="w-20 border-red-500 border-2 rounded-full" />
                        <div className="ml-5">
                        <p className="uppercase flex flex-row items-center gap-3 text-sm"> <span className="text-red-600 font-bold text-2xl">alex doe</span> main rider</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi</p>
                        </div>
                    </div>
                    <div className="flex flex-row w-90 p-2 rounded-2xl bg-red-50 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <div>
                        <p className="uppercase flex flex-row items-center gap-3 text-sm"> <span className="text-red-600 font-bold text-2xl">steve doe</span> main rider</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi</p>
                        </div>
                        <img src={rider2} alt="rider2" className="w-20 border-red-500 border-2 rounded-full" />
                    </div>
                    <div className="flex flex-row w-90 p-2 rounded-2xl bg-red-50 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <img src={rider3} alt="rider3" className="w-20 border-red-500 border-2 rounded-full" />
                        <div className="ml-5">
                        <p className="uppercase flex flex-row items-center gap-3 text-sm"> <span className="text-red-600 font-bold text-2xl">bill doe</span> main rider</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}


export default SectionTwo;