import React from 'react';
import Head from 'next/head';
import { FaBehanceSquare, FaGithub, FaLinkedinIn, FaPhoneAlt, FaCameraRetro } from 'react-icons/fa';
import {MdLocationOn, MdMail, MdHeadphones, MdEmail} from 'react-icons/md';
import {ImAirplane} from 'react-icons/im';
import {GiSoccerBall, GiConsoleController, GiOpenBook} from 'react-icons/gi';

const resume = () => {
  return (
    <>
      <Head>
        <title>Salim | Resume</title>
        <meta
          name='description'
          content='I&apos;m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.svg' />
      </Head>

      <div className='container w-[980px] mx-auto p-2 pt-[120px] 2xl:w-[980px]'>
       <h2 className='text-center pb-8'>
        <span className='text-red-600'>Res</span><span>um</span><span className='text-red-600'>e</span>
       </h2>
       <div className='grid grid-cols-3 h-[1280px] sm:h-auto pb-8'>
        <div className="bg-slate-800">
          <div className='flex flex-col'>
          <img draggable={false} src='/assets/resume.svg' alt='profile' className='w-54 h-58 object-cover pt-12'/>
            <div className='text-center px-6 text-white pt-12 text-xl tracking-wider'>
              <p className='uppercase underline font-bold text-center'>about me</p>
              <div className='text-sm pt-2'>
                <p>Date Of Birth: March 19, 2000</p>
                <p>Age: 19</p>
                <p>Nationality: Kenyan</p>
              </div>
            </div>
            <div className='text-center pt-12 px-6 text-white pr-1 text-xl tracking-wider'>
              <p className='uppercase underline font-bold'>contact</p>
              <div className='flex flex-row gap-3 py-2 items-center justify-center'>
                <MdLocationOn size={30} /> <p className='text-sm'>The Alma, Ruaka. <br></br> Nairobi, Kenya </p>
                </div>
                <div className='flex flex-row gap-3 py-2 items-center justify-center'>
                <FaPhoneAlt size={22} /><p className='text-sm'>+254 702 802 937 <br>
                </br> +254 114 048 936</p>
                </div>
                <div className='flex flex-row gap-3 py-2 items-center justify-center'>
              <MdMail size={25} /><p className='text-sm'>muhammadibnsalim <br></br> @gmail.com</p>
              </div>
            <div className='text-start px-1 text-white pt-12 text-xl tracking-wider'>
              <p className='uppercase underline font-bold'>interests</p>
              <div className="grid grid-rows-3 grid-flow-col pt-2 gap-2 text-sm">
                <div>Web design</div>
                <div>Video editing</div>
                <div>Calligraphy</div>
                <div>Pencil art</div>
                <div>Graphic design</div>
                <div>Painting</div>
              </div>
            </div>
            <div className='text-start px-1 text-white pt-12 text-xl tracking-wider'>
              <p className='uppercase underline font-bold'>hobbies</p>
              <div className="grid grid-rows-2 pt-2 grid-flow-col gap-4 justify-center text-sm">
                <MdHeadphones size={50}/>
                <ImAirplane size={40}/>
                <GiSoccerBall size={45}/>
                <GiConsoleController size={50}/>
                <FaCameraRetro size={40}/>
                <GiOpenBook size={45}/>
              </div>
            </div>
            <div className='px-1 text-white pt-12 text-xl tracking-wider'>
              <p className='uppercase underline font-bold'>socials</p>
              <div className="grid grid-cols-4 px-4 py-4 gap-2 text-sm justify-center cursor-pointer">
                <a href='https://www.linkedin.com/in/muhammad-salim-3ba9521a2' target='_blank' rel='noreferrer'>
                <FaLinkedinIn size={20}/>
                </a>
                <a href='https://github.com/salfinity' target='_blank' rel='noreferrer'>
                <FaGithub size={20}/>
                </a>
                <a href='mailto:muhammadibnsalim@gmail.com' target='_blank' rel='noreferrer'>
                <MdEmail size={20}/>
                </a>
                <a href='https://www.behance.net/salfinity' target='_blank' rel='noreferrer'>
                <FaBehanceSquare size={20}/>
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-300 p-0 col-span-2 items-center container">
          <header className='justify-center ml-3'>
            <h1 className='pt-6 px-3 text-center font-thin tracking-wider'>MUHAMMAD SALIM</h1>
            <div className="inline-flex tracking-wider items-center">
                <hr className="w-[460px] h-4 my-2 text-center bg-slate-800 tracking-wider"/>
                <div className="px-2 bg-none h-6">
                <p>WEB DEVELOPER</p>   
              </div>
            </div>
          </header>
          <div className='text-start px-1 text-black pt-6 text-xl tracking-wider p-2 ml-2'>
              <p className='uppercase underline font-bold text-start'>career objective</p>
              <div className="text-start text-sm">
                <p>
                Aiming to join an established organization as a Web Developer 
                where I can contribute my skills and experience to the team&apos;s 
                success. By obtaining the position of Web Developer with the 
                ability to create visually appealing websites using some of the
                most powerful technologies such as ReactJs, NextJs and TailwindCSS.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 pt-6'>
              <div className='grid grid-rows container w-1/2 ml-2 p-1'>
                <p className='uppercase underline font-bold'>education qualifications:</p>
                  <table className='w-64'>                  
                      <tbody>
                        <tr>
                          <td className='font-extrabold pb-5 pr-8 text-2xl items-start'>2018</td>
                          <td>Kenya certificate of secondary education(KCSE)</td>
                        </tr>
                        <tr>
                          <td className='font-extrabold text-2xl'>2019</td>
                          <td><span className='font-bold'>Egerton university - </span>Gender and development studies.</td>
                        </tr>
                        <tr>
                          <td className='font-extrabold text-2xl'>2021</td>
                          <td>CS50&apos;s Introduction to Computer Science - <span className='font-bold'>Harvard</span></td>
                        </tr>
                        <tr>
                          <td className='font-extrabold text-2xl'>2023</td>
                          <td>cs50 certification</td>
                        </tr>
                      </tbody>
                    </table>    
              </div>
              <div className='grid relative grid-rows container w-1/2 p-1'>
                <p className='uppercase underline font-bold bottom-1 w-32'>technical proficiencies:</p>
                  <p className='pt-1 w-64'>                  
                      Front-End Web Developer | HTML | CSS | Git
                      | Javascript | React | Next JS | SQL
                      | Prisma | JWT | Tailwind CSS | Next-Auth 
                      | SWR | MongoDB | Security principles | 
                      Responsive Design | SEO-oriented skills | 
                      UX and UI Design | Testing and Debugging |
                      Back-end Web Programming Languages |
                      Problem Solving | Attention to Detail | 
                      Content Management Systems (CMS) | Creativity |
                      Strong Communication Skills.
                    </p>    
              </div>
            </div>
            <div className='pt-6 pl-3'>
              <p className='font-bold underline uppercase'>
                projects
                </p>
              
              <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                <li>
                Built showmax clone movie app which is my recent and best project. Using some of 
                the latest technologies, I was able to present my know-how in React, NextJS, TypeScript,
                Tailwind CSS, MongoDB, Prisma and debloyed it online using Vercel. 
                </li>
                <li>
                Through learning havards cs50 course, I am experienced in analyzing, troubleshooting and 
                debugging complex problems in several programming languages like C, Python and  Javascript.
                </li>
                <li>
                I have a good understanding of the fundamentals of computer science, such as data structures,
                arrays, memory management, algorithms, and cybersecurity.
                </li>
                <li>
                Familiar with web development technologies such as AJAX and Flask.
                </li>
              </ul>
            </div>
            <div className='pt-6 pb-8 pl-3'>
              <p className='font-bold underline uppercase'>
                skills
              </p>             
                <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
                  <li>
                  Attentive listening and effective oral communictaion skills.  
                  </li>
                  <li>
                  Mathematical aptitude and Great at problem solving.
                  </li>
                  <li>
                  Excellent organisational and time management skills
                  </li>
                  <li>
                  Good leadership skills.
                  </li>
                  <li>
                  Self-development skills to keep up to date with fast-changing trends
                  </li>
                  <li>
                  Ability to quickly create and apply ideas and solutions.
                  </li>
                </ul>
          </div>
         </div> 
       </div>
      </div>
    </>
  );
};

export default resume;
