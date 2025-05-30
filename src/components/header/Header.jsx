import React from "react";
import Flex from "../layouts/Flex";
import Container from "../layouts/Container";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="bg-[#282828] py-[15px]">
        <Container>
          <Flex className="justify-between flex-col md:flex-row">
            <Flex className="justify-between md:">
              <Flex className="items-center md:mr-[50px]">
                <MdOutlineMarkEmailUnread
                  className="text-white mr-[5px]"
                  size={20}
                />
                <p className=" relative text-white text-[12px] after:absolute after:content-[''] after:w-[1px] after:h-4 after:bg-[#5C6A92] after:top-1/2 after:-translate-y-1/2 after:right-[-22px]">mail@yourcompany.com</p>
              </Flex>
              <Flex className="items-center">
                <BiPhoneCall className="text-white mr-[5px]" size={20} />
                <p className="font-primary text-white text-[12px]">
                  +896 120 5889 (Toll free)
                </p>
              </Flex>
            </Flex>

            <div>
              <ul className="text-white gap-5 flex justify-center mt-[10px] md:mt-0 cursor-pointer">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaInstagram />
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <hr className="h-[5px] bg-[#FFB800] border-t border-b " />
    </header>
  );
};

export default Header;
