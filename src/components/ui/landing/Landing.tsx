import { gsap } from "gsap";
import { ScrollTrigger , SplitText } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText); 

const Landing = () => {
    return (
        <div className=" flex-center h-screen w-full">
         <h1 className=" text-primary font-bold text-2xl"> Hello GSAP</h1>
        </div>
    );
};

export default Landing;