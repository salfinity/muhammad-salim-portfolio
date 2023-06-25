import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-5xl tracking-widest text-center'>
            <span className='text-red-600'>A</span><span className='text-zinc-900'>bou</span><span className='text-red-600'>t</span>
          </p>
          <h2 className='py-4 text-center'>Who I Am</h2>
          <p className='py-2 text-zinc-900'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Tailwind CSS, Javascript, NextJs and
            React, I am a quick learner and can pick up new technology stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the specific job.
          </p>
          <p className='py-2 text-zinc-900'>
            I started web developement in 2020 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Salfinity, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-neutral-400 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
