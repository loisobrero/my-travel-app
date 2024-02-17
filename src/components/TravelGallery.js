// TravelGallery.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import albums from '../data/albums';
import './TravelGallery.css';

const TravelGallery = () => {
  const { albumParams } = useParams();
  const [albumTitle, albumYear] = albumParams.split('-');
  const album = albums.find((album) => album.title === albumTitle && String(album.year) === albumYear);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight') {
        document.querySelector('.carousel-root .control-next').click();
      } else if (event.key === 'ArrowLeft') {
        document.querySelector('.carousel-root .control-prev').click();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [album]);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className="travel-gallery-container">
      <h1>{album.title}</h1>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={3000}>
        {album.images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={`${process.env.PUBLIC_URL}/${image}`} alt={`Photo ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TravelGallery;