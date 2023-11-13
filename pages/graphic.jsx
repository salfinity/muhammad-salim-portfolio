import React, { useState } from 'react';
import Footer from '../components/Footer';

const imageCategories = {
  all: [
    'assets/projects/graphic/eaffaa.jpg',
    'assets/projects/graphic/shampink.jpg',
    'assets/projects/graphic/trendy.jpg',
    'assets/projects/graphic/mockups/9.png',
    'assets/projects/graphic/mockups/13.png',
    'assets/projects/graphic/posters/laundry.jpg',
    'assets/projects/graphic/posters/salfinity.jpg',
    'assets/projects/graphic/posters/eaffaa.jpg',
  ],
  logo: [
    'assets/projects/graphic/eaffaa.jpg',
    'assets/projects/graphic/salfinity.png',
    'assets/projects/graphic/shampink.jpg',
    'assets/projects/graphic/shamyellow.jpg',
    'assets/projects/graphic/trendy.jpg',
    'assets/projects/graphic/uiyg.jpg',
    // Add more images for logo category
  ],
  poster: [
    'assets/projects/graphic/posters/alu.jpg',
    'assets/projects/graphic/posters/laundry.jpg',
    'assets/projects/graphic/posters/salfinity.jpg',
    'assets/projects/graphic/posters/sham.jpg',
    'assets/projects/graphic/posters/eaffaa.jpg',
    'assets/projects/graphic/posters/clothline.png',
    'assets/projects/graphic/posters/champions.jpg',
    // Add more images for poster category
  ],
  packaging: [
    'assets/projects/graphic/salfinity.png'
    // Add more images for packaging category
  ],
  best: [
    'assets/projects/graphic/mockups/4.png',
    'assets/projects/graphic/eaffaa.jpg',
    'assets/projects/graphic/shampink.jpg',
    'assets/projects/graphic/salfinity.png',
    // Add more images for packaging category
  ],
  mockup: [
    'assets/projects/graphic/mockups/1.png',
    'assets/projects/graphic/mockups/2.png',
    'assets/projects/graphic/mockups/3.png',
    'assets/projects/graphic/mockups/4.png',
    'assets/projects/graphic/mockups/5.png',
    'assets/projects/graphic/mockups/6.png',
    'assets/projects/graphic/mockups/7.png',
    'assets/projects/graphic/mockups/8.png',
    'assets/projects/graphic/mockups/9.png',
    'assets/projects/graphic/mockups/10.png',
    'assets/projects/graphic/mockups/11.png',
    'assets/projects/graphic/mockups/12.png',
    'assets/projects/graphic/mockups/13.png',
    'assets/projects/graphic/mockups/14.png',
    'assets/projects/graphic/mockups/15.png',
    'assets/projects/graphic/mockups/16.png',
    'assets/projects/graphic/mockups/17.png',
    'assets/projects/graphic/mockups/18.png',
    // Add more images for mockup category
  ],
};

const Graphic = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to 'all' category

  // Event handler for tab clicks
  const handleTabClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='max-w-8xl mr-8 ml-8 pt-16'>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className={`text-zinc-800 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 ${selectedCategory === 'all' ? 'bg-blue-700 text-white' : ''}`}
          onClick={() => handleTabClick('all')}
        >
          All categories
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'logo' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('logo')}
        >
          LOGO design
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'poster' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('poster')}
        >
          Poster design
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'packaging' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('packaging')}
        >
          Packaging design
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'best' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('best')}
        >
          Best projects
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'mockup' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('mockup')}
        >
          Mockup samples
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imageCategories[selectedCategory].map((imageSrc, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={imageSrc} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Graphic;
