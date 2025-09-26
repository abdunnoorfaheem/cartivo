import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Flex from "../Flex";
import Button from "../Button";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Heading from "../Heading";
import { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import { increment, decrement } from "/src/slices/addToCartSlice";
import axios from "axios";

const Header = () => {
  let dispatch = useDispatch();
  let handleIncrement = (item) => {
    dispatch(increment(item));
  };
  let handleDecrement = (item) => {
    dispatch(decrement(item));
  };

  let cartAddNumber = useSelector((state) => state.addtocart.value);

  let [menu, setMenu] = useState(false);

  let handleMenu = () => {
    setMenu(!menu);
  };
  let [viewCategory, setViewCategory] = useState(false);
  let [viewUser, setViewUser] = useState(false);

  function handleCategory() {
    setViewCategory(!viewCategory);
  }

  function handleUser() {
    setViewUser(!viewUser);
  }
  let [showCart, setShowCart] = useState(false);
  let data = useSelector((state) => state.addtocart.value);
  let subTotal = data.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  let [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function viewApiData() {
      let dataApi = await axios.get("https://dummyjson.com/products?&limit=0");
      setApiData(dataApi.data.products);
    }
    viewApiData();
  }, []);

  let [input, setInput] = useState("");
  let [searchProduct, setSearchProduct] = useState([]);
//  console.log(input);
 
  let handleInput = (e) => {
    setInput(e.target.value);
    if (e.target.value !== "") {
      let searchProduct = apiData.filter((item) => item.title.toLowerCase().includes((e.target.value).toLowerCase()));
      setSearchProduct(searchProduct);
    }else{
      setSearchProduct([]);
    }
  };

  return (
    <>
      <div className="">
        <Container className={""}>
          <Flex className={"justify-between py-[30px] px-[20px] md:px-0"}>
            <div className="w-[20%]">
              <Link to={"/"}>
                <Image imgSrc={Logo} />
              </Link>
            </div>
            <div className="w-[70%]">
              <ul className="hidden md:flex gap-x-12 text-[#767676] ">
                <Link to={"/"}>
                  <li className="hover:text-[#262626] hover:font-bold duration-500 ">
                    Home
                  </li>
                </Link>
                <Link to={"/shop"}>
                  <li className="hover:text-[#262626] hover:font-bold duration-500">
                    Shop
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="hover:text-[#262626] hover:font-bold duration-500">
                    About
                  </li>
                </Link>
                <li className="hover:text-[#262626] hover:font-bold duration-500">
                  <Link to={"/contact"}>Contacts</Link>
                </li>
                <li className="hover:text-[#262626] hover:font-bold duration-500">
                  <Link to={"/journal"}>Journal</Link>
                </li>
              </ul>
            </div>
            <div onClick={handleMenu} className="w-[10%] md:hidden">
              {menu ? <ImCross /> : <FaBars />}
            </div>
          </Flex>
          {menu && (
            <ul className="md:hidden  gap-x-12 gap-y-12 text-center text-[#767676] duration-700">
              <Link to={"/"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">
                  Home
                </li>
              </Link>
              <Link to={"/shop"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">
                  Shop
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">
                  About
                </li>
              </Link>
              <li className="hover:text-[#262626] hover:font-bold duration-500">
                <Link to={"/contact"}>Contacts</Link>
              </li>
              <li className="hover:text-[#262626] hover:font-bold duration-500">
                <Link to={"/journal"}>Journal</Link>
              </li>
            </ul>
          )}
        </Container>
        <div className="bg-[#F5F5F3] py-[30px]">
         <Container>
  <div className="md:flex md:justify-between md:items-center p-3 md:p-5 gap-y-3">
    
    <div className="flex items-center gap-x-2 text-sm md:text-base">
      <FaBarsStaggered onClick={handleCategory} />
      <Heading
        text={"Shop by Category"}
        tagName={"h4"}
        className={"text-[#262626]"}
      />
    </div>

    
    <div className="relative w-full md:w-auto">
      <input
        type="text"
        onChange={handleInput}
        placeholder="Search Products"
        className="bg-white py-2 md:py-[16px] pl-4 md:pl-[21px]  md:w-[600px] w-[300px] outline-0 placeholder:text-[#C4C4C4]  text-sm md:text-base border border-gray-300 rounded-md"
      />
      {searchProduct.length > 0 && (
        <div className="absolute h-[200px] md:h-[300px] overflow-y-scroll w-full md:w-[585px] bg-white shadow-2xl">
          {searchProduct.map((item) => (
            <div
              className="px-2 md:px-4 py-2 hover:bg-gray-500 cursor-pointer flex items-center justify-between hover:text-white hover:font-semibold"
              key={item.id}
            >
              <Image imgSrc={item.thumbnail} className={"w-[50px] md:w-[70px]"} />
              <h4 className="text-sm md:text-base">{item.title}</h4>
            </div>
          ))}
        </div>
      )}
      <FaSearch className="absolute right-24 md:right-3 top-1/2 -translate-y-1/2 text-gray-500 " />
    </div>

    
    <div className="flex items-center gap-x-3 relative justify-end md:justify-start">
      <div className="flex cursor-pointer" onClick={handleUser}>
        <FaUser />
        <FaCaretDown />
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => setShowCart(!showCart)}
      >
        <FaShoppingCart />
        <h3 className="absolute -bottom-2 -right-2 md:bottom-2 md:left-2 bg-red-800 text-white h-4 w-4 flex justify-center items-center rounded-full font-bold text-[10px] md:text-[12px]">
          {cartAddNumber?.length}
        </h3>
      </div>
    </div>
  </div>

  
  {showCart && (
    <div className="h-screen w-full md:w-[700px] bg-[#ced0d1] right-0 top-0 z-50 fixed">
      <ImCross
        className="text-2xl md:text-[40px] m-2 cursor-pointer"
        onClick={() => setShowCart(!showCart)}
      />
      <ul className="py-5">
        {/* Header */}
        <div className="flex justify-between bg-[#F5F7F7] py-3 px-2 font-bold text-xs md:text-base">
          <li className="w-[19%] text-center">Product</li>
          <li className="w-[19%] text-center">Name</li>
          <li className="w-[19%] text-center">Price</li>
          <li className="w-[19%] text-center">Qty</li>
          <li className="w-[19%] text-center">Total</li>
        </div>
        {/* Cart Items */}
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-between px-2 md:px-7 py-4 bg-white border-b border-[#c3c9c9] text-xs md:text-base"
          >
            <li className="w-[19%] m-auto text-center">
              <Image imgSrc={item.productImage} className={"w-[40px] md:w-[60px]"} />
            </li>
            <li className="w-[19%] m-auto text-center">{item.title}</li>
            <li className="w-[19%] m-auto text-center">{item.price}</li>
            <li className="flex gap-x-2 md:gap-x-4 w-[19%] m-auto justify-center items-center">
              <span
                className="text-lg md:text-2xl border px-2 cursor-pointer"
                onClick={() => handleDecrement(item)}
              >
                -
              </span>
              <span>{item.quantity}</span>
              <span
                className="text-lg md:text-2xl border px-2 cursor-pointer"
                onClick={() => handleIncrement(item)}
              >
                +
              </span>
            </li>
            <li className="w-[19%] m-auto text-center">{`$${(
              item.quantity * item.price
            ).toFixed(2)}`}</li>
          </div>
        ))}
        {/* Subtotal */}
        <div className="bg-[#F5F7F7] py-3 px-4 md:px-20 font-bold flex justify-between text-sm md:text-base">
          <li>SubTotal</li>
          <li>{`$${subTotal.toFixed(2)}`}</li>
        </div>
        {/* Button */}
        <div>
          <Button className="bg-gray-600 text-white w-full font-bold text-lg md:text-3xl">
            Buy Now
          </Button>
        </div>
      </ul>
    </div>
  )}

  {/* User Dropdown */}
  {viewUser && (
    <div className="">
      <ul className="absolute right-10 md:right-80 font-semibold bg-black text-white px-3 py-2 text-sm md:text-base">
        <li>
          <Link to={"/signup"}>Sign Up</Link>
        </li>
        <li>
          <Link>Log in</Link>
        </li>
      </ul>
    </div>
  )}

  {/* Category Dropdown */}
  {viewCategory && (
    <div className="bg-black text-white w-[200px] md:w-[300px] absolute text-sm md:text-base">
      <ul>
        <li className="border-b-2 p-2">Beauty</li>
        <li className="border-b-2 p-2">Electronics</li>
        <li className="border-b-2 p-2">Shoes</li>
        <li className="border-b-2 p-2">Bags</li>
        <li className="border-b-2 p-2">Clothes</li>
      </ul>
    </div>
  )}
</Container>

        </div>
      </div>
    </>
  );
};

export default Header;
