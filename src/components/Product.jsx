import React from "react";
import Image from "./Image";

import Badge from "./Badge";
import Flex from "./Flex";
import Heading from "./Heading";

const Product = ({ productImg, bdgText }) => {
  return (
    <>
      <div className="relative">
        <Badge className={"absolute top-5 left-5"} badgeText={bdgText} />
        <Image imgSrc={productImg} />
        <div className="py-4 bg-amber-300"></div>
        <div className="py-2">
          <Flex className={"justify-between"}>
            <Heading
              text={"Basic Crew Neck Tee"}
              tagName={"h5"}
              className={"text-[20px] font-bold text-[#262626]"}
            />
            <Heading
              text={"$44.00"}
              tagName={"h6"}
              className={"text-[16px] font-normal text-[#767676]"}
            />
          </Flex>
        </div>
        
      </div>
    </>
  );
};

export default Product;
