import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/Rooms/RoomDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRouter from "./PrivateRouter";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import Reservation from "../pages/Rooms/Reservation/Reservation";
import ReviewForm from "../components/Review/ReviewForm";
import UpdatedRoom from "../pages/UpdatedRoom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
        loader: () => fetch("https://luxelair-hotel-server.vercel.app/rooms"),
      },
      {
        path: "/roomDetails/:id",
        element: <RoomDetails />,
        loader: ({ params }) =>
          fetch(`https://luxelair-hotel-server.vercel.app/rooms/${params.id}`),
      },
      {
        path: "/updatedRoom/:id",
        element: (
          <PrivateRouter>
            <UpdatedRoom />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://luxelair-hotel-server.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: "/reservation/:id",
        element: (
          <PrivateRouter>
            <Reservation />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://luxelair-hotel-server.vercel.app/rooms/${params.id}`),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRouter>
            <ReviewForm />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://luxelair-hotel-server.vercel.app/rooms/${params.id}`),
      },
      {
        path: "/booking",
        element: (
          <PrivateRouter>
            <MyBookings />
          </PrivateRouter>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Router;
