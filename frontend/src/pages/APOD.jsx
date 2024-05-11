import React, { useState } from 'react';
import axios from 'axios';

const APOD = () => {
  const [date, setDate] = useState('');
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'cFvKDneuefqf41AfVI4eczTWCV5ch5CuQW1Jdcxo'; 

  const fetchAPOD = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
      setApodData(response.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAPOD();
  };

  return (
<div className="container mx-auto py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Astronomy Picture of the Day</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 p-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search</button>
      </form>
      <div className="bg-white shadow-lg p-8">
        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {apodData && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">{apodData.title}</h2>
            <img src={apodData.url} alt={apodData.title} className="max-w-full h-auto" />
            <p className="mt-4">{apodData.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default APOD;
