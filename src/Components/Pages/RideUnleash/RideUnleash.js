import React from "react";
import css from "./ride.css";

const data = [
  {
    img: "https://dk8nafk1kle6o.cloudfront.net/Images/PageBuilder/PageElements/bottrill_thumb_1636491769.jpg",
    title: "THE WINNING FORMULA",
    quote: "KNOWN AS 'THE FLYING POSTMAN'...",
  },
  {
    img: "https://dk8nafk1kle6o.cloudfront.net/Images/PageBuilder/PageElements/yu_hsiao_triathlete_thumbnail_1632965620.jpg",
    title: "CYCLING HOME",
    quote: "EXOTIC RIDE FROM CHINA...",
  },
  {
    img: "https://dk8nafk1kle6o.cloudfront.net/Images/PageBuilder/PageElements/nice_guys_1630596956.jpg",
    title: "NICE GUYS FINISH FIRST",
    quote: "THREE THOUSAND MILES AND 12 STATES COVERED",
  },
  {
    img: "https://dk8nafk1kle6o.cloudfront.net/Images/PageBuilder/PageElements/isos_casanare_marcelo_thumb_1626477168.jpg",
    title: "IN SEARCH OF THE SUMMIT: PARRIS II",
    quote: "COLUMBIAN DOWNHILL RACER MARCO'...",
  },
  {
    img: "https://dk8nafk1kle6o.cloudfront.net/Images/PageBuilder/PageElements/tim_searle_bacon_thumb_1625073713.jpg",
    title: "CYCLING HOME",
    quote: "EXOTIC RIDE FROM CHINA...",
  },
  {
    img: "https://dk8nafk1kle6o.cloudfront.net/Images/PageBuilder/PageElements/cycling_home_thumb_1623270927.jpg",
    title: "20000 KILOMETERS AND COUNTING",
    quote: "CYLING IS MY PASSION",
  },
];

const RideUnleash = () => {
  return (
    <div className="text-center mb-5">
      <div
        className="top d-flex align-items-center justify-content-center "
        data-aos="fade"
        data-aos-duration="2000"
      >
        <div className="text-white">
          <h1 className="text-white title">RIDE UNLIMITED</h1>
          <h3>
            “Man, you weigh a freaking ton," he told me. "What've you been
            eating, rocks?"
          </h3>
        </div>
      </div>
      <div className="container my-3">
        <p className="w-75 mx-auto">
          Each of us has our own challenges, goals and reasons to ride. At
          Giant, our purpose is to help you unleash your full potential no
          matter the chosen path. We do this with our products, our people and
          the stories we share. Come feel what it’s like to be limitless. Come
          ride with us. #RideUnleashed
        </p>
        <p className="mx-auto text-primary">Share</p>
      </div>
      <hr className="mx-auto w-50 my-4" />
      <div className="container">
        <div className=" row g-1">
          {data.map((pd) => (
            <>
              <div
                className="col-lg-6"
                data-aos="fade"
                data-aos-duration="1000"
              >
                <div className="imageContainer filter">
                  <img className="w-100 images" src={pd.img} alt="" />
                  <div className="caption center text-center">
                    <h5 className="description2">{pd.title}</h5>

                    <p className="title">{pd.quote}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RideUnleash;
