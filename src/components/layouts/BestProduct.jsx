import React from 'react';
import Container from '../Container';
import Image from '../Image';
import BestProductImg from "/src/assets/bestProduct.png";

const BestProduct = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container>
          <Image imgSrc={BestProductImg}/>
        </Container>
      </div>
    </>
  )
}

export default BestProduct
