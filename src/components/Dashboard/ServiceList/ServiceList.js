import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../App";
import ServiceCard from "../ServiceCard/ServiceCard";
import Sidebar from "../Sidebar/Sidebar";

const ServiceList = () => {
  const [servicesList, setServicesList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      "https://polar-sierra-71022.herokuapp.com/servicesOrdered?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setServicesList(data));
  }, []);
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <section style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div className="col-md-10 p-4 pr-5 ml-auto">
        <div className="row mb-5 justify-content-md-center">
          <center>
            <h1 className="mt-5 text-center">Ordered Services</h1>
          </center>
        </div>
        <div className="row">
          {servicesList.map((srvclst) => (
            <ServiceCard key={srvclst._id} service={srvclst}>
              {srvclst.orderedService}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
