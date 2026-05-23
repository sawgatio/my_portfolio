import React from "react";

export const Container = (({children}:any) => {
    return <div className=" w-full max-w-96 m-auto">
        {children}
    </div>
})