import React from "react";
import AccessibleIcon from "@mui/icons-material/Accessible";

function Body1() {
  return (
    <div>
      <section id="services" class="section-padding">
        <div class="container">
          <div class="section-header text-center">
            <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
              Our Rock and Roll
            </h2>
            <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            <div>
              with more than 20 years of experience we <br /> can deliver the
              best product design.
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xs-12">
              <div class="services-item wow fadeInRight" data-wow-delay="0.3s">
                <div class="icon">
                  <i class="lni-cog"></i>
                </div>
                <div class="services-content">
                  <h3>
                    <a href="/">Easy To Used</a>
                  </h3>
                  <p>
                    Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                    lobortis. Donec tincidunt bibendum gravida.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xs-12">
              <div class="services-item wow fadeInRight" data-wow-delay="0.6s">
                <div class="icon">
                  <i class="lni-stats-up"></i>
                </div>
                <div class="services-content">
                  <h3>
                    <a href="/">Awesome Design</a>
                  </h3>
                  <p>
                    Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                    lobortis. Donec tincidunt bibendum gravida.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xs-12">
              <div class="services-item wow fadeInRight" data-wow-delay="0.9s">
                <div class="icon">
                  <AccessibleIcon />
                  {/* <i class="lni-users"></i> */}
                  {/* <img
                    src={circlee}
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    style={{ textAlign: "center", alignItems: "center" }}
                  ></img> */}
                </div>
                <div class="services-content">
                  <h3>
                    <a href="/">Easy To Customize</a>
                  </h3>
                  <p>
                    Ut maximus enim dolor. Aenean auctor risus eget tincidunt
                    lobortis. Donec tincidunt bibendum gravida.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body1;
