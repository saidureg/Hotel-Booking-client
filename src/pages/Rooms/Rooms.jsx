import { useLoaderData } from "react-router-dom";
import RoomCard from "./RoomCard";

const Rooms = () => {
  const rooms = useLoaderData();
  console.log(rooms);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-3xl font-playfair font-medium my-5">
        Rooms & Suites
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
