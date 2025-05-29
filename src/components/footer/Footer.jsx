import React from "react";
import Container from "../layouts/Container";

import footer_logo from "../../assets/footer_logo.png";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Flex from "../layouts/Flex";

import cert1 from "../../assets/cert1.png";
import cert2 from "../../assets/cert2.png";

const list = [
  {
    title: "Company",
    lists: ["Home", "About", "Services", "Gallery"],
  },
  {
    title: "Others",
    lists: ["Blog", "Contact", "Terms & Conditions", "Privacy Policy"],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="pt-[149px] pb-[170px] bg-[#1F1F1F]">
        <Container>
        <Flex className="justify-between">
              <div className="w-[334px]">
            <img src={footer_logo} alt="footer_logo" />

            <Flex className="items-center mt-[33px]">
              <MdOutlineMarkEmailUnread
                className="text-white mr-[5px]"
                size={20}
              />
              <p className=" text-white text-[14px]">mail@yourcompany.com</p>
            </Flex>
            <Flex className="items-center mt-[15px]">
              <BiPhoneCall className="text-white mr-[5px]" size={20} />
              <p className="font-primary text-white text-[14px]">
                +896 120 5889 (Toll free)
              </p>
            </Flex>
            <Flex className="items-center mt-[15px]">
              <FaMapLocationDot className="text-white mr-[5px]" size={20} />
              <p className="font-primary text-white text-[14px]">
                101 Baker Street, New York, USA, 12345
              </p>
            </Flex>
            <div>
              <ul className="text-white gap-3 flex mt-[34px]">
                <li className="w-[29px] h-[29px] bg-primary rounded-[50%] flex items-center justify-center">
                  <FaFacebookF />
                </li>
                <li className="w-[29px] h-[29px] bg-primary rounded-[50%] flex items-center justify-center">
                  <FaTwitter />
                </li>
                <li className="w-[29px] h-[29px] bg-primary rounded-[50%] flex items-center justify-center">
                  <FaLinkedinIn />
                </li>
                <li className="w-[29px] h-[29px] bg-primary rounded-[50%] flex items-center justify-center">
                  <FaInstagram />
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-[42px]">
            {list.map((item, index) => (
              <div key={index} className="w-[173px]">
                <h2 className="font-primary text-[16px] font-bold text-white mb-[21px]">
                  {item.title}
                </h2>
                {item.lists.map((items, index) => (
                  <ul key={index}>
                    <li className="font-primary text-[14px] text-white mb-[15px]">
                      {items}
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>

          <div>
            <h2 className="mb-[21px] font-primary text-[16px] font-bold text-white">
              Certificate
            </h2>
            <Flex className="gap-[5px]">
              <img src={cert1} alt="Certificate1" />
              <img src={cert2} alt="Certificate2" />
            </Flex>
          </div>
        </Flex>
        </Container>
      </div>

      <div className="py-[43px] bg-[#282828]">
       <Container>
         <p className="font-primary text-[16px] font-medium text-[#6C6C6C]">&copy; Copyright 2024 by AltDesain Studio - All right reserved.</p>
       </Container>
      </div>
    </footer>
  );
};

export default Footer;
