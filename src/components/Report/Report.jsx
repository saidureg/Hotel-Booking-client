const Report = () => {
  const handleReport = (e) => {
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

    axios
      .post("https://luxelair-hotel-server.vercel.app/report", review)
      .then((res) => {
        e.target.reset();
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
    <div>
      <form onSubmit={handleReport} className="card-body w-full lg:w-1/2">
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
  );
};

export default Report;
