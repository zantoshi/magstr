import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <a href='/' className='flex items-center py-5 px-2'>
            <Image
              src='https://pbs.twimg.com/profile_images/1714356459650097152/kLHrwxXf_400x400.jpg'
              alt='Logo'
              width={400}
              height={400}
              className='h-8 w-8 mr-2'
            />
            <span className='text-white font-bold'>Magstr</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
