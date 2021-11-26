import React from "react";
import { Link } from "react-router-dom";
import service from "./Services/service.css";
const Banner = () => {
  return (
    <div
      className="bg-light banner"
      data-aos="zoom-in"
      data-aos-duration="1300"
    >
      <div className="container p-5">
        <div className="row d-flex  align-items-center">
          <div className="col-lg-6 text-white">
            <h1 className="mb-3 fw-bold text-start">Here Today,Gone Today</h1>
            <p className="text-start text-light">
              Cycle life performance of the Ni-Zn cell appears to be related to
              separator’s mass transport properties; also, the lower the
              electrolytic resistivity and higher water permeability, the longer
              is the cycle life.
            </p>
            <Link to="cycles">
              <button className="btn-warning btn text-start">
                Explore Cycles
              </button>
            </Link>
          </div>
          <div className="col-lg-6">
            {/* <img
              src="https://www.bing.com/images/blob?bcid=S-kqcONXPnEDHg"
              className="w-100 rounded ms-5"
              height=""
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
