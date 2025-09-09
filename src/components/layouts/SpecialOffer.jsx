import React from "react";
import Heading from "../Heading";
import Product from "../Product";
import SpecialImg from "/src/assets/specialProductOne.png";
import SpecialImgTwo from "/src/assets/specialProductTwo.png";
import Container from "../Container";
import { useState, useEffect } from "react";
import axios from "axios";

const SpecialOffer = () => {
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
            className={"text-[39px] font-bold text-[#262626]"}
          />
          <div className="flex flex-wrap gap-4 justify-between">

            {
              allData.map((item)=>(
                  
                <div className="w-[48%] md:w-[32%] lg:w-[24%]" key={item.id}>
              <Product
                productTitle={item.title}
                productImg={item.thumbnail}
                bdgText={"15%"}
                productPrice={`$${item.price}`}
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
