import React from 'react';
import Container from '../Container';
import Image from '../Image';
import BestProductImg from "/src/assets/bestProduct.png";
import {Link} from "react-router-dom";

const BestProduct = () => {
  return (
    <>
    
      <div className="py-[100px]">
        <Container>
          <Link to={"/shop"}><Image imgSrc={BestProductImg}/></Link>
          
        </Container>
      </div>
    </>
  )
}

export default BestProduct
