import React, { useState } from 'react';
import Footer from '../components/Footer';

const imageCategories = {
  all: [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
  ],
  pencil: [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
    // Add more images for pencil category
  ],
  colored: [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
    // Add more images for colored category
  ],
  canvas: [
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
    // Add more images for canvas category
  ],
};

const Interior = () => {
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
          Lamps
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'colored' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('colored')}
        >
          Clocks
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'canvas' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('canvas')}
        >
          Chandaliers
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

export default Interior;
