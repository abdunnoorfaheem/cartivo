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
            <Product productImg={ProductImgFour} bdgText={""} />
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productImg={ProductImgFour} bdgText={""} />
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productImg={ProductImgFour} bdgText={""} />
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productImg={ProductImgFour} bdgText={""} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bestsellers;
