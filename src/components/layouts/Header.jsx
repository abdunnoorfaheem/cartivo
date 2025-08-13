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
            <Image imgSrc={Logo} />
            <div className="mr-[250px]">
              <ul className="flex gap-x-12">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/shop"}>
                <li>Shop</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
              <li><Link to={"/contact"}>Contacts</Link></li>
            <li><Link to={"/journal"}>Journal</Link></li>
            </ul>
            </div>
            {/* <Button>Shop Now</Button> */}
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
