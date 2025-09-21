import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import {Link} from "react-router-dom";
import OfferOne from "/src/assets/offerOne.png";
import OfferTwo from "/src/assets/offerTwo.png";
import OfferThree from "/src/assets/offerThree.png";

const Offer = () => {
  return (
    <>
      <div className="py-[50px]">
        <Container>
            <div className="md:flex items-center justify-between">
                <div className="md:w-[49%]">
                    <Link to={"/shop"}><Image imgSrc={OfferOne}/></Link>
                    
                </div>
                <div className="md:w-[49%]">
                    <Link to={"/shop"}><Image imgSrc={OfferTwo}/></Link>
                    <Link to={"/shop"}><Image imgSrc={OfferThree} className={"md:mt-[40px] mt-5"}/></Link>
                </div>
            </div>
        </Container>
      </div>
    </>
  )
}

export default Offer
