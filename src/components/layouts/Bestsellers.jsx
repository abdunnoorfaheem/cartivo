import React from "react";
import Container from "../Container";
import Product from "../Product";
import ProductImgFour from "/src/assets/productImgFour.png";
import Heading from "../Heading";
import {useState,useEffect} from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Bestsellers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // animation duration (ms)
      offset: 100, // scroll offset
      once: false, // একবার animate হবে
    });
  }, []);
  
  let [allData,setAllData]=useState([]);
  
  useEffect(() => {
    
    async function viewData(){
      let data =await axios.get('https://dummyjson.com/products');
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
          className={"md:text-[39px] font-bold text-[#262626]"}
        />
        <div className="md:flex flex-wrap gap-x-4" >

          {
            allData.slice(0,8).map((item)=>(

                <div className="md:w-[48%]  lg:w-[24%] py-3 md:py-4" key={item.id} data-aos="fade-right">
            <Product productTitle={item.title} productImg={item.thumbnail} bdgText={"15%"}  productPrice={  item.price} />
          </div>
            ))
          }
          
        
          
         
        </div>
      </Container>
    </div>
  );
};

export default Bestsellers;
