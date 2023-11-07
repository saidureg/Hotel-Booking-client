import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import moment from "moment";
import { Helmet } from "react-helmet-async";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const RoomDetails = () => {
  const room = useLoaderData();
  const {
    name,
    description,
    thumbnail,
    pricePerNight,
    features,
    facilities,
    size,
    specialOffers,
  } = room;

  const handleBooking = (e) => {
    e.preventDefault();
    e.target.reset();
    swal(
      "Event Booking successfully",
      "Our team will contact you soon",
      "success"
    );
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
            <h3 className="text-xl mt-2 text-[#212529]">What Our Guests Are Saying</h3>
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
            <form onSubmit={handleBooking}>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                required
                className="py-3 px-4 w-full bg-[#e9ecef] bg-opacity-90 rounded text-lg mb-2"
              />
              <input
                type="date"
                name="date"
                placeholder="Date"
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
              <button className="btn btn-outline text-white flex w-full text-lg my-4">
                Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
