import React from 'react';
import './CustomCarousel.css'; // Import CSS file for CustomCarousel styles

const CustomCarousel = ({ children }) => {
  return (
    <div className="custom-carousel">
      {children}
    </div>
  );
}

export default CustomCarousel;
