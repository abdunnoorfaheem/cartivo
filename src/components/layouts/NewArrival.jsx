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
      {
        breakpoint: 300,
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
       <div className="-mx-2">
         <Slider {...settings} className="">
          <div className="px-2">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductOne} bdgText={"New"} productPrice={"$50"} />
          </div>
          <div className="px-2">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductTwo} bdgText={"20%"} productPrice={"$30"} />
          </div>
          <div className="px-2">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductThree} bdgText={"New"} productPrice={"$60"} />
          </div>
          <div className="px-2">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductThree} bdgText={"30%"} productPrice={"$40"} />
          </div>
          <div className="px-2">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductThree} bdgText={"30%"}  productPrice={"$20"}/>
          </div>
          <div className="px-2">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductThree} bdgText={"30%"}  productPrice={"$50"}/>
          </div>
        </Slider>
       </div>
      </Container>
    </div>
  );
};

export default NewArrival;
