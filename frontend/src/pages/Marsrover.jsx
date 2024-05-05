import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Roverphotos = () => {
  const [rover, setRover] = useState('curiosity');
  const [prevRover, setPrevRover] = useState('curiosity');
  const [sol, setSol] = useState('');
  const [prevSol, setPrevSol] = useState('');
  const [earthDate, setEarthDate] = useState('');
  const [prevEarthDate, setPrevEarthDate] = useState('');
  const [searchBy, setSearchBy] = useState('sol');
  const [prevSearchBy, setPrevSearchBy] = useState('sol');
  const [camera, setCamera] = useState('all');
  const [prevCamera, setPrevCamera] = useState('all');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [manifest, setManifest] = useState(null);
  const [showTransition, setShowTransition] = useState(false); // State to control transition

  const apiKey = 'cFvKDneuefqf41AfVI4eczTWCV5ch5CuQW1Jdcxo';

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      setError('');
      let apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=${apiKey}`;

      if (searchBy === 'sol' && sol !== '') {
        apiUrl += `&sol=${sol}`;
      } else if (searchBy === 'earthDate' && earthDate !== '') {
        apiUrl += `&earth_date=${earthDate}`;
      }

      if (camera !== 'all') {
        apiUrl += `&camera=${camera}`;
      }

      const [photosResponse, manifestResponse] = await Promise.all([
        axios.get(apiUrl),
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${apiKey}`)
      ]);

      if (photosResponse.data.photos.length === 0) {
        // Display SweetAlert notification if no photos found
        Swal.fire({
          icon: 'warning',
          title: 'No Photos Found',
          text: 'No photos found for the selected criteria.',
        });
      } else {
        setPhotos(photosResponse.data.photos);
        setManifest(manifestResponse.data.photo_manifest);
        setShowTransition(true); // Set to true after photos are fetched

        // Update previous inputs
        setPrevRover(rover);
        setPrevSol(sol);
        setPrevEarthDate(earthDate);
        setPrevSearchBy(searchBy);
        setPrevCamera(camera);
      }
    } catch (error) {
      setError('Error fetching photos. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle fetchPhotos with empty inputs
  const handleFetchPhotos = () => {
    if (!rover || (!sol && searchBy === 'sol') || (!earthDate && searchBy === 'earthDate')) {
      // Display SweetAlert notification if any required input is empty
      Swal.fire({
        icon: 'warning',
        title: 'Empty Fields',
        text: 'Please fill in all required fields before fetching photos.',
      });
    } else {
      fetchPhotos();
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900'>
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="rover" className="block mb-1 text-white">Select Rover:</label>
        <select
          id="rover"
          value={rover}
          onChange={(e) => setRover(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 bg-white text-gray-900 focus:outline-none focus:border-blue-500"
        >
          <option value="curiosity" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Curiosity</option>
          <option value="opportunity" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Opportunity</option>
          <option value="spirit" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Spirit</option>
        </select>
      </div>
  
      <div className="mb-4">
        <label className="block mb-1 text-white">Search By:</label>
        <div>
          <label htmlFor="searchBySol" className="mr-4 text-white">
            <input
              type="radio"
              id="searchBySol"
              value="sol"
              checked={searchBy === 'sol'}
              onChange={() => setSearchBy('sol')}
            />
            Martian Sol
          </label>
          <label htmlFor="searchByEarthDate" className='mr-4 text-white'>
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
          <label htmlFor="sol" className="block mb-1 text-white">Martian Sol:</label>
          <input type="number" id="sol" value={sol} onChange={(e) => setSol(e.target.value)} className="border border-gray-400 rounded px-2 py-1" />
        </div>
      ) : (
        <div className="mb-4">
          <label htmlFor="earthDate" className="block mb-1 text-white">Earth Date:</label>
          <input type="date" id="earthDate" value={earthDate} onChange={(e) => setEarthDate(e.target.value)} className="border border-gray-400 rounded px-2 py-1" />
        </div>
      )}
  
      <div className="mb-4 ">
        <label htmlFor="camera" className="block mb-1 ">Camera:</label>
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
  
      <button onClick={handleFetchPhotos} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Fetch Photos</button>
      {loading && <p>Loading...</p>}
      {manifest && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Mission Manifest</h2>
          <p>Name: {manifest.name}</p>
          <p>Landing Date: {manifest.landing_date}</p>
          <p>Launch Date: {manifest.launch_date}</p>
          <p>Status: {manifest.status}</p>
          <p>Max Sol: {manifest.max_sol}</p>
          <p>Max Date: {manifest.max_date}</p>
          <p>Total Photos: {manifest.total_photos}</p>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {/* Apply transition to the grid */}
      <div className={`mt-4 grid grid-cols-2 gap-4 transition-opacity duration-500 ${showTransition ? 'opacity-100' : 'opacity-0'}`}>
        {photos.map(photo => (
          <img key={photo.id} src={photo.img_src} alt={`Mars Rover Photo - Sol ${photo.sol}`} className="max-w-full h-auto mb-4" />
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Roverphotos;
