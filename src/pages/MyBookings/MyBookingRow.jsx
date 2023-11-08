import moment from "moment";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
const MyBookingRow = ({
  booking,
  handleDelete,
  possible,
  SetPossible,
  today,
  setToday,
}) => {
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
  console.log(time);

  //compare booking date

  useEffect(() => {
    if (
      (time.startsWith("in") && time.endsWith("day")) ||
      (time.startsWith("in") && time.endsWith("days"))
    ) {
      SetPossible(true);
    }
    if (time.startsWith("in")) {
      setToday(false);
    }

    // if (time.startsWith("a")) {
    //   setToday(true);
    // } else {
    //   setToday(false);
    // }
  }, [time, SetPossible, setToday]);
  console.log("possible", possible);
  console.log("today", today);

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
          <Link to={`/updatedRoom/${_id}`}>
            <button className="px-3 py-2 text-green-600">
              <GrUpdate className="text-xl" />
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id, date)}
            className=" px-3 py-2 text-red-600"
          >
            <AiFillDelete className="text-2xl" />
          </button>
        </div>
      </th>
    </tr>
  );
};

MyBookingRow.propTypes = {
  booking: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default MyBookingRow;
