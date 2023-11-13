import React, { useState } from 'react';
import Footer from '../components/Footer';

const imageCategories = {
  all: [
    'assets/projects/tools/2.jpg',
    'assets/projects/tools/3.jpg',
    'assets/projects/tools/a.jpeg',
    'assets/projects/tools/b.jpeg',
    'assets/projects/tools/b1.jpeg',
    'assets/projects/tools/brush.jpg',
    'assets/projects/tools/c.jpeg',
    'assets/projects/tools/d.jpeg',
    'assets/projects/tools/e.jpeg',
    'assets/projects/tools/f.jpeg',
    'assets/projects/tools/f1.jpeg',
    'assets/projects/tools/f2.jpeg',
    'assets/projects/tools/f3.jpeg',
    'assets/projects/tools/f4.jpeg',
    'assets/projects/tools/f5.jpeg',
    'assets/projects/tools/f6.jpeg',
    'assets/projects/tools/f7.jpeg',
    'assets/projects/tools/f8.jpeg',
    'assets/projects/tools/f9.jpeg',
    'assets/projects/tools/f10.jpeg',
    'assets/projects/tools/g.jpeg',
    'assets/projects/tools/h.jpeg',
    'assets/projects/tools/i.jpeg',
    'assets/projects/tools/j.jpeg',
    'assets/projects/tools/k.jpeg',
    'assets/projects/tools/p1.jpeg',
    'assets/projects/tools/p2.jpeg',
   
  ],
  canvases: [
    'assets/projects/tools/a.jpeg',
    'assets/projects/tools/b.jpeg',
    'assets/projects/tools/c.jpeg',
    'assets/projects/tools/d.jpeg',
    'assets/projects/tools/e.jpeg',
    'assets/projects/tools/f.jpeg',
    'assets/projects/tools/g.jpeg',
    'assets/projects/tools/h.jpeg',
    'assets/projects/tools/i.jpeg',
    'assets/projects/tools/j.jpeg',
    'assets/projects/tools/k.jpeg',
  ],
  paints: [
    'assets/projects/tools/2.jpg',
    'assets/projects/tools/3.jpg',
    'assets/projects/tools/p1.jpeg',
    'assets/projects/tools/p2.jpeg',
  ],
  frames: [
    'assets/projects/tools/f1.jpeg',
    'assets/projects/tools/f2.jpeg',
    'assets/projects/tools/f3.jpeg',
    'assets/projects/tools/f4.jpeg',
    'assets/projects/tools/f5.jpeg',
    'assets/projects/tools/f6.jpeg',
    'assets/projects/tools/f7.jpeg',
    'assets/projects/tools/f8.jpeg',
    'assets/projects/tools/f9.jpeg',
    'assets/projects/tools/f10.jpeg',
  ],
  extras: [
    'assets/projects/tools/ebrush.jpeg',
    'assets/projects/tools/emarker.jpeg',
    'assets/projects/tools/emarker2.jpeg',
    'assets/projects/tools/ebrush2.png',
    'assets/projects/tools/epallet2.jpeg',
    'assets/projects/tools/epencils.jpeg',
    'assets/projects/tools/cpencils.png',
    'assets/projects/tools/charcoal.jpeg',
    'assets/projects/tools/brush.jpg'
  ],
};

const ArtTools = () => {
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
          onClick={() => handleTabClick('canvases')}
        >
          Canvases
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'colored' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('paints')}
        >
          Paints
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'canvas' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('frames')}
        >
          frames
        </button>
        <button
          type="button"
          className={`text-gray-400 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'canvas' ? 'bg-gray-900 text-white' : ''}`}
          onClick={() => handleTabClick('extras')}
        >
          Extras
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

export default ArtTools;
