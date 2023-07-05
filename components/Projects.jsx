import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.png'
import showmaxImg from '../public/assets/projects/showmax.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full p-2'>
      <div className='max-w-[1240px] m-auto w-full py-16'>
        <p className='text-5xl tracking-widest uppercase text-center'>
          <span className='text-red-600'>Pro</span><span className='text-zinc-900'>jec</span><span className='text-red-600'>ts</span>
        </p>
        <h2 className='py-4 text-center'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Showmax Movie App'
            backgroundImg={showmaxImg}
            projectUrl='/showmax'
            tech='Next JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
