import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/LuxeLair-logo.png";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        return swal(
          "Thanks for visiting the site",
          "Log-out successful",
          "warning"
        );
      })
      .catch(() => {
        return swal("Oops!", "Something went wrong", "error");
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/booking">Booking</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-neutral text-neutral-content">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <img className="h-[80px] lg:h-[100px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg text-[#E1BE64] px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end md:mr-5">
                <div className="flex items-center gap-1">
                  <p>{user?.displayName}</p>
                  <label tabIndex={0} className="avatar rounded-full">
                    <div className="w-[50px] ">
                      <img
                        className="w-full rounded-full bg-white"
                        src="https://i.ibb.co/WDcF9sQ/avatar.png"
                      />
                    </div>
                  </label>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-1 divide-y-2 space-y-4 md:p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-48 md:w-52 lg:w-56"
                >
                  <li>
                    <a className="gap-3 text-sm md:text-base lg:text-lg">
                      <CgProfile /> Profile
                    </a>
                  </li>
                  <li>
                    <a className="gap-3 text-base md:text-lg lg:text-xl">
                      <AiOutlineHome /> Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="gap-3 text-base md:text-lg lg:text-xl">
                      <AiOutlineSetting /> Settings
                    </a>
                  </li>
                  <div className=" px-3 pt-2 text-base md:text-lg lg:text-xl">
                    <button
                      onClick={handleLogOut}
                      className="btn hover:text-[#7B014C] bg-[#7B014C] text-[#F1EAEA]"
                    >
                      <TbLogout className="text-xl" /> Log Out
                    </button>
                  </div>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login">
              <button className="btn border-none text-lg hover:text-[#E1BE64] bg-[#E1BE64] text-[#F1EAEA]">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
