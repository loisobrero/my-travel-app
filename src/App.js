// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TravelGallery from './components/TravelGallery';
import albums from './data/albums';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {albums.map((album, index) => (
          <Route
            key={index}
            path={`/album/:albumParams`}
            element={<TravelGallery />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
