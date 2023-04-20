import React from "react";
import Card from "react-bootstrap/Card";
import "./Collection.css";
import img from "./img.jpg";
import { Button, Col, Row } from "react-bootstrap";

const Collections = () => {
  return (
    <div>
      <h2>Men & Women Collections</h2>
      <hr />
      <Row>
        <Col md={6}>
          <section className="men-collections">
            <Card className="bg-dark text-white">
              <Card.Img src={img} alt="Card image" />
              <Card.ImgOverlay className="text-style">
                <div>
                  <Card.Title className="my-2">Discover Men's Caps And Hats.</Card.Title>
                  <h1 className="my-2">Men Cap Collection</h1>
                  <Button className="btn btn-dark my-1">SHOP NOW</Button>
                </div>
              </Card.ImgOverlay>
            </Card>
          </section>
        </Col>
        <Col md={6}>
          <section className="women-collections">
            <Card className="bg-dark text-white">
              <Card.Img src={img} alt="Card image" />
              <Card.ImgOverlay className="text-style">
                <div>
                  <Card.Title className="my-2">Great Selection of Caps</Card.Title>
                  <h1 className="my-2">Cap For Women</h1>
                  <Button className="btn btn-dark my-1">SHOP NOW</Button>
                </div>
              </Card.ImgOverlay>
            </Card>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Collections;
