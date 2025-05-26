import React from "react";
import Flex from "../layouts/Flex";
import Container from "../layouts/Container";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <div className="bg-[#282828] py-[15px]">
        
        <Container>
            <Flex className="justify-between">
            <Flex>
                <Flex className="items-center mr-[50px]">
                    <MdOutlineMarkEmailUnread className="text-white mr-[5px]" size={20} />
                    <p className=" text-white text-[12px]">mail@yourcompany.com</p>
                </Flex>
                <Flex className="items-center">
                    <BiPhoneCall className="text-white mr-[5px]" size={20} />
                     <p className="font-primary text-white text-[12px]">+896 120 5889 (Toll free)</p>
                </Flex>
                
               
            </Flex>

            <div>
                <ul className="text-white gap-5 flex">
                    <li><FaFacebookF /></li>
                    <li><FaTwitter /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FaInstagram /></li>
                   
                </ul>
            </div>

        </Flex>
        </Container>


      </div>
    </header>
  );
};

export default Header;
