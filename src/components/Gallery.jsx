import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, loading, error, selectedDestination, setTours }) {
  // Display a loading message while data is being fetched
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Display an error message if there was an issue fetching the data
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Filter tours based on the selected destination (name)
  // If no destination is selected, show all tours
  const filteredTours = selectedDestination
    ? tours.filter((tour) => tour.name === selectedDestination)
    : tours;

  // Display a message if no tours match the selected destination
  if (filteredTours.length === 0) {
    return <h2>No tours available for the selected tour.</h2>;
  }

  // Function to remove a tour from the list
  const handleRemoveTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  // Render the filtered list of tours using the TourCard component
  return (
    <div className="gallery">
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onRemove={handleRemoveTour} />
      ))}
    </div>
  );
}

export default Gallery;