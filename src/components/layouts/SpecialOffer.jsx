import React from "react";
import Heading from "../Heading";
import Product from "../Product";
import SpecialImg from "/src/assets/specialProductOne.png";
import SpecialImgTwo from "/src/assets/specialProductTwo.png";
import Container from "../Container";
import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const SpecialOffer = () => {
    useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration (ms)
      offset: 100, // scroll offset
      once: false, // একবার animate হবে
    });
  }, []);
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function viewData() {
      let data = await axios.get("https://dummyjson.com/products?limit=4");
      setAllData(data.data.products);
    }
    viewData();
  }, []);
  return (
    <>
      <div className="py-[30px]">
        <Container>
          <Heading
            text={"Special Offers"}
            tagName={"h3"}
            className={"md:text-[39px] font-bold text-[#262626]"}
          />
          <div className="md:flex flex-wrap gap-4 justify-between">

            {
              allData.map((item)=>(
                  
                <div className="md:w-[48%]  lg:w-[24%] py-3 md:py-0" key={item.id} data-aos="fade-left">
              <Product
                productTitle={item.title}
                productImg={item.thumbnail}
                bdgText={"15%"}
                productPrice={item.price}
              />
            </div>
                 
              ))
            }
           
            
           
          </div>
        </Container>
      </div>
    </>
  );
};

export default SpecialOffer;
