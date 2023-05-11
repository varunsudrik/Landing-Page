import React from "react";
import introMobile from "../../../assets/img/intro-mobile.png";

function Info() {
  return (
    <div>
      <div id="hero-area" class="hero-area-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div class="contents">
                <h2 class="head-title">
                  We build <br />
                  Applications <br />
                  That users love
                </h2>
                <p>
                  In our endavour to help enterpreneurs to grow their business,
                  we published lot of <br /> insightful business articles last
                  year. I've handpicked 10 of them that instaltly stuck <br />{" "}
                  the cord woth our readers{" "}
                </p>
                <div class="header-button">
                  <a href="/" class="btn btn-common" id="case-study">
                    Case Study
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <div class="intro-img">
                <img class="img-fluid" src={introMobile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
