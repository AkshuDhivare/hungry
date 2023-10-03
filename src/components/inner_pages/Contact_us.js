import React from "react";
import "./Contact_us.css";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";

function Contact_us() {
  return (
    <>
      <section className="contact_us_section">
        <div className="container ">
          <div className="row py-5 justify-content-evenly">
            <div className="col-lg-3">
              <div className="contact_box ">
                <AttachEmailIcon fontSize="large" />
                <h5 className="py-2">
                  <strong>Email</strong>
                </h5>
                <p>
                  <strong> Demo@gmail.com</strong>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="contact_box">
                <PlaceIcon fontSize="large" />
                <h5 className="py-2">
                  <strong>Location</strong>
                </h5>
                <p>
                  <strong> Mumbai</strong>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="contact_box">
                <CallIcon fontSize="large" />
                <h5 className="py-2">
                  <strong>Contact No.</strong>
                </h5>
                <p>
                  <strong> +91 - 1234567890</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="row py-5 justify-content-evenly ">
            <div className="col-lg-5">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292430808!2d72.71637054316062!3d19.082502007375787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696362309722!5m2!1sen!2sin"
                  width="100%"
                  height="490"
                  style={{ border: "1px solid green" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact_form py-5 px-4 text-center ">
                <h3 className="pb-5">Connect With Us </h3>
                <form class="form-floating">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <br />
                  <div class="form-floating">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <br />
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label for="floatingTextarea">Comments</label>
                  </div>
                  <br />
                  <div>
                    <Button variant="contained" className="bg-success">
                      <h5 className="mb-0">Send Feedback !</h5>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact_us;
