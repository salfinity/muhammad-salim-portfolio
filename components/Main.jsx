import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className="relative h-full w-full bg-[url('/assets/header/wallpaper1.jpg')] bg-no-repeat bg-cover">
      <div className='w-full lg:h-screen mx-auto p-2 flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'>
          <p className='uppercase text-sm tracking-widest text-neutral-100 pb-3 pt-20'>
            LET&#39;S BUILD SOMETHING GREAT
          </p>
           <div className='group w-44 mx-auto'>
            <div className='py-2 w-44 h-44 rounded-full flex items-center border-4 group-hover:cursor-pointer group-hover:border-red-600 overflow-hidden'>
             <img draggable={false} src='/profile.png' alt='profile' className='w-max h-max object-contain'/>
            </div>
           </div> 
          <h1 className='py-4 text-neutral-100'>
            Hi, I&#39;m <span className='text-red-600'> Salim </span>
          </h1>
          <h1 className='py-2 text-center text-neutral-100'>
            <Typewriter
                options={{
                  strings: ["A Front-End Web Developer",
                    "UI/UX Researcher",
                    "Next.js Developer",
                    "React.js Developer",
                    "tailwind CSS tutor"],
                  autoStart: true,
                  loop: true,
                 }}
               />
           </h1>
          <p className='py-4 text-neutral-100 sm:max-w-[70%] m-auto text-center'>
            I’m focused on building responsive front-end web applications
            and integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 gap-3'>
            <a
              href='https://www.linkedin.com/in/muhammad-salim-3ba9521a2'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-white bg-zinc-900 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/salfinity'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-white bg-zinc-900 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full text-white bg-zinc-900 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full text-white bg-zinc-900 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
