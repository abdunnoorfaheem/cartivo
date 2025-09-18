import React from "react";
import Container from "../Container";
import {useState} from "react";
import axios from "axios";
import Flex from "../Flex";


const Shop = () => {
  let [allData,setAllData]=useState([]);
    
   async function allShowData(){
     let data = await axios.get("https://dummyjson.com/products?&limit=0");
    //  https://dummyjson.com/products?&limit=0
     setAllData(data.data.products);
      
   }
   allShowData();
  return (
    
    
    <>
      <div className="py-[50px]">
        <Container>
          
        <Flex className={"flex-wrap gap-x-2 gap-y-4"}>
          {allData.map((item)=>(
         <div className="w-[100%] lg:w-[32%] px-[20px] py-[10px] m-auto shadow-2xl">
          <div className="text-center"><img src={item.thumbnail} alt="" /></div>
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <p className="text-[#000000] opacity-[.75]">{item.description}</p>
          <h3 className="text-md font-bold">Price : {item.price}</h3>
          
         </div>
        ))}
        </Flex>
      </Container>
      </div>
    </>
  );
};

export default Shop;
