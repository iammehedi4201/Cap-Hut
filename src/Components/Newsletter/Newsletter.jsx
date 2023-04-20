import React from "react";
import "./Newsletter.css";
import img from "./pexels-photo-8221022.jpeg";
import { Col, Row } from "react-bootstrap";

const Newsletter = () => {
  return (
    <section className="news-letter-section">
      <Row>
        <Col xs={12} md='6' >
          <div class="banner-outer">
              <div class="banners banner1">
                <div class="inner1">
                  <a href="#">
                    <img src={img} alt="" class="img-responsive" />
                  </a>
                </div>
              </div>
              <div class="banners banner2">
                <div class="inner1">
                  <a href="#">
                    <img src={img} alt="" class="img-responsive" />
                  </a>
                </div>
              </div>
            </div>
        </Col>
        <Col xs={12} md={6}>
          <section className="newsletter-section">
            <div>
              <div className="Newsletter-content">
                <h1>Get Our</h1>
                <h1>Newsletter</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae, aspernatur corporis facere doloremque voluptas ipsa
                  placeat blanditiis culpa rerum eius, cupiditate dolorum itaque
                  obcaecati facilis? Sunt perferendis accusamus laudantium
                  tempora!
                </p>
              </div>
              <div class="subscribe-form d-flex">
                <input
                  type="email"
                  name="newsletter_usr_email"
                  id="newsletter_usr_email"
                  placeholder="Enter your email..."
                  class="form-control input-lg inputNew txtemail"
                  required=""
                />

                <button type="submit" class="subscribe-btn">
                  <i class="fa fa-paper-plane-o"></i>
                </button>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </section>
  );
};

export default Newsletter;
