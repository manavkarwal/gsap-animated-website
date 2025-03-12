import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const navTimeline = gsap.timeline({ paused: true });

const Navbar = () => {
    const logoRef = useRef(null);
    const ancerRef = useRef(null);

    useGSAP(() => {
        navTimeline.from(logoRef.current, {
            opacity: 0,
            y: -40,
            duration: 0.5,
            stagger: 0.15,
        }).from(ancerRef.current.children, {
            opacity: 0,
            y: -40,
            duration: 0.5,
            stagger: 0.15,
        })

            navTimeline.play();
    });

    return (
        <nav className='w-full'>
            <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-30 py-4 md:py-8'>
                <h1 ref={logoRef} className='text-2xl md:text-3xl font-bold'> <i className="ri-shining-2-fill"></i>WizardZ</h1>
                <div ref={ancerRef} className='flex flex-col md:flex-row font-mono items-center justify-center gap-4 md:gap-9 font-bold mt-4 md:mt-0'>
                    <h4>About us</h4>
                    <h4>Services</h4>
                    <h4>Use Cases</h4>
                    <h4>Pricing</h4>
                    <h4>Blob</h4>
                    <button className='px-2.5 py-2 md:py-3 border-black border rounded-lg'>Request a quote</button>
                </div>
            </div>
        </nav>
    )
}

export { Navbar as default, navTimeline };
