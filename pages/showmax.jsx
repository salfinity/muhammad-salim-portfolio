import Image from 'next/image';
import React from 'react';
import showmaxImg from '../public/assets/projects/showmax.png';
import { RiRadioButtonFill, RiArrowGoBackFill } from 'react-icons/ri';
import Link from 'next/link';

const showmax = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={showmaxImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Showmax</h2>
          <h3>react JS / Next JS / Tailwind CSS / Prisma / mongoDb / NextAuth / Versel / Typescript </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2><span className='text-red-600'>Over</span><span>view</span></h2>
          <p>
            I built this app to demonstrate knowledge working with the latest development technologies. 
            React JS has been used for front-end development. Next JS for server side rendering. Prisma 
            for data abstruction layer. MongoDb for storage needs and deployed it on-line using vercel.
            This application supports user authentication using NextAuth and supports google and fakes up
            the facebook authentification to be removed as it is in Showmax. Users are able to create 
            a new account using any type of email address and can log in with same details. This is made 
            possble through creating a Showmax cloud storage database at the time of user registration in mongoDb. 
          </p>
          <a
            href='https://github.com/salfinity/showmax-cloned'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://showmax-cloned.vercel.app/auth'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-8'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Vercel
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> useSWR
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> mongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextAuth
              </p>
            </div>
          </div>
        </div>
        <button className='p-3'>
        <Link href='/#projects'>
          <p className='underline text-white cursor-pointer items-center flex pl-16 gap-2'><RiArrowGoBackFill className='bold'/> Back</p>
        </Link>
        </button>
      </div>
    </div>
  );
};

export default showmax;
