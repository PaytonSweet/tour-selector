import { useState, useEffect } from 'react';
import './App.css';
import DestinationSelector from './components/DestinationSelector';
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('');

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  return (
    <div className="App">
      <h1>Our Tours</h1>
      <DestinationSelector
        tours={tours}
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
      />
      <Gallery
        tours={tours}
        loading={loading}
        error={error}
        selectedDestination={selectedDestination}
        setTours={setTours}
      />
    </div>
  );
}

export default App;
