import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { navTimeline } from './Navbar';

const centerTimeline = gsap.timeline({ paused: true });

const CenterS1 = () => {
    const part1Ref = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {
        centerTimeline.from(part1Ref.current.children, {
            opacity: 0,
            x: -40,
            duration: 0.9,
            stagger: 0.35
        }).from(imageRef.current, {
            opacity: 0,
            x: 40,
            duration: 0.6
        },"-=1.5");

        // Start CenterS1 animation after navbar animation completes
        navTimeline.then(() => {
            centerTimeline.play();
        });
    });

    return (

        <div className='md:flex md:px-30 mt-[3.2vh] md:mx-0 mx-2   md:h-[57%] w-[100%]'>
            <div ref={part1Ref} className=' h-[100%] md:w-[40%] '>
                <h1 className='font-mono  text-4xl md:text-[45px] font-bold leading-11 md:leading-15  mb-4'>Navigating the digital
                    landscape for success</h1>
                <p className='text-lg  mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eius adipisci doloremque nam, enim magni aspernatur consectetur sed error!
                </p>
                <button className='  bg-black text-white p-3 font-mono rounded-lg'>Book a consultance</button>
            </div>
            <div className='h-[10%] md:h-[100%]  flex items-center justify-center md:justify-end md:w-[60%] '>
                <img ref={imageRef} className='h-[250px] md:mt-0 mt-20 md:h-[400px]' src="https://sweetp-user-uploads.s3.eu-west-2.amazonaws.com/stage/1951/pages/19022/Illustration.png" alt="" />
            </div>
        </div>
    )
}

export { CenterS1 as default, centerTimeline };

