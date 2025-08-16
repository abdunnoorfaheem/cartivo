import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck,FaUndo  } from "react-icons/fa";
import Heading from '../Heading';

const Policy = () => {
  return (
    <>
      <div className="py-[24px]">
        <Container>
            <Flex className={"justify-between"}>
                <div className="flex items-center text-[16px] gap-x-2">
                  <PiNumberTwoBold />
                  <Heading text={"Two years warranty"} tagName={"h4"} className={"text-[#6D6D6D]"}/>
                </div>
                
                <div className="">
                  <div className="flex items-center text-[16px] gap-x-2">
                  <FaTruck /> 
                  <Heading text={"Free shipping"} tagName={"h4"} className={"text-[#6D6D6D]"}/>
                </div>
                </div>
               
                <div className="">
                   <div className="">
                  <div className="flex items-center text-[16px] gap-x-2">
                  <FaUndo  /> 
                  <Heading text={"Return policy in 30 days"} tagName={"h4"} className={"text-[#6D6D6D]"}/>
                </div>
                </div>
                </div>
            </Flex>
        </Container>
      </div>
    </>
  )
}

export default Policy;
