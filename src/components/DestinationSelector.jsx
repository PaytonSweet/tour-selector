import React from 'react';

function DestinationSelector({ tours, selectedDestination, setSelectedDestination }) {
  // Extract unique destinations from the tours
  const uniqueDestinations = [...new Set(tours.map((tour) => tour.destination))];

  const handleChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  return (
    <div className="destination-selector">
      <label htmlFor="destination">Select a Destination:</label>
      <select
        id="destination"
        value={selectedDestination}
        onChange={handleChange}
      >
        <option value="">All Destinations</option>
        {uniqueDestinations.map((destination) => (
          <option key={destination} value={destination}>
            {destination}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DestinationSelector;