// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import albums from '../data/albums';
import './HomePage.css'; // Import the CSS file for homepage styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Lo's Travel Diary</h1>
      <div className="album-preview-container">
        {albums.map((album, index) => (
          <Link key={index} to={`/album/${encodeURIComponent(album.title)}-${album.year}`}>
            <div className="album-preview">
              <img src={album.previewImage} alt={`Preview of ${album.title}`} />
              <p>{album.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
