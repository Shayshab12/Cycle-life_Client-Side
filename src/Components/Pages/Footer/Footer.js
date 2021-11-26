import React from "react";
import css from "./footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light p-5 footer">
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-2">
            <h3>Events</h3>
            <p>NEWYORK</p>
            <p>JAPAN</p>
            <p>INDIA</p>
            <p>AUSTRALIA</p>
            <p>China</p>
          </div>

          <div className="col-lg-2">
            <h3>Pages</h3>
            <p>Home</p>
            <p>About US</p>
            <p>Services</p>
            <p>Cycles</p>
            <p>Blogs</p>
            <p>Contacts</p>
          </div>
          <div className="col-lg-2">
            <h3>Social</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Youtube</p>
            <p>Twitter</p>
          </div>
          <div className="col-lg-2 px-3">
            <h3>Our Apps</h3>
            <hr className="w-25 text-warning" />
            <button className="btn btn-warning">Download Now</button>
          </div>
          <div className="col-lg-4 text-center">
            <div className="text-start">
              <h2>CycleLife WareHouse</h2>
              <h6>
                Address: 685 Lane Drive St. California, 33020 <br />
                Phone: +010 234 7892 34 <br />
                E-mail: info@bermuda.us
              </h6>
            </div>
            <hr />
            <div className="ms-4 text-start">
              <h2 className="">Contact US</h2>
              <p className="icons">
                <a
                  className="socialmedia-link"
                  href="https://www.facebook.com/shayshab.paul.9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="socialmedia-link" href="https://www.twitter.com">
                  <i className="fab fa-twitter" target="_blank"></i>
                </a>

                <a
                  className="socialmedia-link"
                  href="https://www.instagram.com/Shayshabpaul/"
                >
                  <i className="fab fa-instagram" target="_blank"></i>
                </a>
                <a
                  className="socialmedia-link"
                  href="https://www.linkedin.com/in/shayshab-paul-16bb37153/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i className="fab fa-linkedin"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
