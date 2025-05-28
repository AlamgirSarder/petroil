import React from "react";
import Container from "../layouts/Container";
import Flex from "../layouts/Flex";

const About = () => {
  return (
    <section className="bg-[#F0F0F0] py-[136px]">
      <Container>
        <Flex>
          <div className="bg-primary  py-[100px] pl-[74px] w-[413px]">
            <h2 className="font-primary font-bold text-[36px] text-white w-[262px]">
              Learn more about our company
            </h2>
          </div>
          <div className=' w-[726px] bg-[url("./assets/about.png")] bg-cover bg-no-repeat bg-center pt-[168px] pb-[142px] text-center'>
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
