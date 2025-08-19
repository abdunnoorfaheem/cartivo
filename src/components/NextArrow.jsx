import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const NextArrow = (props) => {
      const {onClick } = props;
 
  return (
    <>
       <div
      className={"text-4xl bg-[#979797] text-white p-2 rounded-full absolute right-3 top-1/2 -translate-y-1/2"}
      
      onClick={onClick}
    ><FaArrowRight/></div>
    </>
  )
}

export default NextArrow;
