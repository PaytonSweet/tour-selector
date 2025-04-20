import React from 'react';

function DestinationSelector({ tours, selectedDestination, setSelectedDestination }) {
  // Extract unique names from the tours
  const uniqueNames = [...new Set(tours.map((tour) => tour.name))];

  const handleChange = (event) => {
    setSelectedDestination(event.target.value);
  };

  return (
    <div className="destination-selector">
      <label htmlFor="destination">Select a Tour:</label>
      <select
        id="destination"
        value={selectedDestination}
        onChange={handleChange}
      >
        <option value="">All Tours</option>
        {uniqueNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DestinationSelector;