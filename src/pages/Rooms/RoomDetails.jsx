import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import moment from "moment";
import { Helmet } from "react-helmet-async";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const RoomDetails = () => {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const [formName, setFormName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [bookingData, setBookingData] = useState("");
  const {
    _id,
    name,
    description,
    thumbnail,
    pricePerNight,
    features,
    facilities,
    size,
    specialOffers,
  } = room;

  const handleFormValue = (e) => {
    e.preventDefault();
    const form = e.target;
    const formName = form.name.value;
    setFormName(formName);
    const phone = form.phone.value;
    setPhone(phone);
    const date = form.date.value;
    setDate(date);
    const text = form.text.value;
    setText(text);
    form.reset();
  };

  const handleBooking = () => {
    const email = user?.email;
    if (formName === "" && phone === "" && date === "") {
      return swal("Oops!", "You have to fill all the fields", "error");
    } else {
      const data = {
        name: formName,
        room_name: name,
        room_Id: _id,
        email,
        thumbnail,
        phone,
        date,
        special_request: text,
        pricePerNight,
      };
      console.log(data);
      console.log("bookingData", bookingData);
      axios.post("http://localhost:5000/bookings", data).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          swal(
            "Booking successfully!",
            "Thank you for booking the room.",
            "success"
          );
        }
      });

      setFormName("");
      setPhone("");
      setDate("");
      setText("");
    }
  };

  const minDate = moment().format("YYYY-MM-DD");

  return (
    <div className="my-10">
      <Helmet>
        <title>{name} - LuxeLair</title>
      </Helmet>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 mb-8">
        {/* left side */}
        <div className="relative flex w-full lg:w-3/4 flex-col rounded-xl bg-white bg-clip-border lg:shadow-md">
          <div className="relative m-0 shrink-0 overflow-hidden rounded-xl p-4 bg-white bg-clip-border">
            <img
              src={thumbnail}
              alt={name}
              className="max-h-[70vh] w-full object-cover rounded-xl"
            />
            <div className="flex justify-between">
              <p className="my-4 px-2 text-lg text-gray-400 font-montserrat font-medium">
                {size}
              </p>
              <h6 className="my-4 px-2 text-lg text-gray-400 font-montserrat font-medium">
                {specialOffers ? specialOffers : "No Special Offers"}
              </h6>
            </div>
          </div>
          <div className="p-6 border border-[#deaa86]">
            <div className="flex justify-between items-center border-t-2 border-b-2 border-[#ff881e]">
              <h4 className="py-3 px-1 block text-xl md:text-4xl font-playfair font-semibold leading-snug tracking-normal text-gray-900 antialiased">
                {name}
              </h4>
              <p className="text-right text-2xl py-2 px-2 text-[#deaa86] font-bold font-montserrat">
                <span className="block text-xs font-medium">
                  Promotional Rate | VAT & SC Inclusive
                </span>
                ${pricePerNight} / night
              </p>
            </div>
            <p className="my-8 block text-base font-normal leading-relaxed text-gray-500 antialiased">
              {description}
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className=" w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-700 my-4 py-5 border-b-2 border-[#ff881e]">
                  Room Feature:
                </h3>
                <ul className="text-gray-700">
                  {features?.map((moreServices) => (
                    <>
                      <li className="flex items-center gap-2 text-xl ml-8 mb-2">
                        <IoCheckmarkCircleSharp className="text-red-500" />
                        {moreServices}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className=" w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-700 my-4 py-5 border-b-2 border-[#ff881e]">
                  Complementary Benefits:
                </h3>
                <ul className="text-gray-700">
                  {facilities?.map((moreServices) => (
                    <>
                      <li className="flex items-center gap-2 text-xl ml-8 mb-2">
                        <IoCheckmarkCircleSharp className="text-red-500" />
                        {moreServices}{" "}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-3/4 mx-auto lg:w-1/4">
          <div className="border border-[#ff881e] p-3 rounded">
            <h3 className="text-xl mt-2 text-[#212529]">
              What Our Guests Are Saying
            </h3>
            <table className="border-collapse border border-[#c1a26c] w-full mt-2">
              <thead>
                <tr>
                  <th className="border border-[#dee2e6] p-3 text-gray-700">
                    Regular
                  </th>
                  <th className="border border-[#dee2e6] p-3 text-gray-700">
                    ${pricePerNight}
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="bg-[#ff881e] border border-[#ff881e] rounded p-3 my-6 space-y-3">
            <h3 className="text-white text-center text-2xl md:text-3xl font-semibold uppercase">
              Booking Query
            </h3>
            <p className="text-sm text-gray-700">
              Please leave your details and let us take care of the rest
            </p>
            <form onSubmit={handleFormValue}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <input
                type="number"
                name="phone"
                placeholder="Mobile Number"
                required
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={bookingData}
                onChange={(e) => setBookingData(e.target.value)}
                min={minDate}
                required
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <textarea
                name="text"
                placeholder="Any special request?"
                cols="10"
                rows="5"
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              ></textarea>

              <button
                className="btn btn-outline text-white flex w-full text-lg my-4"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Book Now
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div className="border py-4 px-6 border-[#ff881e] space-y-2">
                    <h3 className="text-[#deaa86] text-xl font-playfair text-center uppercase">
                      Your Info
                    </h3>
                    <p className="py-3 text-gray-400 font-semibold font-playfair">
                      Name : <span>{formName}</span>
                    </p>
                    <p className=" text-[#8b8b8b] font-semibold font-playfair">
                      Email : <span>{user?.email}</span>
                    </p>
                  </div>
                  <div className="divide-y-2">
                    <h6 className="text-[#deaa86] text-2xl font-playfair py-2 text-center uppercase">
                      Booking Details
                    </h6>
                    <h3 className="font-bold text-2xl py-2 font-playfair uppercase">
                      Selected Room
                    </h3>
                    <div className="py-4 md:text-lg font-medium flex justify-between items-center font-montserrat">
                      <p className="text-[#8b8b8b]">
                        Room Type : <span>{name}</span>
                      </p>
                      <p className="text-[#deaa86] ">
                        Price: $ {pricePerNight} / night
                      </p>
                    </div>

                    <p className="py-4 text-[#8b8b8b] text-lg md:text-2xl font-montserrat">
                      Booking Data : <span>{bookingData}</span>
                    </p>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button
                        onClick={handleBooking}
                        className="btn btn-primary"
                      >
                        Booking
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
