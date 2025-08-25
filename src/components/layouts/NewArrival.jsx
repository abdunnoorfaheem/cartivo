import React from "react";
import Heading from "../Heading";
import Container from "../Container";
import Product from "../Product";
import ProductOne from "/src/assets/productOne.png";
import ProductTwo from "/src/assets/productTwo.png";
import ProductThree from "/src/assets/productThree.png";

// slick slider
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import {useState,useEffect} from "react";
import axios from "axios";


const NewArrival = () => {
  let[allData,setAllData]=useState([]);
 
  useEffect(() => {
    
    async function viewData(){
          
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
      
     }
     viewData();
  }, []);
  

  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1, 
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-[30px]">
      <Container>
        <Heading
          text={"New Arrivals"}
          tagName={"h3"}
          className={"text-[39px] font-bold text-[#262626]"}
        />
       <div className="-mx-4">
         <Slider {...settings} className="">
          {
            allData.map((item)=>(

              <div className="px-4">
            
              <Product productTitle={item.title} productImg={item.thumbnail} bdgText={"New"} productPrice={` $${item.price}`} />
            
          </div>
                
              ))
            
}
          
         
          
          
        </Slider>
       </div>
      </Container>
    </div>
  );
};

export default NewArrival;
