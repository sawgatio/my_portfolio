import React from "react";
import Link from "next/link";

export const Navbar = () => {
    return <div>
        <div className="flex justify-between  items-center gap-6 text-sm font-medium bg-neutral-300 inset-ring-1  inset-ring-neutral-400 p-2 mt-3 max-auto-width rounded-2xl">          
           <Link className="text-secondary p-1  transition-colors hover:text-neutral-500" href="/About">About</Link> |
           <Link className="text-primary transition-colors hover:text-neutral-500" href="/skills" >Skills</Link> | 
           <Link className="text-secondary transition-colors hover:text-neutral-500" href="/projects">Projects</Link> | 
           <Link className="text-secondary transition-colors hover:text-neutral-500" href="/resume">Resume</Link>

        </div>
    </div>  
}


