import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} replace to="/login"></Navigate>;
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
