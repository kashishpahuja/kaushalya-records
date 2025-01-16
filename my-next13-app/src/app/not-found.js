import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="h-[400px]  m-8 md:m-12 lg:m-24 flex-col flex items-center justify-center ">
      <h1 className='exo-bold text-3xl text-white'>The page can’t be found.</h1>
      <p className=' text-md text-gray-600 mt-8 mb-16'>It looks like nothing was found at this location.</p>
      <Link
      href={'/'} 
      className="exo-bold p-2 lg:px-6 lg:py-4 border-white border text-white hover:text-black hover:bg-white" >
      Go Back
    </Link>
    </div>
  );
};

export default NotFoundPage;
