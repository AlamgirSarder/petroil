import React, { useState } from "react";
import Container from "../layouts/Container";
import logo from "../../assets/logo.png";
import Flex from "../layouts/Flex";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";


import ScrollSpy from "react-scrollspy-navigation";
const Navbar = () => {

const [show,setShow] = useState(false)


  return (
    <nav className="bg-primary py-5 md:py-10 sticky top-0 left-0 z-[999]">
      <ScrollSpy>
      <Container>
        <Flex className="justify-between md:items-center flex-col md:flex-row">
          <div className="flex justify-between items-center">
            <img src={logo} alt="logo" />

              {
              
              show ? (<ImCross onClick={()=>setShow(!show)} size={30} className="text-white md:hidden cursor-pointer " />):(<FaBars onClick={()=>setShow(!show)} size={30} className="text-white md:hidden cursor-pointer" />)
                
              }

          </div>

          <Flex className="items-center hidden md:flex">
            <div>
             
               <ul className="font-primary text-[16px] font-semibold text-white flex md:gap-12 flex-col md:flex-row text-center gap-2 mt-5 md:mt-0 ">
                <li className="cursor-pointer"><a href="#home">Home</a></li>
                <li className="cursor-pointer"><a href="#about">About</a></li>
                <li className="cursor-pointer"><a href="#services">Services</a></li>
                <li className="cursor-pointer"><a href="#gallery">Gallery</a></li>
                <li className="cursor-pointer"><a href="#blog">Blog</a></li>
              </ul>
            
            </div>
            <div className="md:ml-[72px]">
              <button className="border py-[14px] px-8 border-white text-white mt-4 md:mt-0">
                <a href="#contact">CONTACT</a>
              </button>
            </div>
          </Flex>
        </Flex>
      </Container>
      </ScrollSpy>


      {
        show && (
          <Flex className="items-center flex-col md:flex-row md:hidden">
            <div>
              <ul className="font-primary text-[16px] font-semibold text-white flex md:gap-12 flex-col md:flex-row text-center gap-2 mt-5 md:mt-0 ">
               <li className="cursor-pointer"><a href="#home">Home</a></li>
                <li className="cursor-pointer"><a href="#about">About</a></li>
                <li className="cursor-pointer"><a href="#services">Services</a></li>
                <li className="cursor-pointer"><a href="#gallery">Gallery</a></li>
                <li className="cursor-pointer"><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div className="md:ml-[72px]">
              <button className="border py-[14px] px-8 border-white text-white mt-4 md:mt-0 cursor-pointer">
                CONTACT
              </button>
            </div>
          </Flex>
        )
      }
    </nav>
  );
};

export default Navbar;
