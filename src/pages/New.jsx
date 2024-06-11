import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './TopBar';
import Afro from './Afro';
import Arabic from './Arabic';
import Bongo from './Bongo';
import Christian from './Christian';
import HipHop from './HipHop';
import Kpop from './Kpop';
import Latin from './Latin';
import Pop from './Pop';
import Rap from './Rap';
import Reggae from './Reggae';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopBar />} />
        <Route path="/afro" element={<Afro />} />
        <Route path="/Pop" element={<Pop />} />
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
    </Router>
  );
}

export default AppRoutes;