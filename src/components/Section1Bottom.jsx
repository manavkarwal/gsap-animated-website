import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { centerTimeline } from './CenterS1';
const bottomTl = gsap.timeline({
  paused: true
});
const Section1Bottom = () => {
  const botRef = useRef(null);
  useGSAP(() => {
    bottomTl.from(botRef.current.children, {
      opacity: 0,
      y:30,
      duration: 0.5,
      stagger: 0.15,
    });
    // Start Section1Bottom animation after CenterS1 animation completes
    centerTimeline.then(() => {
      bottomTl.play();
    });
  });

  return (
    <div ref={botRef}  className='flex items-center mt-10 justify-between px-28  '>
      <img className='h-14 mt-4' src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="" />
      <img className='h-18 ' src="https://logos-world.net/wp-content/uploads/2023/09/Dribbble-Logo-2009.png" alt="" />
      <img className='h-22 ' src="https://www.logo.wine/a/logo/HubSpot/HubSpot-Logo.wine.svg" alt="" />
      <img className='h-18 ' src="https://cdn.freelogovectors.net/wp-content/uploads/2023/09/notionlogo-freelogovectors.net_-640x400.png" alt="" />
      <img className='h-9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcjEB2JNAGJvCvdHgBQXZIr-3yon57qICVOQ&s" alt="" />
      <img className='h-9' src="https://upload.wikimedia.org/wikipedia/commons/2/24/Zoom-Logo.png?20230209144005" alt="" />
    </div>
  )
}

export { Section1Bottom as default};
