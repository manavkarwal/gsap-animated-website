import React from 'react'
import Section1 from './pages/Section1'
import Section2 from './pages/Section2'
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const App = () => {
  return (
    <>
      <Section1/ > 
      <Section2/>
    </>
  )
}

export default App
