import React from "react";
import Container from "../Container";
import Flex from "../Flex";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3]">
        <Container>
        <div className="py-[30px]">
          <Flex className={"justify-between"}>
            <div className="">1</div>
            <div className="">2</div>
            <div className="">3</div>
            <div className="">4</div>
            <div className="">5</div>
          </Flex>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Footer;
