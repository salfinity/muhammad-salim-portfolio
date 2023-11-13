import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FaInstagram, FaFacebookF} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className="relative h-full w-full item-center bg-[url('/assets/header/wallpaper1.jpg')] bg-no-repeat bg-cover">
      <div className='w-full lg:h-screen mx-auto p-2 flex flex-col justify-center items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='uppercase text-sm tracking-widest text-neutral-100 pb-3 pt-20'>
             WELCOME TO SALFINITY
          </h1>
          <h1 className='py-4 max-w-5xl text-center text-neutral-100'>
          A creative team crafting art, influential brands, and digital experiences boundlessly, driven by diverse talents
          <span className='text-red-600'> infinite creativity.</span>
          </h1>
          <h1 className='py-2 text-center text-orange-400'>
            <Typewriter
                options={{
                  strings: ["Welcome to Salfinity ",
                    "Where Pencil Meets Paint",
                    "Arabic Calligraphy Takes Flight",
                    "Arts and Crafts Come to Life",
                    "Join us on a boundless journey of creativity"],
                  autoStart: true,
                  loop: true,
                 }}
               />
           </h1>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 gap-3'>
            <a
              href='https://www.facebook.com/people/Salim-Finity/100004451387192/?paipv=0&eav=AfbEVltR7ezqOuP0qrhizztfy2V89NowST81WWtsenBcthvCTJOW7a7PFi8ugVlpTLI&_rdr'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-white bg-zinc-900 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebookF />
              </div>
            </a>
            <a
              href='https://www.instagram.com/salfinity/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full text-white bg-zinc-900 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full text-white bg-zinc-900 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <a href='https://wa.me/254702802937'
               target='_blank'
               rel='noreferrer'
              >
              <div className='rounded-full text-white bg-zinc-900 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsWhatsapp />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
