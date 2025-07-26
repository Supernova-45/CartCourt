import React from 'react';

// Import cart images
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import pic21 from '../images/pic2.1.jpg';
import pic22 from '../images/pic2.2.jpg';
import pic23 from '../images/pic2.3.jpg';
import pic24 from '../images/pic2.4.jpg';

// Import wishlist images
import movieScreen from '../images/movie_screen.jpg';
import fountainPen from '../images/fountain_pen.jpg';
import mujiPens from '../images/muji_pens.jpg';
import pastaMaker from '../images/pasta_maker.jpg';
import handBlender from '../images/hand_blender.jpg';
import digitalPictureFrame from '../images/digital_picture_frame.jpg';
import instaxPrinter from '../images/instax_printer.jpg';
import ledLightStrip from '../images/led_light_strip.jpg';
import bluetoothSpeaker from '../images/bluetooth_speaker.jpg';

// Import coffee machine images
import breville from '../images/71io+Gh4ApL._AC_UL320_.jpg';
import technivorm from '../images/61a7BOOkDjL._AC_UL320_.jpg';
import nespresso from '../images/51HrtoZ9YVL._AC_UL320_.jpg';
import hamilton from '../images/71gYAwOfxPL._AC_UL320_.jpg';
import cuisinart from '../images/71BvCt6eAFL._AC_UL320_.jpg';
import keurig from '../images/71McTfnZGvL._AC_UL320_.jpg';
import delonghi from '../images/61B869x6ElL._AC_UL320_.jpg';
import ninja from '../images/51l2h37RiFL._AC_UL320_.jpg';
import blackdecker from '../images/61UTFJux1pL._AC_UL320_.jpg';
import mrcoffee from '../images/71LB1AbsorL._AC_UL320_.jpg';

// Import keurig analysis image
import keurigAnalysis from '../images/41n8zdRKObL._AC_.jpg';

// Map of image paths to imported images
const imageMap = {
  // Cart images
  '/cart_files/pic1.jpg': pic1,
  '/cart_files/pic2.jpg': pic2,
  '/cart_files/pic3.jpg': pic3,
  '/cart_files/pic4.jpg': pic4,
  '/cart_files/pic2.1.jpg': pic21,
  '/cart_files/pic2.2.jpg': pic22,
  '/cart_files/pic2.3.jpg': pic23,
  '/cart_files/pic2.4.jpg': pic24,
  
  // Wishlist images
  '/wishlist_files/movie_screen.jpg': movieScreen,
  '/wishlist_files/fountain_pen.jpg': fountainPen,
  '/wishlist_files/muji_pens.jpg': mujiPens,
  '/wishlist_files/pasta_maker.jpg': pastaMaker,
  '/wishlist_files/hand_blender.jpg': handBlender,
  '/wishlist_files/digital_picture_frame.jpg': digitalPictureFrame,
  '/wishlist_files/instax_printer.jpg': instaxPrinter,
  '/wishlist_files/led_light_strip.jpg': ledLightStrip,
  '/wishlist_files/bluetooth_speaker.jpg': bluetoothSpeaker,
  
  // Coffee machine images
  '/coffee_machine_files/71io+Gh4ApL._AC_UL320_.jpg': breville,
  '/coffee_machine_files/61a7BOOkDjL._AC_UL320_.jpg': technivorm,
  '/coffee_machine_files/51HrtoZ9YVL._AC_UL320_.jpg': nespresso,
  '/coffee_machine_files/71gYAwOfxPL._AC_UL320_.jpg': hamilton,
  '/coffee_machine_files/71BvCt6eAFL._AC_UL320_.jpg': cuisinart,
  '/coffee_machine_files/71McTfnZGvL._AC_UL320_.jpg': keurig,
  '/coffee_machine_files/61B869x6ElL._AC_UL320_.jpg': delonghi,
  '/coffee_machine_files/51l2h37RiFL._AC_UL320_.jpg': ninja,
  '/coffee_machine_files/61UTFJux1pL._AC_UL320_.jpg': blackdecker,
  '/coffee_machine_files/71LB1AbsorL._AC_UL320_.jpg': mrcoffee,
  
  // Keurig analysis image
  '/keurig_files/41n8zdRKObL._AC_.jpg': keurigAnalysis
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
