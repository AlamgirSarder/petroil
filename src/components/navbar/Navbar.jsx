import React from "react";
import Container from "../layouts/Container";
import logo from "../../assets/logo.png";
import Flex from "../layouts/Flex";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-primary py-10">
      <Container>
        <Flex className="justify-between md:items-center flex-col md:flex-row">
          <div className="flex justify-between items-center">
            <img src={logo} alt="logo" />
              <FaBars size={30} className="text-white" />
          </div>

          <Flex className="items-center flex-col md:flex-row">
            <div>
              <ul className="font-primary text-[16px] font-semibold text-white flex md:gap-12 flex-col md:flex-row text-center gap-2 mt-5 md:mt-0 ">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Gallery</li>
                <li className="cursor-pointer">Blog</li>
              </ul>
            </div>
            <div className="md:ml-[72px]">
              <button className="border py-[14px] px-8 border-white text-white mt-4 md:mt-0">
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
