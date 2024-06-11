import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import SongCard from './components/SongCard'; 
import Header from './components/Header';
import TopBar from './components/TopBar';
import { Box, Typography } from '@mui/material';
import Afro from './pages/Afro';
import Arabic from './pages/Arabic';
import Bongo from './pages/Bongo';
import Christian from './pages/Christian';
import HipHop from './pages/HipHop';
import Kpop from './pages/Kpop';
import Latin from './pages/Latin';
import Pop from './pages/Pop';
import Rap from './pages/Rap';
import Reggae from './pages/Reggae';




const fetchSongs = async () => {
    try {
        const response = await axios.get('https://genius-song-lyrics1.p.rapidapi.com/song/recommendations/?id=2396871', {
            headers: {
                'X-RapidAPI-Key': '649fd543e4mshfcf4d660bd9d9e0p1f2fe3jsnafbd906d4c30',
                'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 429) {
            console.log('Rate limit exceeded. Retrying...');
          
            await new Promise(resolve => setTimeout(resolve, 10000)); 
            return fetchSongs(); 
        } else {
            console.error('Error fetching data:', error);
            throw error; 
        }
    }
};

fetchSongs().then(data => {
    console.log(data);
}).catch(error => {
    console.error('Final error after retries:', error);
});

function App() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSongs(setSongs, setError);
  }, []);

  return (
    
    <div>
      <Header />
      <main style={{ margin: '20px' }}>
        {error ? (
          <Typography variant="h6" color="error">{error}</Typography>
        ) : songs && songs.length > 0 ? (
          <Box>
            {songs.map((song) => (
              <SongCard
                key={song.id}
                title={song.title}
                artist={song.subtitle}
                image={song.images?.coverart || 'default_image_url.jpg'} 
              />
            ))}
          </Box>
        ) : (
          <Typography variant="h6">Loading...</Typography>
        )}
      </main>
      
      <Routes>
        <Route path="/" element={<TopBar />} />
        <Route path="/afro" element={<Afro />} />
        <Route path="/Arabic" element={<Arabic />} />
        <Route path="/Bongo" element={<Bongo />} />
        <Route path="/Christian" element={<Christian />} />
        <Route path="/HipHop" element={<HipHop />} />
        <Route path="/kpop" element={<Kpop />} />
        <Route path="/Latin" element={<Latin />} />
        <Route path="/Pop" element={<Pop />} />
        <Route path="/Rap" element={<Rap />} />
        <Route path="/Reggae" element={<Reggae/>} />
      </Routes>
   
    </div>
    
  );
}

export default App;