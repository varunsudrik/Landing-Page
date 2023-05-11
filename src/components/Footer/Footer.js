import React from "react";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import pinterest from "../../assets/img/pinterest.svg";
import twitter from "../../assets/img/twitter.svg";

const Footer = () => (
  <footer
    className="page-footer font-small blue pt-4"
    style={{ backgroundColor: "rgb(0,115,170)", color: "white" }}
    // style={{ backgroundColor: "green", color: "white" }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <div class="section-header text-center">
            <div class="section-header text-center">
              <div style={{ display: "flex", marginLeft: "26%" }}>
                <div> Collabration With Us</div>
              </div>
              <div
                class="section-title wow fadeInDown"
                data-wow-delay="0.3s"
                style={{
                  fontSize: "45px",
                  color: "white",
                  alignItems: "left",
                  textAlign: "left",
                  fontWeight: "bold",
                }}
              >
                <>
                  {" "}
                  Don't Be
                  <br /> Stranger To Talk <br /> To Us?
                </>
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div
          className="col-md-3 mb-md-0 mb-3"
          style={{ textAlign: "left", marginLeft: "12%" }}
        >
          <h5 className="text-uppercase">Newsletter</h5>
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleFirstName"
                placeholder="First Name"
                backgroundColor="FF5733"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleLastName"
                placeholder="Last Name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email here"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "0px",
              }}
            >
              📩 SUBSCRIBE
            </button>
          </form>{" "}
        </div>
        {/* ////////// */}
      </div>
    </div>
    <div className="footer-strip">
      <div className="text-center">
        <div class="social-icon" style={{ marginBottom: "0px" }}>
          <img src={facebook} alt="facebook"></img>
          <img src={pinterest} alt="pinterest"></img>
          <img src={twitter} alt="twitter"></img>
          <img src={instagram} alt="insta"></img>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2023 Varun Sudrik
      </div>
    </div>
  </footer>
);

export default Footer;
