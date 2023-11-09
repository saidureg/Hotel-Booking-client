import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Rooms = () => {
  const rooms = useLoaderData();
  const [sortRooms, setSortRooms] = useState(rooms);
  const [sortPrice, setSortPrice] = useState("Default");
  const handleSortPrice = (e) => {
    const roomsCopy = [...rooms];
    if (e.target.value === "LH") {
      setSortPrice("LH");
      roomsCopy.sort((a, b) => {
        const priceA = parseInt(a.pricePerNight);
        const priceB = parseInt(b.pricePerNight);
        return priceA - priceB;
      });
    } else if (e.target.value === "HL") {
      setSortPrice("HL");
      roomsCopy.sort((a, b) => {
        const priceA = parseInt(a.pricePerNight);
        const priceB = parseInt(b.pricePerNight);
        return priceB - priceA;
      });
    }
    setSortRooms(roomsCopy);
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Rooms - LuxeLair</title>
      </Helmet>
      <div className="flex justify-between items-center mt-12">
        <h3 className="text-3xl font-playfair font-medium ">Rooms & Suites</h3>
        <div className="">
          <label className="">Filter By:</label>
          <select
            onChange={handleSortPrice}
            className="select select-warning w-full max-w-xs"
          >
            <option defaultValue="selected" value="Default">
              Default
            </option>
            <option value="LH">Low to High</option>
            <option value="HL">High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-12">
        {sortPrice === "Default"
          ? rooms?.map((room, idx) => (
              <RoomCard key={idx} room={room}></RoomCard>
            ))
          : sortRooms?.map((room, idx) => (
              <RoomCard key={idx} room={room}></RoomCard>
            ))}
      </div>
    </div>
  );
};

export default Rooms;
