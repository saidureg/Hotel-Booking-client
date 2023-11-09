import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import { useEffect, useState } from "react";
const RoomCard = ({ room }) => {
  const [roomReviews, setRoomReviews] = useState([]);
  const {
    _id,
    name,
    thumbnail,
    pricePerNight,
    rating,
    reviews: reviewsDef,
  } = room;

  const reviews = useReviews();
  console.log(reviews);
  const reviewsForRoom = reviews?.filter((review) => review.room_id === _id);
  console.log("reviewsForRoom", reviewsForRoom);

  useEffect(() => {
    const filterReview = reviewsForRoom?.filter(
      (room) => room?.room_id === _id
    );
    setRoomReviews(filterReview);
  }, [_id, reviewsForRoom]);
  console.log(roomReviews);

  return (
    <Link to={`/roomDetails/${_id}`}>
      <div className="relative grid h-[40rem] w-full flex-col items-end overflow-hidden rounded bg-clip-border">
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent"
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 w-full h-full to-bg-black-10 hover:bg-gradient-to-t from-black/60 via-black/50"></div>
          <div className="absolute top-0 right-0 flex gap-2 items-center text-white w-[250px] bg-black/60 rounded-l-xl p-2">
            <h4 className="block font-montserrat text-xl px-5 py-2 font-medium border rounded-b-full rounded-l-full border-amber-300">
              {rating}/5
            </h4>
            <h6 className="block font-montserrat text-xl font-semibold">
              {reviewsDef?.length} Reviews
            </h6>
          </div>
        </div>
        <div className="text-white relative p-3  bg-black/60 ">
          <div className="flex justify-between items-center">
            <h3 className="block font-playfair text-4xl font-medium leading-[1.5] tracking-normal antialiased">
              {name}
            </h3>
            <p className="block font-montserrat text-lg antialiased font-semibold leading-snug tracking-normal border-l-2 pl-6">
              $ {pricePerNight} <br /> room rate / night
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

RoomCard.propTypes = {
  room: PropTypes.object.isRequired,
};

export default RoomCard;
