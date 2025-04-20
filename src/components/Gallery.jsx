import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, loading, error, selectedDestination, setTours }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Filter tours based on the selected name
  const filteredTours = selectedDestination
    ? tours.filter((tour) => tour.name === selectedDestination)
    : tours;

  if (filteredTours.length === 0) {
    return <h2>No tours available for the selected tour.</h2>;
  }

  const handleRemoveTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <div className="gallery">
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={handleRemoveTour} />
      ))}
    </div>
  );
}

export default Gallery;