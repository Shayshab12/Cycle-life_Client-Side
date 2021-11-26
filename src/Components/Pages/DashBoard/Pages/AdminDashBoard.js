import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import swal from "sweetalert";

const AdminDashBoard = () => {
  const { user } = useAuth();
  const [userdata, setUserdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updated, setUpdated] = useState({});
  useEffect(() => {
    fetch(`https://gentle-fortress-64006.herokuapp.com/adminDashBoard`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserdata(data);
        setIsLoading(true);
      });
  }, [user, updated]);
  const approveStatus = (id) => {
    const url = `https://gentle-fortress-64006.herokuapp.com/bookings/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal({
            title: "Approved Successfully ",
            icon: "success",
          });
          setUpdated(data);
          // setUsers(data);
        }
      });
  };
  const handleDelUser = (id) => {
    if (user.email) {
      const proceed = window.confirm(
        "Are you sure,you wanna delete this item?"
      );
      if (proceed) {
        const url = `https://gentle-fortress-64006.herokuapp.com/bookings/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("Data Deleted successfully...");
              const remainingOrder = userdata.filter((od) => od._id !== id);
              setUserdata(remainingOrder);
            }
          });
      }
    } else {
      swal("please login");
    }
  };
  return (
    <div>
      <div
        className="col-lg-10 col-12 pe-5 ps-4"
        style={{ backgroundColor: "#e6ffff", height: "100vh" }}
      >
        <div
          style={{ borderRadius: "15px" }}
          className="px-5 bg-white mt-4 table-responsive"
        >
          <table className="table table-white table-hover">
            <thead style={{ backgroundColor: "#F5F6FA" }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Place List</th>
                <th scope="col">Status</th>
                <th scope="col">Approve</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            {isLoading ? (
              userdata?.map((user) => (
                <tbody key={user._id}>
                  <tr>
                    <th scope="row">{user.name}</th>
                    <td>{user.email}</td>
                    <td>{user.number}</td>
                    <td>${user.price}</td>
                    <td>{user.status}</td>
                    <td>
                      {" "}
                      <button
                        className="btn btn-warning"
                        onClick={() => approveStatus(user._id)}
                      >
                        Click
                      </button>{" "}
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDelUser(user._id)}
                        type="submit"
                      >
                        DEL
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div className="text-center my-3">
                <Spinner animation="border" className="danger" />
              </div>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
