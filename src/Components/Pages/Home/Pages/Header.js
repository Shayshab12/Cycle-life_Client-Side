import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import logo from "../../../../images/Group 33092.png";

const Header = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const history = useHistory();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark bg-warning p-2" to="/">
            <h1>BICYCLE</h1>
            <small>WAREHOUSE</small>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll p-3">
              <li className="nav-item me-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/cycles">
                  Cycles
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/ride">
                  Ride Unleashed
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/dashboard">
                  DashBoard
                </Link>
              </li>

              {!user.email ? (
                <>
                  <li className="nav-item me-1">
                    <Link className="nav-link" to="/login">
                      <button className="btn btn-success px-3">Login</button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      <button className="btn btn-success px-3">Sign Up</button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/logOut"
                      onClick={() => logout(location, history)}
                    >
                      <button className="btn-warning btn">SignOut</button>
                    </Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link" to="/">
                      <span className="fw-bold">{user.displayName}</span>
                    </Link>
                  </li>

                  {/* <img
                    src={user?.photoURL}
                    className="rounded-circle"
                    style={{ width: "30px" }}
                    alt=""
                  /> */}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
