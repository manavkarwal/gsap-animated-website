import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center justify-between px-30  py-8'>
                <h1 className='text-3xl font-bold'> <i class="ri-shining-2-fill"></i>WizardZ</h1>
                <div className='flex font-mono items-center justify-center gap-9 font-bold '>
                    <h4>About us</h4>
                    <h4>Services</h4>
                    <h4>Use Cases</h4>
                    <h4>Pricing</h4>
                    <h4>Blob</h4>
                    <button className=' px-2.5 py-3 border-black border rounded-lg'>Request a quote</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
