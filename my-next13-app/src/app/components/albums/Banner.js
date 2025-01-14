import Link from 'next/link'
import React from 'react'

function Header({title,content}) {
  return (
    <div className='h-[240px] lg:h-[450px] w-full ' 
    style={{backgroundImage:'url(/Images/albumsBanner.jpg)', backgroundPosition:'center', backgroundSize:'cover'}}
    >
         <div className='flex flex-col gap-6 items-end  justify-end py-20 lg:py-40 mr-8 md:mr-24 lg:mr-32 xl:mr-60'>
            <h3 className='exo-bold text-3xl md:text-5xl lg:text-6xl text-[#f7931e] '>{title}</h3>
            <Link href="https://wa.me/919462327667" className='exo-bold p-2 lg:px-6 lg:py-4  border-white hover:border-black hover:text-black hover:bg-white w-fit text-white border md:mr-12'>Get In Touch</Link>

            
        </div>
    </div>
  )
}

export default Header