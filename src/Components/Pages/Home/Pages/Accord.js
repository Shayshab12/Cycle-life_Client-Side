import React from "react";

const Accord = () => {
  return (
    <div className="container mb-5 px-5 client-review bg-light">
      <h1 className="feature-title text-center mt-5 py-5">
        <span className="first-color">Frequently Asked</span>{" "}
        <span className="second-color">Questions</span>
      </h1>
      <div className="row d-lg-flex justify-content-around align-items-center">
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img
            className="img-fluid"
            src="https://images.unsplash.com/flagged/photo-1563192735-db5ed42d28c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 ">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  What are the most important things I should know about riding
                  a Cycle?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <strong>Safety First!</strong> Always obey the rules of the
                  road. Obey all traffic signals, signs, and laws. Get in the
                  mindset of “driving” your Cycle—not just “riding” your Cycle.
                  This will help you be a more focused and legally compliant
                  Cycle rider.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  How can I tell if my helmet is old and I need a new one?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <strong>Arai helmets</strong> are handmade to the highest
                  possible standard, and although after many years the outside
                  shell can look as good as new, it’s the EPS polystyrene liner
                  that loses its ability to absorb impact over time. Arai
                  recommend replacing your helmet 7 years after date of
                  manufacture and 5 years after date of purchase to maintain the
                  maximum levels of protection.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  My Cycle has been in storage is it safe to ride?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <strong>Weather also has a lot to do with this</strong>{" "}
                  Weather also has a lot to do with this, and if you live in a
                  place with harsh winters, it may be months before you can
                  safely ride your motorcycle. However, you should never let
                  your motorcycle sit for longer than a month if it has not been
                  properly stored.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  What rules should I follow when riding my Cycle?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  One of the most basic biking rules is this: When you are
                  riding your Cycle, you need to act like you’re driving a car.
                  And when you are walking your Cycle, you need to act like a
                  pedestrian. That means you ride your Cycle in the same
                  direction as the traffic <strong>(not against it).</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  What should yoou choose us for purchasing cycles?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  We provide the best quality service in the city. We import
                  cycles from populer countries around the world. These cycles
                  are manufactured in a industry like Legion or Veloce.Also we
                  ensure safe transportation so that customer do not feel bad
                  about our service. Happy Cycling...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accord;
