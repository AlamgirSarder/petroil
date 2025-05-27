import React from "react";
import Container from "../layouts/Container";
import logo from "../../assets/logo.png";
import Flex from "../layouts/Flex";
const Navbar = () => {
  return (
    <nav className="bg-primary py-10">
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>

          <Flex className="items-center">
            <div>
              <ul className="font-primary text-[16px] font-semibold text-white flex gap-12">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="ml-[72px]">
              <button className="border py-[14px] px-8 border-white text-white">
                CONTACT
              </button>
            </div>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
