import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Header/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
