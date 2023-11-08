import moment from "moment";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
const MyBookingRow = ({ booking, handleDelete }) => {
  const {
    _id,
    thumbnail,
    room_name,
    name,
    date,
    pricePerNight,
    special_request,
    phone,
  } = booking;

  const time = moment(date, "YYYYMMDD").fromNow();

  //compare booking date

  const [possible, SetPossible] = useState(false);
  const [passTime, setPassTime] = useState(false);
  useEffect(() => {
    if (
      (time.startsWith("in") && time.endsWith("day")) ||
      (time.startsWith("in") && time.endsWith("days"))
    ) {
      SetPossible(true);
    }

    if (time.startsWith("in")) {
      setPassTime(true);
    }
  }, [time]);

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

      {passTime ? (
        <th className="flex flex-col gap-5">
          <Link to={`/updatedRoom/${_id}`}>
            <button className="px-3 py-2 text-green-600">
              <GrUpdate className="text-xl" />
            </button>
          </Link>

          {possible ? (
            <button
              onClick={() => handleDelete(_id)}
              className=" px-3 py-2 text-red-600"
            >
              <AiFillDelete className="text-2xl" />
            </button>
          ) : (
            <button
              disabled
              className="w-24 bg-red-500 py-1 px-2 rounded text-white"
            >
              Not Allowed
            </button>
          )}
        </th>
      ) : (
        <h2 className="w-24 text-center font-bold text-lg pt-6">
          Enjoy Your Trip
        </h2>
      )}
    </tr>
  );
};

MyBookingRow.propTypes = {
  booking: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
  possible: PropTypes.bool,
  today: PropTypes.bool,
};

export default MyBookingRow;
