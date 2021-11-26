import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";

const Purchase = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState({});
  const { _id } = useParams();

  const [bookingInfo, setBookingInfo] = useState();
  useEffect(() => {
    fetch(`https://gentle-fortress-64006.herokuapp.com/services/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
        console.log(data);
      });
  }, [_id]);

  const handleSubmit = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    console.log(newInfo);
    newInfo[field] = value;
    setBookingInfo(newInfo);
    // e.target.value = "";
    e.preventDefault();
  };
  const handleBookingSubmit = (e) => {
    // collect data
    const bookings = {
      ...bookingInfo,
      price: order.price,
      title: order.title,
      description: order.description,
      image: order.image,
      name: user.displayName,
      email: user.email,
      status: "pending",
    };
    // send to the server
    fetch("https://gentle-fortress-64006.herokuapp.com/addbookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Successfully Purchased!!",
            icon: "success",
          });
          e.target.reset();
        }
      });

    e.preventDefault();
  };
  return (
    <div className="text-center mt-5">
      <div className="row g-0 d-lg-flex justify-content-center">
        <div className="col-lg-4">
          <div
            className="card shadow-lg mx-auto mb-2 text-center text-dark p-3"
            style={{ width: "18rem" }}
            data-aos="flip-down"
            data-aos-duration="1500"
          >
            <img
              src={order.image}
              className="card-img-top coverImg"
              height="260px"
              alt="..."
            />
            <div className="card-body">
              <h1 className="card-title">{order.title}</h1>

              <p className="card-text text-muted">{order.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h3>Shipping Information</h3>
          <form onSubmit={handleBookingSubmit} className="p-3 w-50 mx-auto">
            <input
              type="text"
              className="p-2 m-2 w-100"
              placeholder=""
              value={order.title}
              required
            />
            <input
              type="text"
              className="p-2 m-2 w-100"
              placeholder=""
              value={user.displayName}
              required
            />
            <input
              type="text"
              className="p-2 m-2 w-100"
              placeholder=""
              value={order.description}
              required
            />
            <input
              type="text"
              className="p-2 m-2 w-100"
              placeholder="Address"
              name="address"
              onBlur={handleSubmit}
              required
            />
            <input
              className="p-2 m-2 w-100"
              placeholder="Contact Number"
              type="number"
              name="number"
              onChange={handleSubmit}
              required
            />
            <input
              type="email"
              className="p-2 m-2 w-100"
              placeholder=""
              value={user.email}
              required
            />
            <input
              type="text"
              alt=""
              className="p-2 m-2 w-100"
              placeholder=""
              value={order.price}
              required
            />
            <input
              type="text"
              className="p-2 m-2 w-100"
              placeholder=""
              required
              value="Pending"
            />
            <br />

            <input
              type="submit"
              value="Place Order"
              className="btn btn-info w-50"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
