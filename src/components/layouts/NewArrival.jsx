import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import ProductOne from "/src/assets/productOne.png";
import ProductTwo from "/src/assets/productTwo.png";
import ProductThree from "/src/assets/productThree.png";
import ProductFour from "/src/assets/productFour.png";


const NewArrival = () => {
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Heading
            text={"New Arrivals"}
            tagName={"h3"}
            className={"text-[39px] font-bold text-[#262626]"}
          />
          <div className="">
            <Flex className={"justify-between mt-[30px]"}>
                <div className="w-[24%]"><Product productImg={ProductOne}  bdgText={"New"}/></div>
                <div className="w-[24%]"><Product productImg={ProductTwo} bdgText={"20%"}/></div>
                <div className="w-[24%]"><Product productImg={ProductThree} bdgText={"New"}/></div>
                <div className="w-[24%]"><Product productImg={ProductFour} bdgText={"30%"}/></div>
                
                
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
