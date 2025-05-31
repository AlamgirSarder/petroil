import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";

const Contact = () => {
  return (
    <section>
      <div className="bg-primary py-[46px]">
        <Container>
          <Flex className="justify-between items-center flex-col md:flex-row text-center md:text-left">
            <h2 className="font-primary text-[30px] md:text-[36px] text-white font-bold">
              Want to join as member branch in your area?
            </h2>
            <button className="border py-[14px] px-8 border-white text-white mt-[30px] md:mt-0">
              CONTACT
            </button>
          </Flex>
        </Container>
      </div>

      <hr className="h-[5px] bg-[#FFB800] border-t-0 border-b " />
    </section>
  );
};

export default Contact;
