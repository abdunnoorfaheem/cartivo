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
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";


const Header = () => {
  let cartAddNumber=useSelector(state=> state.addtocart.value);
  
  
  let [menu,setMenu]=useState(false);

  let handleMenu=()=>{
    setMenu(!menu);
  }
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

  return (
    <>
      <div className="" onClick={() => showCart && setShowCart(false)}>
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
             {menu ? <ImCross/> : <FaBars/>}
            </div>
          </Flex>
          {menu &&  <ul className="md:hidden  gap-x-12 gap-y-12 text-center text-[#767676] duration-700">
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
              </ul>}
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
               <div className="relative">
                 <FaShoppingCart onClick={() => setShowCart(!showCart)} />
                  <h3 className="absolute bottom-2 left-2 bg-red-800 text-white h-4 w-4 flex justify-center items-center rounded-full font-bold text-[12px]">{cartAddNumber.length}</h3>
               </div>
              </div>
            </Flex>
            {showCart && (
              <div
                className="h-screen w-[700px] bg-[#ced0d1] absolute right-0 top-0 z-100"
                onClick={() => setShowCart(!showCart)}
              >
                <ImCross className="text-[40px]" />
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
                        <Image imgSrc={item.productImage} className={"w-[60px]"}/>
                        
                      </li>
                      <li className="w-[19%] m-auto text-center">{item.title}</li>
                      <li className="w-[19%] m-auto text-center">{item.price}</li>
                      <li className="w-[19%] m-auto text-center">{item.quantity}</li>
                      <li className="w-[19%] m-auto text-center">{`$${item.quantity*item.price}`}</li>
                      {/* <li className="w-[19%] m-auto text-center">{`$${item.quantity*item.price}`}</li> */}
                      
                      
                      
                     
                    </div>
                  ))}
                  <div className=" bg-[#F5F7F7] py-3 px-10 font-bold">
                    <li>SubTotal</li>
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
