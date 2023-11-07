// import { useEffect, useState } from "react";
import FeaturedRoomCard from "./FeaturedRoomCard";
import useRooms from "../../../hooks/useRooms";

const FeaturedRooms = () => {
  const rooms = useRooms();

  return (
    <div className="max-w-screen-xl mx-auto mt-12">
      <div className="w-2/3 mx-auto text-center space-y-4 my-6">
        <h3 className="text-2xl md:text-5xl font-bold font-playfair ">
          Our <span className="text-[#deaa86]">Featured Rooms</span>
        </h3>
        <p className=" md:text-lg font-montserrat font-medium text-gray-400">
          A wide range of rooms to suit guests with varying needs. Our
          accommodation comes with world class complimentary amenities and
          services.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3 lg:mx-0">
        {rooms.slice(0, 6).map((room) => (
          <FeaturedRoomCard key={room._id} room={room}></FeaturedRoomCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
