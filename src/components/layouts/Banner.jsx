import React from "react";
import Image from "../Image";
import BannerImg from "/src/assets/banner.png";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Button from "../Button";
import { MdOutlineSignalCellularAlt2Bar } from "react-icons/md";
import { LuUserRoundCog } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div className=" w-full">
        
         <div className="py-[50px]">
          <Container>
             <Flex className={"justify-between "}>
            <div className="w-[20%] ">
              <div className="flex items-center">
                <MdOutlineSignalCellularAlt2Bar className={"text-[20px] rotate-90"} />
                <Heading text={"Shop by Category"} tagName={"h5"} className={"text-[#262626] text-[14px]"}/>
              </div>
            </div>
            <div className="w-[60%] ml-[50px]">
              <input type="text" placeholder="Search Products" className="border bg-[#F5F5F3] py-[16px] pl-[21px] pr-[421px] border-none"/>
            </div>
            <div className="w-[20%] ">
              <div className="flex gap-x-12 text-[24px]">
                <LuUserRoundCog />
                <FaShoppingCart />
              </div>
            </div>
          </Flex>
           <Flex>
            <div className="w-[50%]">
              <Heading
                text={"Final Offer"}
                tagName={"h3"}
                className={"text-[49px] font-bold text-[#262626]"}
              />
              <p className="mt-[33px] mb-[39px] text-[#6D6D6D]">Up to <span className={'text-[40px] font-bold text-[#000000]'}>50%</span> sale for all furniture items!</p>
              
              <Button className={"text-[#ffffff] bg-[#262626]"}>Shop Now</Button>
            </div>
            <div className="w-[50%]">
              <Image className={"w-full h-[500px]"} imgSrc={BannerImg} />
            </div>
          </Flex>
          </Container>
          
         </div>
         
        
      </div>
    </>
  );
};

export default Banner;
