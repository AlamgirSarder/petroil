import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";

const Welcome = () => {
  return (
    <section className="pt-[78px] pb-[100px]">
      <Container>
        <Flex className="items-center">
          <h2 className="font-primary font-bold text-[48px] leading-[72px] w-[289px] mr-[178px]">
            The biggest supplier on the country
          </h2>
          <p className="w-[651px] text-[#6C6C6C] text-[16px] font-medium font-primary">
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
