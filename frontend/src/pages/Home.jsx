import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const redirectToMarsRover = () => {
    navigate('/marsrover');
  };

  const redirectToDailyPhotos = () => {
    navigate('/apod');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">NASA API Explorer</h2>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4" onClick={redirectToMarsRover}>Mars Rover</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={redirectToDailyPhotos}>Daily Photos</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
