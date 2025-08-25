import React from 'react';
import Container from '../Container';
import {useState,useEffect} from "react";
import axios from "axios";

const Journal = () => {

  let [allData,setAllData]=useState([]);
   console.log(allData);
   

 useEffect(() => {

   async function showData(){
    
     let data =await axios.get("https://dummyjson.com/products");
     setAllData(data.data.products);
     
  }
  showData();
  
 }, []);

  
  return (
    <>
     <div className="py-[50px]">
       <Container>
        <div className="flex flex-wrap gap-x-3 gap-y-4 ">
          {
            allData.map((item)=>(
              <div className="w-[100%] lg:w-[32%]   shadow-2xl px-[20px] py-[10px] m-auto rounded-[15px]">
              <div className="text-center">
                <img src={item.thumbnail} alt="" />
              </div>
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <h1 className="text-lg opacity-[.75]">{item.description}</h1>
              <h1 className="text-xl font-bold">Price: {item.price}$</h1>
              </div>
            ))
          }
        </div>
      </Container>
     </div>
    </>
  )
}

export default Journal
