import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHdd,
  faComments,
  faPlus,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";
import { HashLink } from "react-router-hash-link";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://polar-sierra-71022.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <Link to="/">
          <img style={{ marginBottom: 30 }} src={logo} alt="" />
        </Link>

        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon className="iconColor" icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon className="iconColor" icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        {isAdmin ? (
          <div>
            <li>
              <Link to="/serviceListAdmin" className="text-white">
                <FontAwesomeIcon className="iconColor" icon={faList} />{" "}
                <span>Service List Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/addService" className="text-white">
                <FontAwesomeIcon className="iconColor" icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <FontAwesomeIcon className="iconColor" icon={faUserPlus} className="iconColor" /> <span>Make Admin</span>
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <HashLink to="/#services" className="text-white">
                <FontAwesomeIcon className="iconColor" icon={faShoppingCart} /> <span>Order</span>
              </HashLink>
            </li>
            <li>
              <Link to="/serviceList" className="text-white">
                <FontAwesomeIcon className="iconColor" icon={faHdd} /> <span>Service List</span>
              </Link>
            </li>
            <li>
              <Link to="/postReview" className="text-white">
                <FontAwesomeIcon className="iconColor" icon={faComments} /> <span>Review</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon className="iconColor" icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
