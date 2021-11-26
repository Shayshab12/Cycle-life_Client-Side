import React from "react";
import { useHistory } from "react-router-dom";

const SingleService = ({ service, setBookingSuccess }) => {
  const { _id, image, title, price, description } = service;

  const history = useHistory();
  const exploreDetails = () => {
    history.push(`/placeOrder/${_id}`);
  };
  return (
    <>
      <div className="col-lg-4" data-aos="zoom-in" data-aos-duration="1000">
        <div className="shadow p-3">
          <img src={image} width="250px" height="250px" alt="" />
          <h3>{title}</h3>
          <h5>${price}</h5>
          <p>{description}</p>

          <button onClick={exploreDetails} className="btn btn-success">
            Purchase Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleService;
