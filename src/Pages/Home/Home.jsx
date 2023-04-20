import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import img from "./pexels-photo-8221022.jpeg";
import ProductTabs from "../../Components/ProductsTabs/ProductTabs";
import Newsletter from "../../Components/Newsletter/Newsletter";
import SpecialProducts from "../../Components/SpecialProducts/SpecialProducts";
import Collections from "../../Components/Collections/Collections";

const Home = () => {
  const carouselItems = [
    {
      title: "Define Your Budget",
      subTitle: "Call: 0123 456 78901",
      email: "Email Address: email@info.com",
      imageUrl: img,
    },
    {
      title: "Kids Collection",
      subTitle: "Call: 0123 456 78901",
      email: "Email Address: email@info.com",
      imageUrl: img,
    },
    {
      title: "Ladies Collection",
      subTitle: "Call: 0123 456 78901",
      email: "Email Address: email@info.com",
      imageUrl: img,
    },
  ];
  return (
    <div className="main-content">
      <div className="container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="work-wrap d-md-flex">
              <div className="img" style={{ backgroundImage: `url(${img})` }} />
              <div className="text text-left text-lg-right p-4 px-xl-5 d-flex align-items-center">
                <div className="desc">
                  <h2 className="mb-4">{item?.title}</h2>
                  <p className="h5">{item?.subTitle}</p>
                  <p className="h5 mb-4">{item?.email}</p>
                  <div className="row justify-content-center">
                    <div className="col-xl-8">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                  </div>
                  <p>
                    <button
                      type="button"
                      className="btn btn-outline-dark mb-2 py-3 px-4"
                    >
                      Shop the collection Outline
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark mb-2 py-3 px-4"
                    >
                      Learn More
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <ProductTabs></ProductTabs>
      <Newsletter></Newsletter>
      <SpecialProducts></SpecialProducts>
      <Collections></Collections>
    </div>
  );
};

export default Home;
