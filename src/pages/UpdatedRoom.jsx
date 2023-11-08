import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";
// import { AuthContext } from "../Provider/AuthProvider";
// import useRooms from "../hooks/useRooms";
import useBookings from "../hooks/useBookings";

const UpdatedRoom = () => {
  const bookings = useBookings();
  const booking = useLoaderData();
  const { _id, name, phone, date, special_request } = booking;
  const [bookingDate, setBookingDate] = useState("");
  const [alreadyBooked, setAlreadyBooked] = useState();

  //compare date
  const filterBookedRoom = bookings?.filter(
    (data) => data.room_id === booking.room_id
  );

  useEffect(() => {
    const findBookedDate = filterBookedRoom?.find(
      (data) => data.date === bookingDate
    );
    setAlreadyBooked(findBookedDate);
  }, [filterBookedRoom, bookingDate]);

  const minDate = moment().format("YYYY-MM-DD");

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formName = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const text = form.text.value;
    form.reset();
    const updatedData = {
      name: formName,
      phone,
      date,
      special_request: text,
    };
    console.log(updatedData);
    axios
      .patch(`http://localhost:5000/bookings/${_id}`, updatedData)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          swal(
            "Updated successfully!",
            "Thank you for booking the room.",
            "success"
          );
        }
      });
  };

  //
  return (
    <div className="my-10 max-w-7xl mx-auto">
      {/* right side */}
      <div className="w-3/4 mx-auto px-2 mt-12 bg-[#8b8b8b]">
        <div className="rounded-lg p-3 my-6 space-y-3">
          <h3 className="text-xl lg:text-2xl font-playfair font-semibold uppercase text-[#ff881e] text-center mt-7">
            Updated you booking details
          </h3>
          <p className="text-sm text-amber-300 text-center">
            Please leave your details and let us take care of the rest
          </p>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              defaultValue={name}
              required
              className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
            />
            <input
              type="number"
              name="phone"
              defaultValue={phone}
              placeholder="Mobile Number"
              required
              className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              defaultValue={date}
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              min={minDate}
              required
              className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
            />
            <textarea
              name="text"
              placeholder="Any special request?"
              defaultValue={special_request}
              cols="10"
              rows="5"
              className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
            ></textarea>

            <button
              className={`${
                alreadyBooked
                  ? "btn btn-disabled w-full"
                  : "btn btn-primary w-full mb-8"
              }`}
            >
              Update
            </button>
            {alreadyBooked ? (
              <p className="text-red-400 text-xl font-playfair text-center my-4 font-bold">
                Your chosen date room is not available
              </p>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatedRoom;
