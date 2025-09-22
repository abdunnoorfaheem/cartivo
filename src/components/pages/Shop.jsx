import React from "react";
import Container from "../Container";
import {useState} from "react";
import axios from "axios";
import Flex from "../Flex";
import Product from "../Product";


const Shop = () => {
  let [allData,setAllData]=useState([]);
    
   async function allShowData(){
     let data = await axios.get("https://dummyjson.com/products?&limit=0");
    //  https://dummyjson.com/products?&limit=0
     setAllData(data.data.products);
      
   }
   allShowData();

   let [currentPage,setCurrentPage]=useState(1);
   let [perPage,setPerPage]=useState(15);

   let lastItemIndex=currentPage * perPage;

   let firstItemIndex=lastItemIndex-perPage;

   let perPageProducts=allData.slice(firstItemIndex,lastItemIndex);
  //  console.log(perPageProducts);
    

   let pageNumber=Math.ceil(allData.length/perPage);
   
   let numbers =[];
   for(let i=1;i<=pageNumber;i++){
       numbers.push(i);
       
   }
  //  console.log(numbers);
   let handlePrevPage=()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage - 1)
    }
   }
   let handleNextPage=()=>{
    
      if(currentPage !== pageNumber){
        setCurrentPage(currentPage + 1);
      }
    
   }
    

  return (
    
    
    <>
      <div className="py-[50px]">
        <Container>
          
        <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-4">
          {perPageProducts.map((item)=>(
         <div className="w-[32%]">
          <Product productImg={item.thumbnail} bdgText={item.availabilityStatus} productTitle={item.title} productPrice={item.price}/>
         </div>
        ))}
        </div>
        <ul className="flex gap-x-8 py-10 justify-center text-gray-500">
           <li className="p-3 border-2" onClick={handlePrevPage}>Prev</li>
          {
            numbers.map((item)=>(
              <li className={`p-3 border-2 ${currentPage===item ? "bg-black text-white": ""}`} onClick={()=>setCurrentPage(item)}>{item}</li>
            ))
          }
          <li className="p-3 border-2" onClick={handleNextPage}>Next</li>
        </ul>
      </Container>
      </div>
    </>
  );
};

export default Shop;
