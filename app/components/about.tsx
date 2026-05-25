import React from "react";

export const About = () => {
    return (
        <section  className="py-15 max-w-2xl mx-auto px-6" id="about" >
            <p className="text-sm uppercase tracking-widest text-gray-700 mb-8">About</p>
            <p className="text-2xl font-medium leading-relaxed text-gray-800 mb-6">I love learning things by breaking them down
            and then building each blocks piece by piece before this i would 
            love to ask my mind 3Qs: </p>
            <p className="text-base text-gray-500 leading-relaxed mb-10">
                Before writing a single line, I ask myself three questions:
            </p>   
            <ul className="space-y-4 mb-12">
                <li className="text-base text-gray-700">
                    <span className="text-gray-400 mr-3 ">01</span>
                    What is the use of this block of code?
                </li>
                <li className="text-base text-gray-700">
                    <span className="text-gray-400 mr-3">02</span>
                    Do I really need this?
                </li>
                <li className="text-base text-gray-700">
                    <span className="text-gray-400 mr-3">03</span>
                    Is there a better solution?
                </li>
            </ul>
            
        </section>
    )
}