import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://luxelair-hotel-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return reviews;
};

export default useReviews;
