import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://gentle-fortress-64006.herokuapp.com/addService", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            title: "Service Added successfully!!",
            icon: "success",
          });
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div className="my-3 p-3 back" data-aos="fade" data-aos-duration="2000">
      <h1 className="mt-5 text-center text-info ">Add Service</h1>
      {/* <div className="login-box width m-auto mt-1  p-5 border">
        <div className="event-box  p-3  d-flex justify-content-center align-items-center"> */}
      <div className="addService">
        <form onSubmit={handleSubmit(onSubmit)} className="p-3">
          <input
            {...register("title")}
            placeholder="Title"
            className="p-3 m-2 w-100 rounded-3"
          />
          <br />
          <input
            {...register("price")}
            type="number"
            placeholder="Service Price"
            className="p-3 m-2 w-100 rounded-3"
          />
          <br />
          <input
            {...register("description")}
            placeholder="Description"
            className="p-3 m-2 w-100 rounded-3"
          />
          <br />

          <input
            {...register("image", { required: true })}
            placeholder="Image URL"
            className="p-3 m-2 w-100 rounded-3"
          />
          <br />

          <input
            type="submit"
            value="Add Service"
            className="btn btn-warning w-50 mt-2 p-2 ms-2"
          />
        </form>
        {/* </div>
        </div> */}
      </div>
    </div>
  );
};

export default AddService;
