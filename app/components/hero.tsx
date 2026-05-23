import React from "react";

export const Hero = () => {
    return <div className=" flex justify-center items-center gap-5">
        <div>
        <img src="/brain_c.svg" className="w-30 rounded-full object-cover cursor-pointer" alt="Avatar"/>
        </div>
        <div className="">
            <h1 className="font-medium text-neutral-800"> Hi, I'm Sawgat </h1>
            <p className="font-small text-neutral-700">Self-Taught Full-Stack Developer | Love Building Product</p>
            <div>
            <h3>I build modern web applications with React, TypeScript, and Node.js. I’m looking for opportunities to contribute, learn fast, and help startups ship useful products.</h3>
            </div>
            
        </div>
    </div>
}