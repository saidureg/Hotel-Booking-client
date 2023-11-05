import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Header/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
