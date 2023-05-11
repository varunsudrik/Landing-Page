import React from "react";
import Card from "react-bootstrap/Card";
import cardImg from "../../assets/img/wide-img.jpg";
import "../../assets/Css/responsive.css";
import "../../assets/Css/main.css";

function Blog() {
  return (
    <section id="team" class="section-padding bg-gray">
      <div class="container">
        <div class="section-header text-center">
          <div>
            <i> Get Industry Updates</i>
          </div>
        </div>

        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
            Recent Blog Post Articles
          </h2>
        </div>
        <div
          class="row"
          style={{
            margin: "150px",
            marginTop: "10px",
          }}
        >
          <div class="col-lg-4 col-md-4 col-sm-3">
            <div>
              <Card style={{ width: "18rem", height: "" }}>
                <Card.Img variant="top" src={cardImg} height="200rem" />
                <Card.Body>
                  <Card.Title>Business With Remote Working</Card.Title>
                  <Card.Text>
                    Inside silicon Valley's 10-year quest to make above a
                    crowded{" "}
                  </Card.Text>
                  <Card.Link href="/">Read More →</Card.Link>
                </Card.Body>
              </Card>
            </div>

            {/* <!-- Team Item Starts --> */}
            {/* <!-- Team Item Ends --> */}
          </div>
          <div class="col-lg-4 col-md-4 col-sm-3">
            <div>
              <Card style={{ width: "18rem", height: "" }}>
                <Card.Img variant="top" src={cardImg} height="200rem" />
                <Card.Body>
                  <Card.Title>Business With Remote Working</Card.Title>
                  <Card.Text>
                    Inside silicon Valley's 10-year quest to make above a
                    crowded{" "}
                  </Card.Text>
                  <Card.Link href="/">Read More →</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-3">
            <div>
              <Card style={{ width: "18rem", height: "" }}>
                <Card.Img variant="top" src={cardImg} height="200rem" />
                <Card.Body>
                  <Card.Title>Business With Remote Working</Card.Title>
                  <Card.Text>
                    Inside silicon Valley's 10-year quest to make above a
                    crowded{" "}
                  </Card.Text>
                  <Card.Link href="/">Read More →</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
