import React from "react";

const SignUp = () => {

    


    return(
        <>
            <div className="w-full lg:w-96 lg:ml-100 h-50 border mt-1 flex flex-col justify-center items-center gap-2">
                <h1 className="text-3xl uppercase">SignUp</h1>
                <form action="" className="flex flex-col gap-2">
                    <input type="text" placeholder="name...." className="border px-2 py-1 rounded" />
                    <input type="text" placeholder="password...." className="border px-2 py-1 rounded" />
                    <button className="p-2 bg-red-300 rounded-2xl">SignUp</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;