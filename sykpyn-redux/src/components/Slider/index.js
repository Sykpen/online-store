import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Slider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://api.papajohns.by//images/banners/8fa387aff3d85dc37832971087281b53.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://api.papajohns.by//images/banners/802b5c7075b92d62c56ea869be955aca.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://api.papajohns.by//images/banners/6b111a9d2d2c8c973451a50d5ded5978.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
