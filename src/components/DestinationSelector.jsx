import React from 'react';

function DestinationSelector({ tours, selectedDestination, setSelectedDestination }) {
  // Extract unique names from the tours array
  const uniqueNames = [...new Set(tours.map((tour) => tour.name))];

  // Handle changes to the dropdown selection
  const handleChange = (event) => {
    setSelectedDestination(event.target.value); // Update the selected destination state
  };

  return (
    <div className="destination-selector">
      <label htmlFor="destination">Select a Tour:</label>
      {/* Dropdown menu to select a tour */}
      <select
        id="destination"
        value={selectedDestination} // Controlled component value
        onChange={handleChange} // Update state on change
      >
        {/* Option to show all tours */}
        <option value="">All Tours</option>
        {/* Render unique tour names as dropdown options */}
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