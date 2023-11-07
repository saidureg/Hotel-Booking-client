import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
const MyBookingRow = ({ booking }) => {
  const {
    thumbnail,
    room_name,
    name,
    date,
    pricePerNight,
    special_request,
    phone,
  } = booking;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-28 h-28">
              <img src={thumbnail} alt={room_name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{room_name}</div>
            <div className="text-sm opacity-50">$ {pricePerNight}</div>
          </div>
        </div>
      </td>
      <td>
        Name: {name}
        <br />
        <span className="text-xs">Phone: {phone}</span>
        <br />
        <span className="text-xs">
          Request: {special_request ? special_request : "No request"}
        </span>
      </td>
      <td>{date}</td>
      <th>
        <div className="flex flex-col gap-5">
          <button className="px-3 py-2 text-green-600">
            <GrUpdate className="text-xl" />
          </button>
          <button className=" px-3 py-2 text-red-600">
            <AiFillDelete className="text-2xl" />
          </button>
        </div>
      </th>
    </tr>
  );
};

MyBookingRow.propTypes = {
  booking: PropTypes.object.isRequired,
};

export default MyBookingRow;
