import React from 'react';
import { Link } from 'react-router-dom';
import Herosection from '../assets/images/Herosection.jpeg';

const Landingpage = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Adjust this value as needed
      behavior: 'smooth', // This makes the scrolling smooth
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Explore the cosmos with us!</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our site welcomes you to a universe of discovery. Dive into captivating visuals and fascinating insights as we unveil the wonders of space. Join us on an epic journey through the stars!</p>
          <Link to="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" onClick={handleScroll}>
            Get started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>
          {/* Lorem Ipsum articles */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Latest Articles</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, arcu et ultricies fermentum, justo neque mattis nisi, euismod ultricies enim libero eu dui. Suspendisse potenti. Integer ut nisi sapien.
            </p>
            <p className="mb-4">
              Mauris vitae lorem nec sem interdum posuere. Nulla facilisi. Phasellus ut pharetra mauris. Nam condimentum varius nunc, et tempor magna. Phasellus eget lacinia lorem.
            </p>
            <p className="mb-4">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec finibus turpis id elit malesuada, a varius libero vehicula.
            </p>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="{Herosection    }" alt="mockup" />
        </div>
      </div>
    </section>
  );
}

export default Landingpage;