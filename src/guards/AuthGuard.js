import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingScreen from "../components/LoadingScreen";
AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuth();
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);
  useEffect(() => {
    if (!isAuthenticated && isInitialized) {
      if (pathname !== requestedLocation) {
        setRequestedLocation(pathname);
      }
      navigate("/login");
    }
  }, [
    isAuthenticated,
    pathname,
    requestedLocation,
    setRequestedLocation,
    navigate,
    isInitialized,
  ]);
  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
