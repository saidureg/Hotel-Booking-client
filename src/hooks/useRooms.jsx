import { useEffect, useState } from "react";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://luxelair-hotel-server.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return rooms;
};

export default useRooms;
