// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import albums from '../data/albums';
import './HomePage.css'; // Import the CSS file for homepage styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="header">Lo's Travel Diary</h1> 
      <div className="album-preview-container">
        {albums.map((album, index) => (
          <Link key={index} to={`/album/${encodeURIComponent(album.title)}-${album.year}`}>
            <div className="album-preview">
              <img src={`${process.env.PUBLIC_URL}/${album.previewImage}`} alt={`Preview of ${album.title}`} />
              <p>{album.title} - {album.year}</p> {/* Include the year along with the title */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
