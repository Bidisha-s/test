import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { GoPersonFill } from "react-icons/go";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"

import "./navbar.scss";

const Navbar = ({ toggleSidebar, onLogout }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const d = jwtDecode(token);
        setIsAuthenticated(d)
      } catch (error) {
        console.error("invalid token")
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(null);
    onLogout();
    navigate("/signin")
  };
  return (
    <div className="navbar">
      {isAuthenticated ? (
        <>
          <div className="wrapper">
            <HiOutlineMenu className="menu-icon" onClick={toggleSidebar} />

            <div className="right">
              {/* Button */}
              <div className="right-item">
                <button onClick={handleLogout} className="internal-button">log out</button>
              </div>

              {/* Divider */}
              <div className="divider"></div>

              {/* Country */}
              <div className="right-item">
                <span className="country">Country</span>
              </div>

              {/* Divider */}
              <div className="divider"></div>

              {/* Username with logo */}
              <div className="right-item">
                <GoPersonFill size={20} className="user-logo" />
                <span className="username">{isAuthenticated.username}</span>
              </div>

              {/* Divider */}
              <div className="divider"></div>

              {/* Notification icon */}
              <div className="right-item">
                <HiOutlineBell className="notification-icon" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link to="/signin">Signin</Link>
        </>
      )}

    </div>
  );
};

export default Navbar;
