import React from 'react'

function Header({title,content}) {
  return (
    <div className='h-[240px] lg:h-[450px] w-full ' 
    style={{backgroundImage:'url(/Images/albumsBanner.jpg)', backgroundPosition:'center', backgroundSize:'cover'}}
    >
        <div className='text-end py-28 md:py-20 lg:py-40 mr-6 md:mr-24 lg:mr-32 xl:mr-48'>
        <h3 className='block md:hidden text-2xl md:text-5xl lg:text-7xl text-white '>OUR <br /> ALBUMS</h3>

            <h3 className='hidden md:block text-3xl md:text-5xl lg:text-6xl text-white '>OUR ALBUMS</h3>
            <h5 className=' mt-3 md:mt-6 text-sm text-white'>{content}</h5>
            
        </div>
    </div>
  )
}

export default Header