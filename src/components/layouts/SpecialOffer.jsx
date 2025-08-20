import React from 'react';
import Heading from '../Heading';
import Product from '../Product';
import SpecialImg from "/src/assets/specialProductOne.png";
import SpecialImgTwo from "/src/assets/specialProductTwo.png";
import Container from '../Container';

const SpecialOffer = () => {
  return (
    <>
      <div className="py-[30px]">
      <Container>
         <Heading
          text={"Special Offers"}
          tagName={"h3"}
          className={"text-[39px] font-bold text-[#262626]"}
        />
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={SpecialImg} bdgText={"15%"} />
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={SpecialImg} bdgText={"15%"} />
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={SpecialImgTwo} bdgText={"15%"} />
          </div>
          <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productTitle={"Basic Crew Neck Tee"} productImg={SpecialImgTwo} bdgText={"15%"} />
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default SpecialOffer
