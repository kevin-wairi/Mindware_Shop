import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticatedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthenticationStatus = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsAuthenticated(true);
      } else {
        navigate("/sign-in");
      }
    };

    checkAuthenticationStatus();
  }, [navigate]);

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <h1>Checking for authentication</h1>
  );
};

export default AuthenticatedRoute;
