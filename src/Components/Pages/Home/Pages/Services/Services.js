import { Alert } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleService from "./SingleService";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://gentle-fortress-64006.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.slice(0, 6));
        setLoading(true);
      });
  }, []);

  return (
    <div className="my-5 text-center container">
      <h1>
        Our Awesome <span className="text-success">Cycles</span>
      </h1>
      <div className="container my-3">
        <div className="row d-flex justify-content-center">
          {loading ? (
            services.map((service) => (
              <SingleService key={service._id} service={service} />
            ))
          ) : (
            <div className="text-center my-3">
              <Spinner animation="border" className="danger" />
            </div>
          )}
        </div>
        <Link to="/cycles">
          <button className="btn btn-outline-success mt-3">More Cycles</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
