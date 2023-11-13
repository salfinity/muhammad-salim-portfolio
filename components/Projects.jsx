import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArtsImg from '../public/assets/projects/arts.jpg';
import DesignImg from '../public/assets/projects/design.jpg'
import WebImg from '../public/assets/projects/web.jpg'
import PhotogImg from '../public/assets/projects/photog.jpg'
import DecorImg from '../public/assets/projects/decor.jpg'
import SuppliesImg from '../public/assets/projects/supplies.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full p-2'>
      <div className='max-w-[1240px] m-auto w-full py-16'>
        <p className='text-5xl tracking-widest uppercase text-center'>
          <span className='text-red-600'>Pro</span><span className='text-zinc-900'>jec</span><span className='text-red-600'>ts</span>
        </p>
        <h2 className='py-4 text-center'>Make an order with Us</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Arts and paintings'
            backgroundImg={ArtsImg}
            projectUrl='/arts'
            tech='Pencil & canvas paintings'
          />
          <ProjectItem
            title='Graphic design'
            backgroundImg={DesignImg}
            projectUrl='/graphic'
            tech='Logos, posters, bronchures...'

          />
          <ProjectItem
            title='Web design'
            backgroundImg={WebImg}
            projectUrl='/webdesign'
            tech='Next JS sample app'

          />
          <ProjectItem
            title='photography & videography'
            backgroundImg={PhotogImg}
            projectUrl='/photography'
            tech='Samples and editing'

          />
          <ProjectItem
            title='Interior decor Items'
            backgroundImg={DecorImg}
            projectUrl='/interior'
            tech='lamps, clocks'

          />
          <ProjectItem
            title='Art tools on sale'
            backgroundImg={SuppliesImg}
            projectUrl='/tools'
            tech='Paints, brushes & canvases'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
