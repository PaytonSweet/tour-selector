import { useState, useEffect } from 'react';
import './App.css';
import DestinationSelector from './components/DestinationSelector';
import Gallery from './components/Gallery';

function App() {
  // State to store the list of tours
  const [tours, setTours] = useState([]);
  // State to track if data is being loaded
  const [loading, setLoading] = useState(true);
  // State to store any error messages
  const [error, setError] = useState(null);
  // State to store the currently selected destination (name)
  const [selectedDestination, setSelectedDestination] = useState('');

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true while fetching
    setError(null); // Clear any previous errors
    try {
      const response = await fetch('/api/react-tours-project');
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const data = await response.json();
      setTours(data); // Update the tours state with the fetched data
    } catch (err) {
      setError(err.message); // Set the error message if the fetch fails
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to refresh the tours by re-fetching the data
  const handleRefresh = () => {
    fetchTours();
  };

  return (
    <div className="App">
      <h1>Our Tours</h1>
      {/* Show a message and refresh button if no tours are left */}
      {tours.length === 0 && !loading && !error ? (
        <div>
          <h2>No tours left. Refresh to reload.</h2>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      ) : (
        <>
          {/* Dropdown to filter tours by destination */}
          <DestinationSelector
            tours={tours}
            selectedDestination={selectedDestination}
            setSelectedDestination={setSelectedDestination}
          />
          {/* Gallery to display the filtered tours */}
          <Gallery
            tours={tours}
            loading={loading}
            error={error}
            selectedDestination={selectedDestination}
            setTours={setTours}
          />
        </>
      )}
    </div>
  );
}

export default App;
