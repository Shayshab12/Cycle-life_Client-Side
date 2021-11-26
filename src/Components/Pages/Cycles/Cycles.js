import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

const Cycles = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const exploreDetails = (id) => {
    history.push(`/placeOrder/${id}`);
  };
  useEffect(() => {
    fetch("https://gentle-fortress-64006.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="text-center container mb-5">
      <h2 className="fw-bold text-primary my-3">
        Cycles happens to be Environment Friendly!!
      </h2>
      <h3 className="text-warning mb-4">Buy Now!! 20% discounts this month.</h3>
      <div className="row">
        {loading ? (
          services.map((od) => (
            <>
              <div
                className="col-lg-4"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="shadow p-3">
                  <img src={od.image} width="250px" height="250px" alt="" />
                  <h3>{od.title}</h3>
                  <h5>${od.price}</h5>
                  <p>{od.description}</p>

                  <button
                    onClick={() => exploreDetails(od._id)}
                    className="btn btn-success"
                  >
                    Purchase Now
                  </button>
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="text-center my-3">
            <Spinner animation="border" className="danger" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cycles;
