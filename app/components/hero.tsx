import Link from "next/link";
import React from "react";

export const Hero = () => {
    return <div className=" flex items-center px-10 md:px-30 py-32 ">
            {/* <div className=" hidden md:flex w-32 h-32 rounded-full bg-blue-100 items-center justify-center text-4xl font-semibold text-blue-500 shrink-0">
                S
                </div>    */}
            <div className="max-w-xl">
                <p className="text-sm text-neutral-500 mb-2 tracking-wide">Hi, I'm</p>
                <h1 className="font-bold text-5xl md:text-7xl text-neutral-900 mb-4 leading-tight">Sawgat</h1>
                <h2 className="font-medium text-lg text-neutral-600 mb-5 leading-snug"> Full-Stack Developer <br/>
                who Loves Building Products</h2>
                
                <p className="text-base text-neutral-500 mb-8 leading-relaxed">
                    I build modern web apps with React, TypeScript, and Node.js -
                    looking to join team where I can ship fast and learn even faster.
                </p>

            <div className="flex items-center gap-4">
                <button className="bg-neutral-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors cursor-pointer">
                    View My Work ↓
                </button>
                <Link href='https://github.com/sawgatio' target="_blank" rel="noopener noreferrer ">
                <div className=" bg-neutral-100  rounded-full p-2 hover:bg-neutral-100 transition-colors">
                    <img src="/git.svg" className=" size-7"alt="github" /> 
                </div>
                    </Link> 
            </div>
            </div> 
            
        </div>  
       
   
    
}