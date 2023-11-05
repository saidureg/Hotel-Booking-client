import { useEffect, useState } from "react";
import banner1 from "../../../../assets/banner1.jpg";
import banner2 from "../../../../assets/banner2.jpg";
import banner3 from "../../../../assets/banner3.jpg";
import banner4 from "../../../../assets/banner4.jpg";

const images = [`${banner1}`, `${banner2}`, `${banner3}`, `${banner4}`];
const Banner = () => {
  const [currentImageIndex, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bannerStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };
  return (
    <div
      className="hero w-full h-[75vh] bg-cover bg-center overflow-hidden transition duration-1000 delay-300 ease-in-out relative text-white"
      style={bannerStyle}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-playfair space-y-2 lg:space-y-5">
        <h4 className="text-xl font-bold mb-2">WELCOME TO</h4>
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-2">
          Amazing Deluxe Hotel
        </h1>
        <p className="text-lg">Discover a world of comfort and luxury</p>
      </div>
    </div>
  );
};

export default Banner;
