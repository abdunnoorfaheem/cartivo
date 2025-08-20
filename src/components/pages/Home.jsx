import React from "react";
import Container from "../Container";
import Banner from "../layouts/Banner";
import Policy from "../layouts/Policy";
import Offer from "../layouts/Offer";
import BestProduct from "../layouts/BestProduct";
import NewArrival from "../layouts/NewArrival";
import Bestsellers from "../layouts/Bestsellers";
import SpecialOffer from "../layouts/SpecialOffer";

const Home = () => {
  return (
    <>
      <Banner />
      <Policy />
      <Offer />
      <NewArrival />
      <Bestsellers/>
      <BestProduct />
      <SpecialOffer/>
    </>
  );
};

export default Home;
