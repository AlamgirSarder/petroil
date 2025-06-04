import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";

const Welcome = () => {
  return (
    <section id="gallery" className="py-[50px] md:pt-[78px]  md:pb-[100px]">
      <Container>
        <Flex className="items-center flex-col md:flex-row">
          <h2 className="font-primary font-bold text-[30px] md:text-[48px] md:leading-[72px] md:w-[289px] md:mr-[178px] text-center md:text-left mb-5 md:mb-0">
            The biggest supplier on the country
          </h2>
          <p className="md:w-[651px] text-[#6C6C6C] text-[16px] font-medium font-primary text-justify md:text-left">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
          
        </Flex>
      </Container>
    </section>
  );
};

export default Welcome;
