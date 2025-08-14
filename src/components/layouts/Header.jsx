import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Flex from "../Flex";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <div className="py-[40px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[40%]">
              <Image imgSrc={Logo} />
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
      </div>
    </>
  );
};

export default Header;
