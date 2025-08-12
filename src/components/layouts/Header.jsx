import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="">
        <ul className="flex gap-x-8">
          <Link to={"/"}>
          <li>Home</li>
          </Link>
          <Link to={"/shop"}>
          <li>Shop</li>
          </Link>
          <Link to={"/about"}>
          <li>About</li>
          </Link>
            {/* <li>Contacts</li>
            <li>Journal</li> */}
        </ul>
      </div>
    </>
  )
}

export default Header
