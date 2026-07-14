import React from "react";
import pic1 from "../assets/images/pic1.jpg"
import pic2 from "../assets/images/pic2.jpg"
import pic3 from "../assets/images/pic3.jpg"
import smallangle from "../assets/images/smallangle.png"

const SectionFive = () => {
    return(
        <>
            <div className="grid grid-cols-1 mt-10 lg:mt-10">
                <div className="flex flex-col text-center p-3">
                    <h3 className="font-bold text-2xl uppercase">travel blog</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur aut ex dignissimos dolor soluta reiciendis omnis non fugit mollitia, aspernatur quasi voluptatem, similique reprehenderit corporis, voluptatibus blanditiis consectetur iure doloremque.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:justify-items-center">
                    <div className="p-3 relative text-white">
                        <img src={pic1} alt="pic1" className="w-full md:w-96 object-contain rounded-2xl" />
                        <div className="w-32 absolute bottom-1 left-1">
                            <img src={smallangle} alt="smallangle" />
                            <p className="uppercase absolute bottom-8 left-3 text-[12px] w-full"><span className="text-sm font-bold">south east asia</span> <br /> 20 august 2026</p>
                        </div>
                    </div>
                    <div className="p-3 relative text-white">
                        <img src={pic1} alt="pic1" className="w-full md:w-96 object-contain rounded-2xl" />
                        <div className="w-32 absolute bottom-1 left-1">
                            <img src={smallangle} alt="smallangle" />
                            <p className="uppercase absolute bottom-8 left-3 text-[12px] w-full"><span className="text-sm font-bold">south east asia</span> <br /> 20 august 2026</p>
                        </div>
                    </div>
                    <div className="p-3 relative text-white">
                        <img src={pic1} alt="pic1" className="w-full md:w-96 object-contain rounded-2xl" />
                        <div className="w-32 absolute bottom-1 left-1">
                            <img src={smallangle} alt="smallangle" />
                            <p className="uppercase absolute bottom-8 left-3 text-[12px] w-full"><span className="text-sm font-bold">south east asia</span> <br /> 20 august 2026</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}


export default SectionFive;