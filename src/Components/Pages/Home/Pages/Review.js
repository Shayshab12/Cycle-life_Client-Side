import { Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "swiper/css/pagination";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://gentle-fortress-64006.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="text-center container mb-5">
      <h3 className="my-3">Testimonials</h3>
      <div className="row">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={40}
          breakpoints={{
            375: {
              width: 375,
              slidesPerView: 1,
            },
            1500: {
              width: 1400,
              slidesPerView: 2,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {review.map((rw) => (
            <>
              <SwiperSlide>
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div
                      className="col-lg-6 swiper-slide"
                      data-aos="fade"
                      data-aos-duration="3000"
                      // style={{ height: "500px" }}
                    >
                      <div className="shadow p-3">
                        <div className="row">
                          <div className="col-lg-4">
                            <img
                              src={rw.image}
                              width="250px"
                              height="250px"
                              // className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="col-lg-8 p-4">
                            <h3>{rw.name}</h3>
                            <Typography component="legend">Rating</Typography>
                            <Rating
                              name="read-only"
                              value={rw.rating}
                              readOnly
                            />

                            <p className="w-75 mx-auto">
                              {rw.reviewDescription}
                            </p>
                            <Link to="/ride">
                              <button className="btn btn-success">
                                Learn More
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
