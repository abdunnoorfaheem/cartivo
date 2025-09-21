import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import {Link} from "react-router-dom";
import Heading from "../Heading";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { FaFacebookF,FaLinkedinIn,FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3]">
        <Container>
        <div className="py-[30px]">
          <div className="md:flex items-center md:justify-between">
            <div className="">
              
              <Heading text={"MENU"} tagName={"h3"} className={"font-bold"}/>
               <ul className=" text-[#767676]">
              <Link to={"/"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500 mt-[17px]">Home</li>
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
            <div className="">
              
              <Heading text={"SHOP"} tagName={"h3"} className={"font-bold"}/>
               <ul className=" text-[#767676]">
              <Link to={"/"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500 mt-[17px]">Category 1</li>
              </Link>
              <Link to={"/shop"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">Category 2</li>
              </Link>
              <Link to={"/about"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">Category 3</li>
              </Link>
              <li className="hover:text-[#262626] hover:font-bold duration-500"><Link to={"/contact"}>Category 4</Link></li>
            <li className="hover:text-[#262626] hover:font-bold duration-500"><Link to={"/journal"}>Category 5</Link></li>
            </ul>
            </div>
            <div className="">
              <Heading text={"HELP"} tagName={"h3"} className={"font-bold"}/>
               <ul className=" text-[#767676]">
              <Link to={"/"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500 mt-[17px]">Privacy Policy</li>
              </Link>
              <Link to={"/shop"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">Terms & Conditions</li>
              </Link>
              <Link to={"/about"}>
                <li className="hover:text-[#262626] hover:font-bold duration-500">Special E-shop</li>
              </Link>
              <li className="hover:text-[#262626] hover:font-bold duration-500"><Link to={"/contact"}>Shipping</Link></li>
            <li className="hover:text-[#262626] hover:font-bold duration-500"><Link to={"/journal"}>Secure Payments</Link></li>
            </ul>
            </div>
            
            
            <div className="">
              <Heading tagName={"h4"} text={"(052) 611-5711 company@domain.com"} className={"w-[187px] font-bold leading-[27px] text-[#262626]"}/>
              <Heading tagName={"p"} text={"575 Crescent Ave. Quakertown, PA 18951"} className={"text-[#6D6D6D] text-[14px] mt-[15px] mb-[89px]"}/>
            </div>
            <div className="">
              <Image imgSrc={Logo} className={"mb-[147px]"}/>
            </div>
          </div>
        </div>
        <div className="py-[25px]">
          <div className="md:flex justify-between items-center">
            <div className="flex items-center gap-x-3">
              <FaFacebookF/>
              <FaLinkedinIn/>
              <FaInstagram/>
            </div>
            <div className="">
              <Heading text={"2025 Orebi Minimal eCommerce Figma Template by Adveits"} tagName={"p"} className={"text-[#6D6D6D] text-[14px]"}/>
            </div>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Footer;
