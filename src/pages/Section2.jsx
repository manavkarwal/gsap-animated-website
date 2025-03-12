import React, { useRef } from 'react'
import Container from '../components/Container'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section2 = () => {
    const butRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from(butRef.current.children, {
            opacity: 0,
            y: 40,
            duration: 0.5,
            scrollTrigger: {
                trigger: butRef.current,
                scroller:"body",
                start:"top 75%",
                end:"top 30%",
                scrub:1
            }
        })
    });

    return (
        <div className='h-screen '>
            <div ref={butRef} className='services flex px-28 items-center gap-18  py-5'>
                <button className=' bg-[#b9ff66] px-5  font-mono text-2xl py-2.5 rounded-lg  font-bold'>Services</button>
                <p className='w-[60%] text-sm p-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid velit iure tempora unde et rerum ipsa rem alias tenetur iusto.</p>
            </div>
            <Container />
        </div>
    )
}

export default Section2
