import React from 'react'
import Navbar from '../components/Navbar'
import CenterS1 from '../components/CenterS1'
import Section1Bottom from '../components/Section1Bottom'

const Section1 = () => {
    

    return (
        <div className='relative h-[100vh]'>
            <Navbar />
            <CenterS1 />
            <Section1Bottom/>
        </div>
    )
}

export default Section1
