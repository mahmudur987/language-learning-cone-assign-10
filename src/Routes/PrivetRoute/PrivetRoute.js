import { React, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../UserContext/UserContext";
import { toast } from "react-hot-toast";

const PrivatRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);

  if (loading) {
    return <div> loading </div>;
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    toast.error("please log In first ", { id: 1 });

    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivatRoutes;
