import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import screenShot1 from '../assets/screenshot1.png';
import screenShot2 from '../assets/screenshot2.png';
import screenShot3 from '../assets/screenshot3.png';
import screenShot4 from '../assets/screenshot4.png';
import homePhone from "../assets/home-phones.png";

const images = [screenShot1, screenShot2, screenShot3, screenShot4];

const MobileMockup = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center h-screen bg-black">
      <div className="hidden md:flex relative">
        {/* Phone Frame */}
        <img
          src={homePhone}
          alt="Instagram Preview 1"
          className="h-[640px] mt-10"
        />
        
        {/* Slideshow inside the phone screen */}
        <div className="absolute top-[10%] left-[14%] w-[75%] h-[80%] overflow-hidden rounded-lg">
          <motion.img
            key={index}
            src={images[index]}
            alt="Slideshow"
            className="absolute w-full h-full object-contain ml-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMockup;
