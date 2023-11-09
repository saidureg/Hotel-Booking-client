import { useEffect, useState } from "react";
import "./Banner.css";
import { FaGreaterThan } from "react-icons/fa6";
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
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      {images?.map((image, index) => (
        <div
          key={index}
          className={`banner-image ${
            index === currentImageIndex ? "active" : "zoomOut"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <div className="flex justify-between">
        <div className="banner-text top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-playfair space-y-2 lg:space-y-5">
          <h4 className="text-lg md:text-xl font-bold mb-2 uppercase">
            Best Discount Ever!
          </h4>
          <h4 className="text-lg md:text-4xl font-bold mb-2 ">
            Save upto{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-black text-xl md:text-5xl">
              40%
            </span>{" "}
            On Pre
          </h4>
          <h1 className="text-xl md:text-4xl lg:text-7xl font-bold mb-2">
            Rooms Booking
          </h1>
          <p className="border-[3px] w-1/3 mx-auto my-2"></p>
          <div className="flex justify-center ">
            <button className="py-2 px-4 text-lg rounded-xl border-none hover:text-[#E1BE64] bg-[#E1BE64] text-gray-700 flex justify-center items-center gap-1">
              Book Now
              <span className="flex items-center">
                <FaGreaterThan /> <FaGreaterThan />
              </span>
            </button>
          </div>
          {/* <img
            className="w-[420px] border-4 rounded-l-full rounded-b-full border-[#E1BE64]"
            src={banner1}
            alt=""
          /> */}
        </div>
        {/* <div className="absolute top-1/2 right-4 lg:right-64 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex">
            <img
              className="w-[200px] md:w-[280px] lg:w-[420px] border-4 rounded-l-full rounded-b-full border-[#E1BE64]"
              src={banner1}
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
