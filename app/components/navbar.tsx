import React from "react";
import Link from "next/link";

export const Navbar = () => {
    return(
        <div className="flex justify-center mt-4">
        <div className="flex  items-center gap-4 text-sm font-medium  inset-ring-1  inset-ring-neutral-400 p-2 mt-3 rounded-2xl">          
           <Link className="text-secondary p-1 text-neutral-500  transition-colors hover:text-neutral-800" href="/About">About</Link>|
           <Link className="text-primary text-neutral-500 transition-colors hover:text-neutral-800" href="/skills" >Skills</Link>|  
           <Link className="text-secondary text-neutral-500 transition-colors hover:text-neutral-800" href="/projects">Projects</Link>| 
           <Link className="text-secondary text-neutral-500 transition-colors hover:text-neutral-800" href="/resume">Resume</Link>

        </div>
    </div>
)  
}


