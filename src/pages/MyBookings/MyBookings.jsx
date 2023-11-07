import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyBookingRow from "./MyBookingRow";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  return (
    <div className="overflow-x-auto max-w-screen-xl mx-auto my-12">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Room Details</th>
            <th>User Info</th>
            <th>Booking Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings.map((booking, idx) => (
            <MyBookingRow key={idx} booking={booking}></MyBookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
