import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AppContext);

  if (!isAuth) {
    navigate("/signin");
  } else {
    return children;
  }
};

export default PrivateRoute;
