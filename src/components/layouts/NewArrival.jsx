import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Product from "../Product";
import ProductOne from "/src/assets/productOne.png";
import ProductTwo from "/src/assets/productTwo.png";
import ProductThree from "/src/assets/productThree.png";

// slick slider
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const NewArrival = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-[30px]">
      <Container>
        <Heading
          text={"New Arrivals"}
          tagName={"h3"}
          className={"text-[39px] font-bold text-[#262626]"}
        />
        <Slider {...settings}>
          <div className="px-2">
            <Product productImg={ProductOne} bdgText={"New"} />
          </div>
          <div className="px-2">
            <Product productImg={ProductTwo} bdgText={"20%"} />
          </div>
          <div className="px-2">
            <Product productImg={ProductThree} bdgText={"New"} />
          </div>
          <div className="px-2">
            <Product productImg={ProductThree} bdgText={"30%"} />
          </div>
          <div className="px-2">
            <Product productImg={ProductThree} bdgText={"30%"} />
          </div>
          <div className="px-2">
            <Product productImg={ProductThree} bdgText={"30%"} />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default NewArrival;
