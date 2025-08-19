import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
const PrevArrow = (props) => {
    const {onClick } = props;
  return (
    <>
     <div
           className={"text-4xl bg-[#979797] text-white p-2 rounded-full absolute left-3 top-1/2 -translate-y-1/2 z-10"}
           
           onClick={onClick}
         ><FaArrowLeft/></div>
    </>
  )
}

export default PrevArrow;
