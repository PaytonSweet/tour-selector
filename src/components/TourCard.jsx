import React from 'react';

function TourCard({ tour, onRemove }) {
  // Destructure the tour properties
  const { id, name, info, image, price } = tour;

  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        {/* Display the tour name */}
        <h3>{name}</h3>
        {/* Display the tour information */}
        <p>{info}</p>
        {/* Display the tour price */}
        <p className="tour-price">Price: ${price}</p>
        {/* Button to remove the tour from the list */}
        <button className="not-interested-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;