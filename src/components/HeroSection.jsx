import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='heroSection / flex lg:flex-row lg:justify-center mx-4 lg:mx-32 lg:w-auto lg:static // md:relative md:w-full flex-col items-center'>
      <div className='tabletImageOverlay / z-10 hidden lg:hidden md:block absolute w-[638px] h-[638px] rounded-lg bg-gradient-to-t from-orange-300 via-orange-50 opacity-80'></div>
      <div className='titleTextButton / z-20 flex flex-col -bottom-96 h-auto lg:w-1/2 lg:items-start lg:static // md:h-full md:absolute items-center'>
        <div className='titleText flex flex-col items-center lg:items-start //'>
          <h1 className='mb-4 lg:w-4/5 text-3xl lg:text-3xl xl:text-4xl font-bold lg:font-bold text-black lg:text-black text-center lg:text-left // md:text-black md:text-4xl md:font-extrabold md:w-auto md:text-center'>Medium title placeholder text</h1>
          <p className='lg:w-4/5 text-gray-500 lg:text-gray-500 lg:text-lg xl:text-xl lg:text-left // md:text-black md:text-xl md:w-3/5 text-center'>Body placeholder for text paragraph. A paragraph is a self-contained unit of text dealing with a particular point or idea. </p>
        </div>
        <button className='mt-6 py-2 w-28 lg:w-32 xl:w-40 rounded-lg bg-cyan-600 text-white lg:text-lg xl:text-xl font-semibold'>Get started</button>
      </div>
      <div className='lg:w-1/2 xl:w-auto mt-6 md:mt-auto'>
        <Image src='/images/hero-image.png' alt='hero image' width={638} height={638} className='z-0' />
        {/* <img src='/images/hero-image.png' alt='Hero section'/> */}
      </div>
    </div>
  )
}

export default HeroSection

// md:w-full
// md:w-full md:h-full