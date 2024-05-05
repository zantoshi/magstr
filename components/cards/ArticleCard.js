import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArticleCard = ({ title, author, date, cardImage, link }) => {
  return (
    <Link href={link}>
      <div className='overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
        <div className='relative'>
          <Image
            src={cardImage}
            alt={title}
            width={700}
            height={400}
            className='w-full h-auto'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xl font-semibold'>{title}</h3>
          <p className='text-gray-500'>{author}</p>
          <p className='text-gray-400'>{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
