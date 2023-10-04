import React from "react";
import "./Home.css";
import banner from "../../images/banner.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-5">
            <h1>Satisfy your cravings.</h1>
            <br />
            <h4>Discover the best food and drinks near you - Order Online!</h4>
            <br />
            <Link className="btn btn-success" to="menu">
              <h5>Explore Menu.</h5>
            </Link>
          </div>
          <div className="col-lg-6">
            <img src={banner} className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
