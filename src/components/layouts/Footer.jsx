import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import Heading from "../Heading";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3]">
        <Container>
          
          <div className="py-[30px]">
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-8">
            
              <div className="flex-1">
                <Heading text={"MENU"} tagName={"h3"} className={"font-bold"} />
                <ul className="text-[#767676]">
                  <Link to={"/"}>
                    <li className="hover:text-[#262626] hover:font-bold duration-500 mt-[17px]">
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

            
              <div className="flex-1">
                <Heading text={"SHOP"} tagName={"h3"} className={"font-bold"} />
                <ul className="text-[#767676]">
                  <Link to={"/"}>
                    <li className="hover:text-[#262626] hover:font-bold duration-500 mt-[17px]">
                      Category 1
                    </li>
                  </Link>
                  <Link to={"/shop"}>
                    <li className="hover:text-[#262626] hover:font-bold duration-500">
                      Category 2
                    </li>
                  </Link>
                  <Link to={"/about"}>
                    <li className="hover:text-[#262626] hover:font-bold duration-500">
                      Category 3
                    </li>
                  </Link>
                  <li className="hover:text-[#262626] hover:font-bold duration-500">
                    <Link to={"/contact"}>Category 4</Link>
                  </li>
                  <li className="hover:text-[#262626] hover:font-bold duration-500">
                    <Link to={"/journal"}>Category 5</Link>
                  </li>
                </ul>
              </div>

             
              <div className="flex-1">
                <Heading text={"HELP"} tagName={"h3"} className={"font-bold"} />
                <ul className="text-[#767676]">
                  <Link to={"/"}>
                    <li className="hover:text-[#262626] hover:font-bold duration-500 mt-[17px]">
                      Privacy Policy
                    </li>
                  </Link>
                  <Link to={"/shop"}>
                    <li className="hover:text-[#262626] hover:font-bold duration-500">
                      Terms & Conditions
                    </li>
                  </Link>
                  <Link to={"/about"}>
                    <li className="hover:text-[#262626] hover:font-bold duration-500">
                      Special E-shop
                    </li>
                  </Link>
                  <li className="hover:text-[#262626] hover:font-bold duration-500">
                    <Link to={"/contact"}>Shipping</Link>
                  </li>
                  <li className="hover:text-[#262626] hover:font-bold duration-500">
                    <Link to={"/journal"}>Secure Payments</Link>
                  </li>
                </ul>
              </div>

             
              <div className="flex-1">
                <Heading
                  tagName={"h4"}
                  text={"(052) 611-5711 company@domain.com"}
                  className={
                    "w-full md:w-[187px] font-bold leading-[27px] text-[#262626]"
                  }
                />
                <Heading
                  tagName={"p"}
                  text={"575 Crescent Ave. Quakertown, PA 18951"}
                  className={
                    "text-[#6D6D6D] text-[14px] mt-[15px] mb-[20px] md:mb-[40px]"
                  }
                />
              </div>

              
              <div className="flex-1 flex md:block justify-center">
                <Image imgSrc={Logo} className={"mb-[30px] md:mb-[60px]"} />
              </div>
            </div>
          </div>

         
          <div className="py-[25px] border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-x-3 text-lg">
                <FaFacebookF className="cursor-pointer hover:text-[#262626]" />
                <FaLinkedinIn className="cursor-pointer hover:text-[#262626]" />
                <FaInstagram className="cursor-pointer hover:text-[#262626]" />
              </div>
              <div className="text-center md:text-right">
                <Heading
                  text={"2025 cartivo Minimal eCommerce Figma Template by Adveits"}
                  tagName={"p"}
                  className={"text-[#6D6D6D] text-[14px]"}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
