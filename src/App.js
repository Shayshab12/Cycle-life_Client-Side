import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Header from "./Components/Pages/Home/Pages/Header";
import Banner from "./Components/Pages/Home/Pages/Banner";
import Services from "./Components/Pages/Home/Pages/Services/Services";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Login/Register";
import DashBoard from "./Components/Pages/DashBoard/DashBoard";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Cycles from "./Components/Pages/Cycles/Cycles";
import Review from "./Components/Pages/Home/Pages/Review";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Footer from "./Components/Pages/Footer/Footer";
import RideUnleash from "./Components/Pages/RideUnleash/RideUnleash";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Accord from "./Components/Pages/Home/Pages/Accord";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Banner />
              <Services />
              <Review />
              <Accord />
            </Route>
            <Route path="/home">
              <Banner />
              <Services />
              <Review />
              <Accord />
            </Route>
            <PrivateRoute path="/placeOrder/:_id">
              <Purchase />
            </PrivateRoute>

            <Route path="/ride">
              <RideUnleash />
            </Route>
            <Route path="/cycles">
              <Cycles />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
