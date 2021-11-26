import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import swal from "sweetalert";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    axios
      .post("https://gentle-fortress-64006.herokuapp.com/addReview", data)
      .then((res) => {
        if (res.data.insertedId) {
          swal({
            title: "Review Added successfully!!",
            icon: "success",
          });
          reset();
        }
      });
    console.log(data);
  };

  return (
    <div className="p-3">
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 addService">
        <h3 className=" pt-5 mx-auto">Please add your reviews here!!</h3>
        <input
          {...register("name")}
          value={user.displayName}
          className="p-3 m-2 w-100 rounded-3"
        />
        <br />

        <input
          {...register("reviewDescription")}
          placeholder="type your review"
          className="py-5 m-2 w-100 rounded-3"
        />
        <br />

        <input
          {...register("image", { required: true })}
          placeholder="Image URL"
          className="p-3 m-2 w-100 rounded-3"
        />
        <br />
        <input
          {...register("rating", { required: true })}
          type="number"
          placeholder="Rate Our Service(0-5)"
          className="p-3 m-2 w-100 rounded-3"
        />
        <br />

        <input
          type="submit"
          value="Add Review"
          className="btn btn-warning w-50 mt-2 p-2 ms-2"
        />
      </form>
    </div>
  );
};

export default AddReview;
