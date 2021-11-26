//user added list
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import DashHome from "./Pages/DashHome";
import AdminRoute from "../../Routes/AdminRoute";
import AddService from "./Pages/AddService";
import useAuth from "../../../hooks/useAuth";
import MakeAdmin from "./Pages/MakeAdmin";
import AdminDashBoard from "./Pages/AdminDashBoard";
import AddReview from "./Pages/AddReview";
import Payment from "./Pages/Payment";
import AllProducts from "./Pages/AllProducts";
import CSS from "./dashboard.css";

const DashBoard = () => {
  const location = useLocation();
  const history = useHistory();

  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  return (
    <>
      <div className="mx-3 bg-light">
        <div className="row " style={{ paddingBottom: "10%" }}>
          <div className="col-lg-2 col-12 mt-5 " style={{ height: "100%" }}>
            {admin && (
              <>
                <p className="fw-bold  ">
                  <>
                    <Link
                      className="text-decoration-none"
                      to={`${url}/makeAdmin`}
                    >
                      <span className="mt-3">Make Admin </span>
                    </Link>
                  </>
                </p>
                <p className="fw-bold ">
                  <>
                    <Link
                      className="text-decoration-none"
                      to={`${url}/adminDashBoard`}
                    >
                      <span className="mt-3 ">Admin DashBoard</span>
                    </Link>
                  </>
                </p>
                <p className="fw-bold ">
                  <>
                    <Link
                      className="text-decoration-none"
                      to={`${url}/addService`}
                    >
                      <span className="fs-4 fw-bold">+ </span> Add Service
                    </Link>{" "}
                  </>
                </p>
                <p className="fw-bold ">
                  <>
                    <Link
                      className="text-decoration-none"
                      to={`${url}/manageProducts`}
                    >
                      Manage Products
                    </Link>{" "}
                  </>
                </p>
              </>
            )}

            {!admin && (
              <>
                <p className="fw-bold ">
                  <Link className="text-decoration-none" to={`${url}`}>
                    My Orders
                  </Link>{" "}
                </p>
                <p className="fw-bold ">
                  <Link
                    className="text-decoration-none"
                    to={`${url}/addReview`}
                  >
                    <span className=" fw-bold">+ </span> Add Testimonials
                  </Link>{" "}
                </p>
                <p className="fw-bold ">
                  <Link className="text-decoration-none" to={`${url}/payment`}>
                    <span className=" fw-bold">+ </span> Payment
                  </Link>{" "}
                </p>{" "}
              </>
            )}

            <hr />
            <p className="fw-bold ">
              <Link className="text-decoration-none" to="/home">
                <span className="fs-4 fw-bold"># </span> Book More Services
              </Link>
            </p>
            <p className="fw-bold ">
              <Link
                className="text-decoration-none"
                onClick={() => logout(location, history)}
                to="/home"
              >
                LogOUT
              </Link>
            </p>
          </div>
          <div
            className="col-lg-10 col-12 px-3"
            style={{ backgroundColor: "#e6ffff", height: "100%" }}
          >
            <div
              style={{ borderRadius: "15px" }}
              className="px-5 bg-white mt-4 table-responsive "
            >
              <Switch>
                <Route exact path={path}>
                  <DashHome />
                </Route>
                <Route path={`${path}/addReview`}>
                  <AddReview />
                </Route>
                <Route path={`${path}/payment`}>
                  <Payment />
                </Route>

                <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin />
                </AdminRoute>
                <AdminRoute path={`${path}/adminDashBoard`}>
                  <AdminDashBoard />
                </AdminRoute>
                <AdminRoute path={`${path}/addService`}>
                  <AddService />
                </AdminRoute>

                <AdminRoute path={`${path}/manageProducts`}>
                  <AllProducts />
                </AdminRoute>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
