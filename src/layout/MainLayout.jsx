import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Header/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
