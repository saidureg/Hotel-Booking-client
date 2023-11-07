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
        loader: () => fetch("http://localhost:5000/rooms"),
      },
      {
        path: "/roomDetails/:id",
        element: <RoomDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/booking",
        element: (
          <PrivateRouter>
            <MyBookings />
          </PrivateRouter>
        ),
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
