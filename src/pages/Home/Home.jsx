import { Helmet } from "react-helmet-async";
import Review from "../../components/Review/Review";
import Banner from "../../components/shared/Header/Banner/Banner";
import Newsletter from "./Newsletter";
import FeaturedRooms from "./FeaturedRooms/FeaturedRooms";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>LuxeLair - Amazing Deluxe Hotel</title>
      </Helmet>
      <Banner />
      <FeaturedRooms />
      <Review />
      <Newsletter />
    </div>
  );
};

export default Home;
