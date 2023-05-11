import React from "react";
import "../../assets/Css/responsive.css";
import "../../assets/Css/main.css";

import img1 from "../../assets/img/img-1.png";

function Body2() {
  return (
    <div>
      <section>
        <div class="about-area section-padding bg-gray">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
                We're Changing the Way You Work with Agencies
              </h2>
              <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
              <div>Learn more about us</div>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-12 col-xs-12 info">
                <div class="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                  <div>
                    <div class="site-heading">
                      <h2 class="section-title">
                        Not just your regular design agency
                      </h2>
                    </div>
                    <div class="content">
                      <p>
                        Praesent imperdiet, tellus et euismod euismod, risus
                        lorem euismod erat, at finibus neque odio quis metus.
                      </p>
                      <a href="/" id="case-study" class="btn btn-common mt-3">
                        Our Works
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-xs-12 wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <img class="img-fluid" src={img1} alt="" />
              </div>
            </div>

            <div class="row">
              <div
                class="col-lg-6 col-md-12 col-xs-12 wow fadeInLeft order-lg-1"
                data-wow-delay="0.3s"
              >
                <div class="about-wrapper">
                  <div>
                    <div class="site-heading">
                      <h2 class="section-title">
                        Not just your regular design agency
                      </h2>
                    </div>
                    <div class="content">
                      <p>
                        Praesent imperdiet, tellus et euismod euismod, risus
                        lorem euismod erat, at finibus neque odio quis metus.
                      </p>
                      <a href="/" id="case-study" class="btn btn-common mt-3">
                        Our Services
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-6 col-md-12 col-xs-12 wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <img class="img-fluid" src={img1} alt="" id="img-left" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body2;
