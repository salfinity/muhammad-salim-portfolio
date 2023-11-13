import React, { useState } from 'react';
import Footer from '../components/Footer';

const imageCategories = {
  all: [
    'assets/projects/arts/1.jpg',
    'assets/projects/arts/2.jpg',
    'assets/projects/arts/3.jpg',
    'assets/projects/arts/4.jpg',
    'assets/projects/arts/5.jpg',
    'assets/projects/arts/6.jpg',
    'assets/projects/arts/7.jpg',
    'assets/projects/arts/8.jpg',
    'assets/projects/arts/9.jpg',
    'assets/projects/arts/10.jpg',
    'assets/projects/arts/11.jpg',
    'assets/projects/arts/12.jpeg',
    'assets/projects/arts/13.jpeg',
    'assets/projects/arts/14.jpeg',
    'assets/projects/arts/15.jpeg',
    'assets/projects/arts/16.jpeg',
    'assets/projects/arts/17.jpeg',
    'assets/projects/arts/18.jpeg',
    'assets/projects/arts/19.jpeg',
    'assets/projects/arts/20.jpeg',
    'assets/projects/arts/21.jpeg',   
  ],
  pencil: [
    'assets/projects/arts/1.jpg',
    'assets/projects/arts/2.jpg',
    'assets/projects/arts/3.jpg',
    'assets/projects/arts/4.jpg',
    'assets/projects/arts/5.jpg',
    'assets/projects/arts/6.jpg',
    'assets/projects/arts/7.jpg',
    'assets/projects/arts/8.jpg',
    'assets/projects/arts/9.jpg',
    'assets/projects/arts/10.jpg',
    'assets/projects/arts/11.jpg',
  ],
  colored: [
    'assets/projects/arts/1.jpg',
    'assets/projects/arts/2.jpg',
    'assets/projects/arts/3.jpg',
    'assets/projects/arts/6.jpg',
    'assets/projects/arts/7.jpg',
  ],
  canvas: [
    'assets/projects/arts/12.jpeg',
    'assets/projects/arts/13.jpeg',
    'assets/projects/arts/14.jpeg',
    'assets/projects/arts/15.jpeg',
    'assets/projects/arts/16.jpeg',
    'assets/projects/arts/17.jpeg',
    'assets/projects/arts/18.jpeg',
    'assets/projects/arts/19.jpeg',
    'assets/projects/arts/20.jpeg',
    'assets/projects/arts/21.jpeg',   

  ],
};

const Arts = () => {
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
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'pencil' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('pencil')}
        >
          Pencil arts
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'colored' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('colored')}
        >
          Coloured arts
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'canvas' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('canvas')}
        >
          Canvas paintings
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

export default Arts;
