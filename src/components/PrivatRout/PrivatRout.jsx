import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

import { useAuth } from "../../hooks/useAuth";

const PrivatRout = ({ component, redirectTo = "/" }) => {
  const { isLogedin, isRefreshing, token } = useAuth();
  const shouldRedirect = !isLogedin && !isRefreshing && !token;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : component;
};

PrivatRout.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string, 
};

export default PrivatRout;

