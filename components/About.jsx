import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/salim.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-5xl tracking-widest text-center'>
            <span className='text-red-600'>A</span><span className='text-zinc-900'>bou</span><span className='text-red-600'>t</span>
          </p>
          <h2 className='py-4 text-center'>Know Salfinity</h2>
          <p className='py-2 text-zinc-900'>
          Salim, also known as "Salim-finity," is a versatile artist with an insatiable passion for creativity.
          His talent spans a multitude of art forms, including pencil work, paintings, Arabic calligraphy, photography,
          videography, graphic design, and web design. 
          </p>
          <p className='py-2 text-zinc-900'>
          Driven by a desire to make a sustainable living from his art, Salim chose diversity as his path.
          Salfinity is the embodiment of this choice, offering a wide range of artistic creations and designs 
          for various purposes, from home decor to event settings.
          </p>
          <p className='py-2 text-zinc-900'>
          Salim's pencil work and paintings showcase his ability to merge traditional techniques with modern aesthetics.
          His Arabic calligraphy captures the intricacies of this art form, reflecting his appreciation for culture and language. 
          Through his lens, photography reveals the beauty in everyday life.
          </p>
          <p className='py-2 text-zinc-900'>
          Videography and graphic design are additional dimensions of Salim's artistic talents. He skillfully breathes life
          into stories and concepts through visual storytelling, and his web design expertise ensures an engaging online presence.
          </p>
          <p className='py-2 text-zinc-900'>
          Salfinity is more than just an art studio; it's a community where art enthusiasts can connect and learn from a passionate creator.
          Salim's commitment to his audience shines through in every piece of work he produces. Salim, the creative force behind Salfinity, 
          is a multi-talented artist who has harnessed his diverse skills to offer a platform where art and design converge. 
          Welcome to Salfinity, where art knows no bounds, and your artistic dreams find their true expression.
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
