import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import Flex from "./Flex";
import Heading from "./Heading";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addtocart } from "../slices/addToCartSlice";
import { toast } from "react-toastify";

const Product = ({ productImg, bdgText, productTitle, productPrice }) => {
  let dispatch = useDispatch();

  let handleAddToCart = () => {
    dispatch(
      addtocart({
        title: productTitle,
        price: productPrice,
        productImage: productImg,
        quantity: 1,
      })
    );
    toast.success("Product Added Successfully");
  };

  return (
    <div className="relative group  p-3 bg-white shadow-sm hover:shadow-md duration-700">
     
      <div className="relative w-full h-[250px] flex items-center justify-center">
        <Badge className="absolute top-3 left-3 z-10 text-[8px] md:text-[14px]" badgeText={bdgText} />
        <img
          src={productImg}
          alt={productTitle}
          className="w-full h-full object-contain"
        />
      </div>

      
      <div className="bg-white opacity-0 group-hover:opacity-100 absolute left-0 bottom-10 w-full duration-700">
        <div className="flex items-center gap-x-3 justify-end px-3 py-1">
          <h4 className="text-sm">Add to Wish List</h4>
          <FaHeart />
        </div>
        <div className="flex items-center gap-x-3 justify-end px-3 py-1">
          <h4 className="text-sm">Compare</h4>
          <TbRefresh />
        </div>
        <div
          className="flex items-center gap-x-3 justify-end px-3 py-1 cursor-pointer"
          onClick={handleAddToCart}
        >
          <h4 className="text-sm">Add to Cart</h4>
          <FaShoppingCart />
        </div>
      </div>

      
      <div className="mt-3">
        <Flex className="justify-between items-center">
          <Heading
            text={productTitle}
            tagName="h5"
            className="text-[16px] font-semibold text-[#262626] truncate max-w-[150px]"
          />
          <Heading
            text={`$${productPrice}`}
            tagName="h6"
            className="text-[14px] font-medium text-[#767676]"
          />
        </Flex>
      </div>
    </div>
  );
};

export default Product;
