import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Container = () => {
    const boxLeft1Ref = useRef(null);
    const boxLeft2Ref = useRef(null);
    const boxRight1Ref = useRef(null);
    const boxRight2Ref = useRef(null);


    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(boxLeft1Ref.current, {
            opacity: 0,
            x: -40,
            duration: 0.5,
            scrollTrigger: {
                trigger: boxLeft1Ref.current,
                scroller: "body",
                start: "top 75%",
                end: "top 30%",
                // markers: true,
                scrub: 1
            }
        })
        gsap.from(boxRight1Ref.current, {
            opacity: 0,
            x: 40,
            duration: 0.5,
            scrollTrigger: {
                trigger: boxRight1Ref.current,
                scroller: "body",
                start: "top 75%",
                end: "top 30%",
                // markers: true,
                scrub: 1
            }
        })
        gsap.from(boxLeft2Ref.current, {
            opacity: 0,
            x: -40,
            duration: 0.5,
            scrollTrigger: {
                trigger: boxLeft2Ref.current,
                scroller: "body",
                start: "top 100%",
                end: "top 35%",
                // markers: true,
                scrub: 1
            }
        })
        gsap.from(boxRight2Ref.current, {
            opacity: 0,
            x: 40,
            duration: 0.5,
            scrollTrigger: {
                trigger: boxRight2Ref.current,
                scroller: "body",
                start: "top 100%",
                end: "top 35%",
                // markers: true,
                scrub: 1
            }
        })
    });

    return (
        <div className='md:h-[85%] py-10   mt-10 px-3 gap-10     md:px-28 md:mb-0 mb-80 grid grid-cols-1 md:flex-wrap md:py-5 md:justify-between md:flex w-[100%]'>
            <div ref={boxLeft1Ref} className='shrink-0 border-black border-2 p-8 flex md:h-[45%] md:w-[47%] rounded-4xl shadow-lg shadow-black '>
                <div className='w-[50%] flex flex-col justify-between  '>
                    <h2 className='text-2xl md:text-3xl  md:bg-[#b9ff66] font-mono'>Search Engine Optimazation</h2>
                    <h4 className='font-bold'>Learn more</h4>
                </div>
                <div className='w-[50%] flex items-center justify-center' >
                    <img src="https://sweetp-user-uploads.s3.eu-west-2.amazonaws.com/stage/1951/pages/19022/Illustration.png" alt="" />
                </div>
            </div>
            <div ref={boxRight1Ref} className='shrink-0 border-black  bg-black  border-2 p-8 flex md:h-[45%] md:w-[47%] rounded-4xl shadow-lg shadow-black '>
                <div className='w-[50%] flex flex-col justify-between  '>
                    <h2 className='text-2xl md:text-3xl text-white md:text-black  md:bg-[#b9ff66] font-mono'>Search Engine Optimazation</h2>
                    <h4 className='text-white font-bold'>Learn more</h4>
                </div>
                <div className='w-[50%] flex items-center justify-center' >
                    <img src="https://sweetp-user-uploads.s3.eu-west-2.amazonaws.com/stage/1951/pages/19022/Illustration.png" alt="" />
                </div>
            </div>
            <div ref={boxLeft2Ref} className='shrink-0 border-black border-2 bg-black p-8 flex md:h-[45%] md:w-[47%] rounded-4xl shadow-lg shadow-black '>
                <div className='w-[50%] flex flex-col justify-between  '>
                    <h2 className='text-2xl md:text-3xl  text-white md:text-black  md:bg-[#b9ff66] font-mono'>Search Engine Optimazation</h2>
                    <h4 className='font-bold text-white'>Learn more</h4>
                </div>
                <div className='w-[50%] flex items-center justify-center' >
                    <img src="https://sweetp-user-uploads.s3.eu-west-2.amazonaws.com/stage/1951/pages/19022/Illustration.png" alt="" />
                </div>
            </div>
            <div ref={boxRight2Ref} className='shrink-0 border-black border-2 p-8 flex md:h-[45%] md:w-[47%] rounded-4xl shadow-lg shadow-black '>
                <div className='w-[50%] flex flex-col justify-between  '>
                    <h2 className='text-2xl md:text-3xl  md:bg-[#b9ff66] font-mono'>Search Engine Optimazation</h2>
                    <h4 className='font-bold'>Learn more</h4>
                </div>
                <div className='w-[50%] flex items-center justify-center' >
                    <img src="https://sweetp-user-uploads.s3.eu-west-2.amazonaws.com/stage/1951/pages/19022/Illustration.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Container
