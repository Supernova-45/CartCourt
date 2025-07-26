import React from 'react';

// Import all images
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic21 from '../images/pic2.1.jpg';
import pic22 from '../images/pic2.2.jpg';
import pic23 from '../images/pic2.3.jpg';
import pic24 from '../images/pic2.4.jpg';

// Map of image paths to imported images
const imageMap = {
  '/cart_files/pic1.jpg': pic1,
  '/cart_files/pic2.jpg': pic2,
  '/cart_files/pic3.jpg': pic3,
  '/cart_files/pic4.jpg': pic4,
  '/cart_files/pic2.1.jpg': pic21,
  '/cart_files/pic2.2.jpg': pic22,
  '/cart_files/pic2.3.jpg': pic23,
  '/cart_files/pic2.4.jpg': pic24,
};

const ImageLoader = ({ src, alt, ...props }) => {
  // Get the image from the map or use a placeholder
  const imageSrc = imageMap[src] || `https://via.placeholder.com/180x180?text=${encodeURIComponent(alt)}`;
  
  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://via.placeholder.com/180x180?text=Product+Image";
      }}
      {...props}
    />
  );
};

export default ImageLoader;
