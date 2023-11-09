import { useEffect, useState } from "react";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://luxelair-hotel-server.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return bookings;
};

export default useBookings;
