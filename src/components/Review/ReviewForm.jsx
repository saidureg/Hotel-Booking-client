import swal from "sweetalert";
import moment from "moment";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const ReviewForm = () => {
  const { user } = useContext(AuthContext);
  const room = useLoaderData();
  const { _id, name, thumbnail } = room;
  const time = moment().format("YYYY-MM-DD");
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const text = form.text.value;
    const review = {
      rating,
      text,
      name: user?.displayName,
      email: user?.email,
      room_id: _id,
      time,
    };

    console.log(review);
    axios.post("http://localhost:5000/reviews", review).then((res) => {
      e.target.reset();
      console.log(res.data);
      if (res.data.insertedId) {
        swal(
          "Booking successfully!",
          "Thank you for booking the room.",
          "success"
        );
      }
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto my-12">
      <p className="text-center text-xl text-gray-700 my-5">
        Where Happy Memories Are Shared
      </p>
      <div className="flex gap-8">
        <div className="w-full lg:w-1/2 py-10">
          <img className="w-full h-full" src={thumbnail} alt={name} />
        </div>
        <form onSubmit={handleReview} className="card-body w-full lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating"
              min={0}
              max={5}
              step={0.1}
              name="rating"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Comment</span>
            </label>
            <textarea
              name="text"
              placeholder="Comment"
              required
              className="input input-bordered"
              id=""
              cols="30"
              rows="30"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
