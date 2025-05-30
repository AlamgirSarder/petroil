import React from "react";
import Container from "../layouts/Container";

const Banner = () => {
  return (
    <section className='relative py-[80px] md:py-[258px] bg-[url(./assets/banner.png)] bg-no-repeat bg-cover bg-center after:content-[""] after:absolute after:w-full after:h-full after:bg-[#000000] after:top-0 after:left-0 after:opacity-60 after:z-0'>
      <Container>
        <div className="relative z-10 text-center md:text-left">
          <h2 className="mb-8 font-primary font-bold text-[30px] md:text-[64px] md:w-[842px] text-white text-center md:text-left">
            We exist since 1975 on the oil and gas industry.
          </h2>
          <button className="py-[13px] px-10 text-white bg-primary cursor-pointer">
          Learn More
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
