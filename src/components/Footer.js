import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PublicIcon from "@mui/icons-material/Public";

function Footer() {
  return (
    <>
      <section className="footer py-3">
        <div className="container">
          <div className="row  justify-content-evenly ">
            <div className="col-lg-4 my-2 text-center ">
              <h6>&copy; 2023 Hungry, Develop by Akshay Dhivare.</h6>
            </div>
            <div className="col-lg-3  my-2">
              <ul className="d-flex mb-0">
                <li className="px-3">
                  <GitHubIcon style={{ cursor: "pointer" }} />
                </li>
                <li className="px-3">
                  <LinkedInIcon style={{ cursor: "pointer" }} />
                </li>
                <li className="px-3">
                  <PublicIcon style={{ cursor: "pointer" }} />
                </li>
              </ul>
            </div>
            <div className="col-lg-5  my-2">
              <ul className="d-flex mb-0">
                <li className="px-3">
                  <Link className="footer_link" to="/">
                    Home
                  </Link>
                </li>
                <li className="px-3">
                  <Link className="footer_link" to="about">
                    About Us
                  </Link>
                </li>
                <li className="px-3">
                  <Link className="footer_link" to="menu">
                    Menus
                  </Link>
                </li>
                <li className="px-3">
                  <Link className="footer_link" to="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
