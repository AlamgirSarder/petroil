import React from "react";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

import Flex from "../layouts/Flex";
import Container from "../layouts/Container";
import { FaAngleRight } from "react-icons/fa";

const imgg = [
  {
    img: blog1,
    title:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
  },
  {
    img: blog2,
    title:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
  },
  {
    img: blog3,
    title:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-[#F0F0F0] py-[50px] md:py-[110px]">
      <Container>
        <Flex className="justify-between flex-col md:flex-row">
          {imgg.map((item, index) => (
            <div key={index} className="md:w-[339px] h-[401px] relative mt-[30px] md:mt-0">
              <img src={item.img} alt="slide" className="w-full h-full" />
              <div className="absolute inset-0 bg-black/60">
                <p className="w-[249px] font-primary text-[24px] font-bold text-white pt-[75px] pl-[46px]">
                  {item.title}
                </p>
                <button className="py-[10px] px-[22px] bg-white/50 bg-opacity-50 text-white mt-[52px] ml-[46px]">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </Flex>
        <div>
          <h2 className="mt-[28px] font-primary text-[16px] font-bold flex justify-end items-center">
            MORE FROM THE BLLOG <FaAngleRight size={20} />
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
