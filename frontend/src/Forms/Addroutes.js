import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';
import '../Assests/Addroutes.css';

const Addroutes = () => {
  const [stops, setStops] = useState([]);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [routeDetails, setRouteDetails] = useState({
    routeNo: '',
    routeName: '',
    bus: '',
  });

  const handleAddStop = () => {
    setStops([...stops, { stopName: '', location: '' }]);
  };

  const handleStopChange = (index, field, value) => {
    const newStops = stops.map((stop, i) =>
      i === index ? { ...stop, [field]: value } : stop
    );
    setStops(newStops);
  };

  const handleInputChange = (e) => {
    setRouteDetails({
      ...routeDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...routeDetails, source, destination, stops });
    alert('Route submitted successfully!');
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" libraries={['places']}>
      <div className="form-container">
        <h2>Add Route</h2>
        <form onSubmit={handleSubmit}>
          {/* Route Number */}
          <div className="form-group">
            <label htmlFor="routeNo">Route No.</label>
            <input
              type="text"
              id="routeNo"
              name="routeNo"
              placeholder="Route No"
              value={routeDetails.routeNo}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Route Name */}
          <div className="form-group">
            <label htmlFor="routeName">Route Name</label>
            <input
              type="text"
              id="routeName"
              name="routeName"
              placeholder="Route Name"
              value={routeDetails.routeName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Bus */}
          <div className="form-group">
            <label htmlFor="bus">Bus</label>
            <select
              id="bus"
              name="bus"
              value={routeDetails.bus}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Bus</option>
              <option value="Bus 1">Bus 1</option>
              <option value="Bus 2">Bus 2</option>
              <option value="Bus 3">Bus 3</option>
            </select>
          </div>

          {/* Source */}
          <div className="form-group">
            <label htmlFor="source">Source</label>
            <Autocomplete
              onPlaceChanged={() => {
                const place = document.querySelector('.gm-style > div');
                setSource(place ? place.innerText : '');
              }}
            >
              <input type="text" id="source" placeholder="Source" required />
            </Autocomplete>
          </div>

          {/* Destination */}
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <Autocomplete
              onPlaceChanged={() => {
                const place = document.querySelector('.gm-style > div');
                setDestination(place ? place.innerText : '');
              }}
            >
              <input type="text" id="destination" placeholder="Destination" required />
            </Autocomplete>
          </div>

          {/* Stops */}
          <div className="stops-section">
            <h3>Stops</h3>
            {stops.map((stop, index) => (
              <div key={index} className="stop-group">
                <input
                  type="text"
                  placeholder="Stop Name"
                  value={stop.stopName}
                  onChange={(e) => handleStopChange(index, 'stopName', e.target.value)}
                />
                <Autocomplete
                  onPlaceChanged={() => {
                    const place = document.querySelector('.gm-style > div');
                    handleStopChange(index, 'location', place ? place.innerText : '');
                  }}
                >
                  <input type="text" placeholder="Stop Location" />
                </Autocomplete>
              </div>
            ))}
            <button type="button" onClick={handleAddStop} className="add-stop-button">
              Add Stop
            </button>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            cancel
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </LoadScript>
  );
};

export default Addroutes ;
