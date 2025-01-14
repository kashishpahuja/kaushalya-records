import React from 'react'

function Header({title,content,url}) {
  return (
    <div className='h-[240px] lg:h-[450px] w-full ' 
    style={{backgroundImage:'url(/Images/aboutBanner.webp)', backgroundPosition:'center', backgroundSize:'cover'}}
    >
        <div className='text-end py-20 lg:py-40 mr-8 md:mr-24 lg:mr-32 xl:mr-60'>
            <h3 className='bungeeHead text-3xl md:text-5xl lg:text-6xl text-[#f7931e] '>{title}</h3>
            <h5 className='merriHead mt-3 md:mt-6 text-sm text-white'>{content}</h5>
            
        </div>
    </div>
  )
}

export default Header