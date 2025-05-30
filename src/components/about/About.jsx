import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";

const About = () => {
  return (
    <section className="bg-[#F0F0F0] py-[50px] md:py-[136px]">
      <Container>
        <Flex>
          <div className="bg-primary py-[50px] md:py-[100px] md:pl-[74px] w-[30%] md:w-[413px]">
            <h2 className="font-primary font-bold md:text-[36px] text-white md:w-[262px] text-center md:text-left">
              Learn more about our company
            </h2>
          </div>
          <div className='w-[70%] md:w-[726px] bg-[url("./assets/about.png")] bg-cover bg-no-repeat bg-center py-[50px] md:pt-[168px] md:pb-[142px] text-center flex items-center justify-center'>
            <button className="py-[13px] px-[30px] text-[16px] bg-white text-primary font-semibold ">
              Learn More
            </button>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
