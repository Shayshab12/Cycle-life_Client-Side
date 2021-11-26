import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="my-5 text-center">
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?size=626&ext=jpg"
        alt=""
      />
      <p className="text-dark">Nothing Found!!</p>
      <h3>Please go to the home page</h3>
      <NavLink to="/home">
        <button className="btn btn-warning">Go to Home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
