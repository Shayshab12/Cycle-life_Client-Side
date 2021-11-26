import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import swal from "sweetalert";

const AllProducts = () => {
  const { user } = useAuth();
  const [orderData, setOrderdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(`https://gentle-fortress-64006.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrderdata(data);
        setIsLoading(true);
      });
  }, [user]);
  const handleDelProduct = (id) => {
    const proceed = window.confirm(
      "Are you sure,you wanna delete this product?"
    );
    if (proceed) {
      const url = `https://gentle-fortress-64006.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            swal("Delete successful");
            const remainingOrder = orderData.filter((ord) => ord._id !== id);
            setOrderdata(remainingOrder);
          }
        });
    }
  };
  return (
    <div className="text-center container my-3 bg-white">
      <h1>Cycles</h1>
      <h3 className="mb-3">Total Products: {orderData.length}</h3>
      <div className="row">
        {isLoading ? (
          orderData?.map((od) => (
            <>
              <div
                className="col-lg-4"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                <div key={od._id} className="card mb-3 shadow">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={od.image}
                        className="w-100 rounded-start"
                        height="100%"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 info">
                      <div className="card-bordery mt-5 ">
                        <h3 className="card-title">{od.title}</h3>
                        <p className="card-text text-dark">{od.description}</p>
                        <h2 className="card-text text-dark">
                          <span className="">{od.name}</span>
                        </h2>
                        <p className="card-text text-danger">
                          <small className="text-muted">
                            price: ${od.price}
                          </small>
                        </p>

                        <button
                          onClick={() => handleDelProduct(od._id)}
                          className="btn btn-warning mb-2"
                        >
                          Remove Product
                        </button>
                      </div>
                    </div>
                  </div>
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

export default AllProducts;
