import Image from 'next/image';
import React from 'react';
import webdesignImg from '../public/assets/projects/webdesign.png';
import { RiRadioButtonFill, RiArrowGoBackFill } from 'react-icons/ri';
import Link from 'next/link';

const webdesigns = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={webdesignImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>IQRA FM WEBSITE</h2>
          <h3>Using some of the latest programming technologies</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2><span className='text-red-600'>Over</span><span>view</span></h2>
          <p>
           This application was developed using Next.js 13, Clerk, Prisma, Planet Scale, Stripe, and NextAuth, 
           and is currently hosted on Vercel. Representing one of my most notable real-life projects, it caters 
           to Iqra FM, a radio station based in Nairobi, Kenya. Iqra FM is dedicated to providing a diverse range
           of programs rooted in the Islamic faith, broadcasting 24 hours a day. The website features up-to-date
           news integrated through a Mediastack API call.

           Notably, the project incorporates an e-commerce platform seamlessly integrated with an external backend application. 
           This facilitates users in buying and selling products online. It stands as a remarkable project, and I encourage you 
           to explore it. Should you have any web design needs, consider entrusting us with the task, and we assure you of 
           delivering unparalleled quality in our work.             
          </p>
          <a
            href='https://github.com/salfinity/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Codes</button>
          </a>
          <a
            href='https://iqrafmkenya.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextJs 13
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailwindCSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NextAuth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Prisma
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Planet scale
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Versel
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

export default webdesigns;
