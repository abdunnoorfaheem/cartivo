import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Flex from "../Flex";
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
// slick slider

const NewArrival = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Heading
            text={"New Arrivals"}
            tagName={"h3"}
            className={"text-[39px] font-bold text-[#262626]"}
          />
          <Slider {...settings}>
            <div className="">
              <Product productImg={ProductOne} bdgText={"New"} />
            </div>
            <div className=" ">
              <Product productImg={ProductTwo} bdgText={"20%"} />
            </div>
            <div className="">
              <Product productImg={ProductThree} bdgText={"New"} />
            </div>
            <div className="">
              <Product productImg={ProductThree} bdgText={"30%"} />
            </div>
            <div className="">
              <Product productImg={ProductThree} bdgText={"30%"} />
            </div>
            <div className="">
              <Product productImg={ProductThree} bdgText={"30%"} />
            </div>
          </Slider>
        
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
