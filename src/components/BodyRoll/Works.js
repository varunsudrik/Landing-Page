import React from "react";
import "../../assets/Css/responsive.css";
import "../../assets/Css/main.css";

function Works() {
  return (
    <section id="team" class="section-padding bg-gray">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
            Our Favourite Works
          </h2>
          <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
        </div>
        <div class="section-header text-center">
          <div> Learn more about us</div>
        </div>
        <div
          class="row"
          style={{
            margin: "150px",
            marginTop: "10px",
          }}
        >
          <div class="col-lg-4 col-md-4 col-sm-3">
            {/* <!-- Team Item Starts --> */}
            <div
              class="team-item wow fadeInRight"
              data-wow-delay="0.2s"
              style={{ backgroundColor: "#b1f0ee" }}
            >
              <div class="contetn">
                <div class="info-text">
                  {/* <!-- add content for team member 1 --> */}
                </div>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div class="col-lg-4 col-md-4 col-sm-3">
            {/* <!-- Team Item Starts --> */}
            <div
              class="team-item wow fadeInRight"
              data-wow-delay="0.4s"
              style={{ backgroundColor: "#b1f0ee" }}
            >
              <div class="contetn">
                <div class="info-text">
                  {/* <!-- add content for team member 2 --> */}
                </div>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div class="col-lg-4 col-md-4 col-sm-3">
            {/* <!-- Team Item Starts --> */}
            <div
              class="team-item wow fadeInRight"
              data-wow-delay="0.6s"
              style={{ backgroundColor: "#b1f0ee" }}
            >
              <div class="contetn">
                <div class="info-text">
                  {/* <!-- add content for team member 3 --> */}
                </div>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div class="col-lg-4 col-md-4 col-sm-3">
            {/* <!-- Team Item Starts --> */}
            <div
              class="team-item wow fadeInRight"
              data-wow-delay="0.8s"
              style={{ backgroundColor: "#b1f0ee" }}
            >
              <div class="contetn">
                <div class="info-text">
                  {/* <!-- add content for team member 4 --> */}
                </div>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div class="col-lg-4 col-md-4 col-sm-3">
            {/* <!-- Team Item Starts --> */}
            <div
              class="team-item wow fadeInRight"
              data-wow-delay="1s"
              style={{ backgroundColor: "#b1f0ee" }}
            >
              <div class="contetn">
                <div class="info-text">
                  {/* <!-- add content for team member 5 --> */}
                </div>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div class="col-lg-4 col-md-4 col-sm-3">
            {/* <!-- Team Item Starts --> */}
            <div
              class="team-item wow fadeInRight"
              data-wow-delay="1.2s"
              style={{ backgroundColor: "#b1f0ee" }}
            >
              <div class="contetn">
                <div class="info-text">
                  {/* <!-- add content for team member 6 --> */}
                </div>
              </div>
            </div>

            {/* <!-- Team Item Ends --> */}
          </div>
          <div
            class="section-header text-center"
            style={{ marginBottom: "0px" }}
          >
            <a href="/" id="case-study" class="btn btn-common mt-3">
              MORE WORKS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
