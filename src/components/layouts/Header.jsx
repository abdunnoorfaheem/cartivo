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
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import { increment, decrement } from "/src/slices/addToCartSlice";

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
            <Flex className={"justify-between"}>
              <div className="flex items-center gap-x-2 text-[14px]">
                <FaBarsStaggered onClick={handleCategory} />

                <Heading
                  text={"Shop by Category"}
                  tagName={"h4"}
                  className={"text-[#262626]"}
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  className="bg-white py-[16px] pl-[21px] w-[600px] outline-0 placeholder:text-[#C4C4C4]"
                />

                <FaSearch className="absolute right-3 top-1/2 -translate-1/2" />
              </div>
              <div className="flex items-center gap-x-3 relative">
                <div className="flex" onClick={handleUser}>
                  <FaUser />
                  <FaCaretDown />
                </div>
                <div
                  className="relative"
                  onClick={() => setShowCart(!showCart)}
                >
                  <FaShoppingCart />
                  <h3 className="absolute bottom-2 left-2 bg-red-800 text-white h-4 w-4 flex justify-center items-center rounded-full font-bold text-[12px]">
                    {cartAddNumber?.length}
                  </h3>
                </div>
              </div>
            </Flex>
            {showCart && (
              <div className="h-screen w-[700px] bg-[#ced0d1]  right-0 top-0 z-50 fixed">
                <ImCross
                  className="text-[40px]"
                  onClick={() => setShowCart(!showCart)}
                />
                <ul className="py-5">
                  <div className="flex justify-between bg-[#F5F7F7] py-3 px-2 font-bold">
                    <li className="w-[19%] text-center">Product</li>
                    <li className="w-[19%] text-center">Product Name</li>
                    <li className="w-[19%] text-center">Price</li>
                    <li className="w-[19%] text-center">Quantity</li>
                    <li className="w-[19%] text-center">Total</li>
                  </div>
                  {data.map((item) => (
                    <div className="flex justify-between px-7 py-4 bg-white border-b-1 border-[#c3c9c9] ">
                      <li className="w-[19%] m-auto text-center">
                        <Image
                          imgSrc={item.productImage}
                          className={"w-[60px]"}
                        />
                      </li>
                      <li className="w-[19%] m-auto text-center">
                        {item.title}
                      </li>
                      <li className="w-[19%] m-auto text-center">
                        {item.price}
                      </li>
                      <li className="flex gap-x-4 w-[19%] m-auto text-center pl-7 items-center">
                        <li
                          className="text-2xl border-1 px-2"
                          onClick={() => {
                            handleDecrement(item);
                          }}
                        >
                          -
                        </li>

                        <li>{item.quantity}</li>
                        <li
                          className="text-2xl border-1 px-2"
                          onClick={() => {
                            handleIncrement(item);
                          }}
                        >
                          +
                        </li>
                      </li>
                      <li className="w-[19%] m-auto text-center pl-12">{`$${(
                        item.quantity * item.price
                      ).toFixed(2)}`}</li>
                    </div>
                  ))}
                  <div className=" bg-[#F5F7F7] py-3 px-20 font-bold flex  justify-between">
                    <li>SubTotal</li>
                    <li>{`$${subTotal.toFixed(2)}`}</li>
                    
                  </div>
                  <div className="">
                    <Button className={"bg-gray-600 text-white w-full font-bold text-3xl"}>Buy Now</Button>
                  </div>
                </ul>
              </div>
            )}
            {viewUser && (
              <div className="">
                <ul className="absolute right-80 font-semibold bg-black text-white px-5 py-2">
                  <li>
                    <Link to={"/signup"}>Sign Up</Link>
                  </li>
                  <li>
                    <Link>Log in</Link>
                  </li>
                </ul>
              </div>
            )}
            {viewCategory && (
              <div className=" bg-black text-white w-[300px] absolute">
                <ul>
                  <li className="border-b-2">beauty</li>
                  <li className="border-b-2">beauty</li>
                  <li className="border-b-2">beauty</li>
                  <li className="border-b-2">beauty</li>
                  <li className="border-b-2">beauty</li>
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
