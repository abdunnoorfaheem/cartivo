import React from "react";
import Container from "../Container";
import Product from "../Product";
import ProductImgFour from "/src/assets/productImgFour.png";
import Heading from "../Heading";

const Bestsellers = () => {
  return (
    <div className="py-[30px]">
      <Container>
         <Heading
          text={"Our Bestsellers"}
          tagName={"h3"}
          className={"text-[39px] font-bold text-[#262626]"}
        />
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductImgFour} bdgText={"15%"}  productPrice={"$50"} />
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductImgFour} bdgText={"15%"}  productPrice={"$20"}/>
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductImgFour} bdgText={"15%"} productPrice={"$40"} />
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={ProductImgFour} bdgText={"15%"}  productPrice={"$80"}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bestsellers;
