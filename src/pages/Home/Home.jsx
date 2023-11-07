import { Helmet } from "react-helmet-async";
import Review from "../../components/Review/Review";
import Banner from "../../components/shared/Header/Banner/Banner";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>LuxeLair - Amazing Deluxe Hotel</title>
      </Helmet>
      <Banner />
      <h3 className="font-playfair">Home</h3>
      <Review />
      <Newsletter />
    </div>
  );
};

export default Home;
