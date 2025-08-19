import React from "react";
import Image from "./Image";

import Badge from "./Badge";
import Flex from "./Flex";
import Heading from "./Heading";
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";


const Product = ({ productImg, bdgText }) => {
  return (
    <>
      <div className="relative group">
        <Badge className={"absolute top-5 left-5"} badgeText={bdgText} />
        <Image imgSrc={productImg} />
        <div className="bg-white opacity-0 group-hover:opacity-100 absolute left-0 bottom-12 w-full duration-700">
          <div className="flex items-center gap-x-3 justify-end px-[15px] py-[5px]">
            <h4>Add to Wish List</h4>
            <FaHeart />
          </div>
          <div className="flex items-center gap-x-3 justify-end px-[15px] py-[5px] ">
            <h4>Compare</h4>
            <TbRefresh />
          </div>
          <div className="flex items-center gap-x-3 justify-end px-[15px] py-[5px]">
            <h4>Add to Cart</h4>
            <FaShoppingCart />
          </div>
        </div>
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
