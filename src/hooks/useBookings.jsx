import { useEffect, useState } from "react";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return bookings;
};

export default useBookings;
