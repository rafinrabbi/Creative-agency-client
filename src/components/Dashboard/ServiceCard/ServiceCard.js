import React from "react";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  const { image, orderedService, description } = props.service;
  return (
    <div style={{ marginTop: 50 }} className="col-md-6">
      <div style={{ padding: 30 }} className="card serviceList-card">
        <div className="d-flex justify-content-between">
          <img className="service-image" src={image} alt="" />
          <button className="btn btn-brand bg-success text-white">
            On Going
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title"> {orderedService} </h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
