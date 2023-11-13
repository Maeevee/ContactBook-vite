import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import PropTypes from "prop-types"; 




const ResdtrictedRout = ({component, redirectTo="/"}) => {
    const {isLogedin} = useAuth();
    return isLogedin ? <Navigate to={redirectTo} replace/> : component
}

ResdtrictedRout.propTypes = {
    component: PropTypes.elementType.isRequired,
    redirectTo: PropTypes.string, 
  };

export default ResdtrictedRout
