import React from "react";
import Container from "../Container";
import Product from "../Product";
import ProductImgFour from "/src/assets/productImgFour.png";
import Heading from "../Heading";
import {useState,useEffect} from "react";
import axios from "axios"

const Bestsellers = () => {
  let [allData,setAllData]=useState([]);
  
  useEffect(() => {
    
    async function viewData(){
      let data =await axios.get('https://dummyjson.com/product');
      setAllData(data.data.products);
      
    }
      viewData();
  }, []);
  
  return (
    <div className="py-[30px]">
      <Container>
         <Heading
          text={"Our Bestsellers"}
          tagName={"h3"}
          className={"text-[39px] font-bold text-[#262626]"}
        />
        <div className="flex flex-wrap gap-x-4 ">

          {
            allData.slice(0,8).map((item)=>(

                <div className="w-[48%] md:w-[32%] lg:w-[24%]">
            <Product productTitle={item.title} productImg={item.thumbnail} bdgText={"15%"}  productPrice={`$${item.price}`} />
          </div>
            ))
          }
          
        
          
         
        </div>
      </Container>
    </div>
  );
};

export default Bestsellers;
