import React from "react";

export const Container = (({children}:any) => {
    return <div className=" w-full max-w-5xl m-auto px-6">
        {children}
    </div>
})