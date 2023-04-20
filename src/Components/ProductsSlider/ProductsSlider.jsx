import React from "react";
import Slider from "react-slick";
import logo from "./pexels-photo-8221022.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductsSlider.css";
import CustomNextArrow from "./CustomNextArrow/CustomNextArrow";
import CustomPrevArrow from "./CustomPrevArrow/CustomPrevArrow";

const ProductsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow></CustomNextArrow>,
    prevArrow: <CustomPrevArrow></CustomPrevArrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="row ">
      <Slider {...settings}>
          <div class="col-md-3 col-sm-6 column-gap" >
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={logo} />
                </a>
                <span class="product-discount-label">-33%</span>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fas fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                  
                </ul>
                <h3 class="title">
                  <a href="#">Men's Blazer</a>
                </h3>
                <div class="price">
                  <span>$90.00</span> $66.00
                </div>
                <a class="add-to-cart" href="#">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 column-gap">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={logo} />
                </a>
                <span class="product-discount-label">-33%</span>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fas fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                 
                </ul>
                <h3 class="title">
                  <a href="#">Men's Blazer</a>
                </h3>
                <div class="price">
                  <span>$90.00</span> $66.00
                </div>
                <a class="add-to-cart" href="">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 column-gap">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={logo} />
                </a>
                <span class="product-discount-label">-33%</span>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fas fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                 
                </ul>
                <h3 class="title">
                  <a href="#">Men's Blazer</a>
                </h3>
                <div class="price">
                  <span>$90.00</span> $66.00
                </div>
                <a class="add-to-cart" href="">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 column-gap">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={logo} />
                </a>
                <span class="product-discount-label">-33%</span>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fas fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                 
                </ul>
                <h3 class="title">
                  <a href="#">Men's Blazer</a>
                </h3>
                <div class="price">
                  <span>$90.00</span> $66.00
                </div>
                <a class="add-to-cart" href="">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 column-gap">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={logo} />
                </a>
                <span class="product-discount-label">-33%</span>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fas fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                 
                </ul>
                <h3 class="title">
                  <a href="#">Men's Blazer</a>
                </h3>
                <div class="price">
                  <span>$90.00</span> $66.00
                </div>
                <a class="add-to-cart" href="">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 column-gap">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={logo} />
                </a>
                <span class="product-discount-label">-33%</span>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fas fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                 
                </ul>
                <h3 class="title">
                  <a href="#">Men's Blazer</a>
                </h3>
                <div class="price">
                  <span>$90.00</span> $66.00
                </div>
                <a class="add-to-cart" href="">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 column-gap">
            <div class="product-grid">
              <div class="product-image">
                <a href="#" class="image">
                  <img class="pic-1" src={logo} />
                </a>
                <ul class="product-links">
                  <li>
                    <a href="#" data-tip="Add to Wishlist">
                      <i class="fas fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Compare">
                      <i class="fa fa-random"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Quick View">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="product-content">
                <ul class="rating">
                 
                </ul>
                <h3 class="title">
                  <a href="#">Women's Shirt</a>
                </h3>
                <div class="price">$79.90</div>
                <a class="add-to-cart" href="#">
                  add to cart
                </a>
              </div>
            </div>
          </div>
      </Slider>
    </div>
  );
};

export default ProductsSlider;
