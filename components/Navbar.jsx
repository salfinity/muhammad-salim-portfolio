import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.svg'
import DarkModeButton from './DarkModeButton';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#FFFFFF');
  const [linkColor, setLinkColor] = useState('#FFFFFF');
  const router = useRouter();

  useEffect(() => {
   if (
     router.asPath === '/property' ||
     router.asPath === '/showmax' ||
     router.asPath === '/netflix' ||
     router.asPath === '/twitch' ||
     router.asPath === '/Main'
   ) {
     setNavBg('transparent');
     setLinkColor('#FFFFFF');
   } else {
     setNavBg('#000000');
     setLinkColor('#FFFFFF');
   }
 }, [router])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-18 shadow-2xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-18 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='150'
              height='50'
              className='cursor-pointer pt-3 py-3 px-4'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex mr-8'>
          <DarkModeButton />
            <li className='ml-6 text-sm uppercase p-2 hover:border hover:bg-white hover:text-zinc-900 rounded-full'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-6 text-sm uppercase p-2 hover:border hover:bg-white hover:text-zinc-900 rounded-full'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-6 text-sm uppercase p-2 hover:border hover:bg-white hover:text-zinc-900 rounded-full'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-6 text-sm uppercase p-2 hover:border hover:bg-white hover:text-zinc-900 rounded-full'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-6 text-sm uppercase p-2 hover:border hover:bg-white hover:text-zinc-900 rounded-full'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <div className='border-2 items-center py-2 px-2 border-zinc-100 rounded-full hover:animate-ping cursor-pointer mr-8'>
            <AiOutlineMenu className='text-neutral-100' size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-white/60' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-zinc-900 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                  className='py-2 px-2'
                    src={NavLogo}
                    width='150'
                    height='90'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
              >
                <div className='border-2 items-center py-2 px-2 border-zinc-100 rounded-full hover:animate-ping cursor-pointer mr-8'>
                <AiOutlineClose className='text-neutral-100' size={20} />
                </div>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[100%] md:w-[70%] py-4 text-center font-bold text-neutral-100'>
                Let&#39;s build something great for you.
              </p>
            </div>
          </div>
          <div className='py-4 px-4 flex flex-col text-neutral-100'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-4 hover:bg-white hover:text-zinc-900 rounded-full text-center'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-4 hover:bg-white hover:text-zinc-900 rounded-full text-center'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-4 hover:bg-white hover:text-zinc-900 rounded-full text-center'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-4 hover:bg-white hover:text-zinc-900 rounded-full text-center'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-4 hover:bg-white hover:text-zinc-900 rounded-full text-center'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-24 items-center'>
              <p className='uppercase tracking-widest text-red-600 text-center'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/muhammad-salim-3ba9521a2'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/salfinity'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
