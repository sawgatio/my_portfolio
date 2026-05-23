"use client"
import React, { useState } from "react";

export const HamIcon = () => {
    const[open,setOpen] = useState(false);
    return <div className="">
        <img className=" size-8 cursor-pointer sm:hidden" src="/hamburger.svg" alt="hamburger" />
    </div>   
}

