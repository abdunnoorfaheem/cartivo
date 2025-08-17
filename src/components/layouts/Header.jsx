import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Flex from "../Flex";
import Button from "../Button";
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart   } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Heading from "../Heading";


const Header = () => {
  return (
    <>
      <div className="">
        <Container>
          <Flex className={"justify-between py-[30px]"}>
            <div className="w-[40%]">
              <Link to={"/"}><Image imgSrc={Logo} /></Link>
              
            </div>
            <div className="w-[60%]">
              <ul className="flex gap-x-12 text-[#767676]">
              <Link to={"/"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">Home</li>
              </Link>
              <Link to={"/shop"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">Shop</li>
              </Link>
              <Link to={"/about"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">About</li>
              </Link>
              <li className="hover:text-[#262626] hover:font-bold duration-500"><Link to={"/contact"}>Contacts</Link></li>
            <li className="hover:text-[#262626] hover:font-bold duration-500"><Link to={"/journal"}>Journal</Link></li>
            </ul>
            </div>
            
          </Flex>
        </Container>
        <div className="bg-[#F5F5F3] py-[30px]">
          <Container>
            <Flex className={"justify-between"}>
              <div className="flex items-center gap-x-2 text-[14px]">
                <FaBarsStaggered />
                <Heading text={"Shop by Category"} tagName={"h4"} className={"text-[#262626]"}/>
              </div>
              <div className="relative">
                <input type="text" placeholder="Search Products" className="bg-white py-[16px] pl-[21px] w-[600px] outline-0 placeholder:text-[#C4C4C4]" />
                <FaSearch className="absolute right-3 top-[50%] -translate-[50%]"/>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex">
                  <FaUser />
                <FaCaretDown />
                </div>
                <FaShoppingCart />
              </div>
            </Flex>
              
          </Container>
         </div>
      </div>
    </>
  );
};

export default Header;
