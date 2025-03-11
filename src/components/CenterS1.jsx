import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { navTimeline } from './Navbar';

const centerTimeline = gsap.timeline({ paused: true });

const CenterS1 = () => {
    const part1Ref = useRef(null)

    useGSAP(() => {
        centerTimeline.from(part1Ref.current.children, {
            opacity: 0,
            x: -40,
            duration: 0.9,
            stagger: 0.35
        }).from(".image", {
            opacity: 0,
            x: 40,
            duration: 0.8
        });

        // Start CenterS1 animation after navbar animation completes
        navTimeline.then(() => {
            centerTimeline.play();
        });
    }, []);

    return (

        <div className='flex px-30 mt-[3.2vh]   h-[57%] w-[100%]'>
            <div ref={part1Ref} className=' h-[100%] w-[40%]  '>
                <h1 className='font-mono text-[45px] font-bold  leading-15  mb-4'>Navigating the digital
                    landscape for success</h1>
                <p className='text-lg mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eius adipisci doloremque nam, enim magni aspernatur consectetur sed error!
                </p>
                <button className=' bg-black text-white p-3 font-mono rounded-lg'>Book a consultance</button>
            </div>
            <div className=' h-[100%] flex items-center justify-end w-[60%] '>
                <img className='image h-[400px]' src="https://sweetp-user-uploads.s3.eu-west-2.amazonaws.com/stage/1951/pages/19022/Illustration.png" alt="" />
            </div>
        </div>
    )
}

export { CenterS1 as default, centerTimeline };

