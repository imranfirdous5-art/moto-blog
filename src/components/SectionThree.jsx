import React from "react";
import client from "../assets/images/client.png"
import helmet from "../assets/images/helmet.png"

const SectionThree = () => {
    return(
        <>
            <div className="grid grid-rows-1 mt-2 lg:mt-20 bg-red-50">
                <div className="flex flex-col place-items-center p-4">
                    <h1 className="font-bold uppercase text-3xl">we are <span className="text-red-600">world wide</span></h1>
                    <p className="text-center lg:w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi quaerat veniam ullam possimus magni ut assumenda iusto impedit modi?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center p-5 gap-3">
                    <div className="flex flex-col items-center md:justify-center">
                        <div className="flex flex-row items-center gap-3">
                            <img src={client} alt="client" className="border-2 border-red-500 rounded-full w-20
                            " />
                            <p className="uppercase text-sm"><span className="text-red-600
                            font-bold text-2xl">john smith</span> <br /> solo traveller</p>    
                        </div>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic provident possimus temporibus blanditiis consequuntur repellat quia debitis ab? Accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis officiis dolor sed neque rem. Doloribus, animi blanditiis magni voluptas inventore ducimus totam aliquam obcaecati repellat cupiditate eum minus reprehenderit modi.</p>
                    </div>
                    <div><img src={helmet} alt="helmet" className="w-50 md:w-60 lg:w-70" /></div>
                </div>
            </div>
        </>
    )
}


export default SectionThree;