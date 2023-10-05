import React from "react";
import "./Home.css";
import banner from "../../images/banner.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div
            className="col-lg-6 py-5"
            data-aos="zoom-in-right"
            data-aos-duration="1500"
          >
            <h1>Feast on Unforgettable Flavors.</h1>
            <br />
            <h4>
              Experience a World of Delectable Dishes and Exquisite Beverages
            </h4>
            <br />
            <Link className="btn btn-success" to="menu">
              <h5 className="pt-2">EXPLORE MENU</h5>
            </Link>
          </div>
          <div
            className="col-lg-6"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
          >
            <img src={banner} className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
