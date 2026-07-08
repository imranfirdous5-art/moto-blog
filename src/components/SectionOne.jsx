import React from "react";
import pic1 from "../assets/images/pic1.jpg"
import pic2 from "../assets/images/pic2.jpg"
import pic3 from "../assets/images/pic3.jpg"
import smallangle from "../assets/images/smallangle.png"

const SectionOne = () => {
    return(
        <>
            <h2 className="text-4xl font-bold text-center uppercase lg:mt-25 bg-red-400 text-white py-2">
                 Explore The World On Two Wheels
            </h2>
            <div className="grid grid-cols-1 mt-2 gap-5 lg:gap-0 lg:grid-cols-3 lg:mt-2 justify-items-center w-full">
                <div className="w-full max-w-96 relative">
                    <div>
                        {/* <img src={pic1} alt="pic1" className="object-cover w-full"/> */}
                        <iframe src="https://www.youtube.com/embed/tHCEFssGPxQ?autoplay=1&mute=1" frameborder="0" allow="autoplay" allowFullScreen width='100%' height='370'></iframe>
                    </div>
                        
                    <div>
                        <img src={smallangle} alt="smallangle" className="w-30 absolute top-63 right-69" />
                        <p className="text-white absolute top-74 left-3 text-[13px] uppercase">$ <span className="text-4xl font-bold">100</span> <br /> per person</p>
                    </div>
                    <div className="mt-4">
                    <h6 className="font-bold capitalize text-lg">motorcycle expenditions</h6>
                    <p className="text-sm mt-1 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores nisi nesciunt eos tempore, praesentium iste? Asperiores ut sint voluptatibus?</p>
                    <button className="bg-red-500 px-4 py-1 rounded-3xl uppercase text-white text-sm">book now</button>
                    </div>
                </div>
                <div className="w-full max-w-96 relative">
                    <div>
                        {/* <img src={pic2} alt="pic1" className="object-cover w-full" /> */}
                        <iframe src="https://www.youtube.com/embed/fLfTG3vFsLw?autoplay=1&mute=1" frameborder="0" allow="autoplay" allowFullScreen width='100%' height='370'></iframe>
                    </div>
                    <div><img src={smallangle} alt="smallangle" className="w-30 absolute top-63 right-69" />
                        <p className="text-white absolute top-74 left-3 text-[13px] uppercase">$ <span className="text-4xl font-bold">100</span> <br /> per person</p>
                    </div>
                    <div className="mt-4">
                    <h6 className="font-bold capitalize text-lg">mountains motorcycle tours</h6>
                    <p className="text-sm mt-1 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores nisi nesciunt eos tempore, praesentium iste? Asperiores ut sint voluptatibus?</p>
                    <button className="bg-red-500 px-4 py-1 rounded-3xl uppercase text-white text-sm">book now</button>
                    </div>
                </div>
                <div className="w-full max-w-96 relative">
                    <div>
                        {/* <img src={pic3} alt="pic1" className="object-cover w-full" /> */}
                        <iframe src="https://www.youtube.com/embed/dG9wkMgcgkw?autoplay=1&mute=1" frameborder="0" allow="autoplay" allowFullScreen width='100%' height='370'></iframe>
                    </div>
                    <div><img src={smallangle} alt="smallangle" className="w-30 absolute top-63 right-69" />
                        <p className="text-white absolute top-74 left-3 text-[13px] uppercase">$ <span className="text-4xl font-bold">100</span> <br /> per person</p>
                    </div>
                    <div className="mt-4">
                    <h6 className="font-bold capitalize text-lg">motorcycle adventure tours</h6>
                    <p className="text-sm mt-1 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores nisi nesciunt eos tempore, praesentium iste? Asperiores ut sint voluptatibus?</p>
                    <button className="bg-red-500 px-4 py-1 rounded-3xl uppercase text-white text-sm">book now</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SectionOne;