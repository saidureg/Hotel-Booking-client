import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyBookingRow from "./MyBookingRow";
import swal from "sweetalert";
// import moment from "moment";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [possible, SetPossible] = useState(false);
  const [today, setToday] = useState(false);
  const { user } = useContext(AuthContext);
  const url = `https://luxelair-hotel-server.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this room!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://luxelair-hotel-server.vercel.app/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Your selected room has been deleted!", {
                icon: "success",
              });
              const remaining = bookings.filter(
                (singleCart) => singleCart._id !== _id
              );
              setBookings(remaining);
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
          });
      } else {
        swal("Your selected room is safe!");
      }
    });
  };

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
          {bookings?.map((booking, idx) => (
            <MyBookingRow
              key={idx}
              booking={booking}
              possible={possible}
              SetPossible={SetPossible}
              today={today}
              setToday={setToday}
              handleDelete={handleDelete}
            ></MyBookingRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
