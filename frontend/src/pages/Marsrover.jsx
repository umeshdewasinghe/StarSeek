import React, { useState } from 'react';
import axios from 'axios';

const RoverPhotos = () => {
  const [sol, setSol] = useState('');
  const [earthDate, setEarthDate] = useState('');
  const [searchBy, setSearchBy] = useState('sol');
  const [camera, setCamera] = useState('all');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = 'cFvKDneuefqf41AfVI4eczTWCV5ch5CuQW1Jdcxo';

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      setError('');
      let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${apiKey}`;

      if (searchBy === 'sol' && sol !== '') {
        apiUrl += `&sol=${sol}`;
      } else if (searchBy === 'earthDate' && earthDate !== '') {
        apiUrl += `&earth_date=${earthDate}`;
      }

      if (camera !== 'all') {
        apiUrl += `&camera=${camera}`;
      }

      const response = await axios.get(apiUrl);
      setPhotos(response.data.photos);
    } catch (error) {
      setError('Error fetching photos. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mars Rover Photos</h1>
      <div className="mb-4">
        <label className="block mb-1">Search By:</label>
        <div>
          <label htmlFor="searchBySol" className="mr-4">
            <input
              type="radio"
              id="searchBySol"
              value="sol"
              checked={searchBy === 'sol'}
              onChange={() => setSearchBy('sol')}
            />
            Martian Sol
          </label>
          <label htmlFor="searchByEarthDate">
            <input
              type="radio"
              id="searchByEarthDate"
              value="earthDate"
              checked={searchBy === 'earthDate'}
              onChange={() => setSearchBy('earthDate')}
            />
            Earth Date
          </label>
        </div>
      </div>
      {searchBy === 'sol' ? (
        <div className="mb-4">
          <label htmlFor="sol" className="block mb-1">Martian Sol:</label>
          <input type="number" id="sol" value={sol} onChange={(e) => setSol(e.target.value)} className="border border-gray-400 rounded px-2 py-1" />
        </div>
      ) : (
        <div className="mb-4">
          <label htmlFor="earthDate" className="block mb-1">Earth Date:</label>
          <input type="date" id="earthDate" value={earthDate} onChange={(e) => setEarthDate(e.target.value)} className="border border-gray-400 rounded px-2 py-1" />
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="camera" className="block mb-1">Camera:</label>
        <select id="camera" value={camera} onChange={(e) => setCamera(e.target.value)} className="border border-gray-400 rounded px-2 py-1">
          <option value="all">All Cameras</option>
          <option value="FHAZ">Front Hazard Avoidance Camera</option>
          <option value="RHAZ">Rear Hazard Avoidance Camera</option>
          <option value="MAST">Mast Camera</option>
          <option value="CHEMCAM">Chemistry and Camera Complex</option>
          <option value="MAHLI">Mars Hand Lens Imager</option>
          <option value="MARDI">Mars Descent Imager</option>
          <option value="NAVCAM">Navigation Camera</option>
          <option value="PANCAM">Panoramic Camera</option>
          <option value="MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
        </select>
      </div>
      <button onClick={fetchPhotos} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Fetch Photos</button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-4">
        {photos.map(photo => (
          <img key={photo.id} src={photo.img_src} alt={`Mars Rover Photo - Sol ${photo.sol}`} className="w-full mb-4" />
        ))}
      </div>
    </div>
  );
};

export default RoverPhotos;
