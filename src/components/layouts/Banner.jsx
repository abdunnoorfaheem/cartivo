import React from "react";
import Image from "../Image";
import BannerImg from "/src/assets/banner.png";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Button from "../Button";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart   } from "react-icons/fa";


const Banner = () => {
  return (
    <>
      
         <div className="bg-[#F5F5F3] py-[30px]">
          <Container>
            <Flex className={"justify-between"}>
              <div className="flex items-center gap-x-2 text-[14px]">
                <FaBarsStaggered />
                <Heading text={"Shop by Category"} tagName={"h4"} className={"text-[#262626]"}/>
              </div>
              <div className="relative">
                <input type="text" placeholder="Search Products" className="bg-white py-[16px] pl-[21px] w-[600px] outline-0 placeholder:text-[#C4C4C4]" />
                <FaSearch className="absolute right-3 top-[50%] -translate-[50%]"/>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex">
                  <FaUser />
                <FaCaretDown />
                </div>
                <FaShoppingCart />
              </div>
            </Flex>
              
          </Container>
         </div>
         <div className="bg-[url('/src/assets/banner.png')] h-[600px] bg-no-repeat bg-center bg-cover">
          
          
         </div>
         
        
      
    </>
  );
};

export default Banner;
