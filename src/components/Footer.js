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
                  <a href="https://github.com/AkshuDhivare" target="_blank">
                    <GitHubIcon style={{ cursor: "pointer" }} />
                  </a>
                </li>
                <li className="px-3">
                  <a
                    href="https://www.linkedin.com/in/akshay-dhivare-05ab87235/"
                    target="_blank"
                  >
                    <LinkedInIcon style={{ cursor: "pointer" }} />
                  </a>
                </li>
                <li className="px-3">
                  <a href="https://adwebinfotech.com/" target="_blank">
                    <PublicIcon style={{ cursor: "pointer" }} />
                  </a>
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
