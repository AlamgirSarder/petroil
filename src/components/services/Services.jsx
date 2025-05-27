import React from "react";
import Flex from "../layouts/Flex";

const Services = () => {
  return (
    <section className="mt-7">
      <Flex>
        <div className="pt-[147px] pb-[139px] w-[50%] flex justify-end">
          <div>
            <h2 className="w-[509px] font-primary font-bold text-[64px]">
              Our Services
            </h2>
            <p className="w-[405px] font-primary font-medium text-[16px] text-[#6C6C6C]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className=' pt-[147px] pb-[139px] w-[50%] relative bg-[url(./assets/service1.png)] bg-no-repeat bg-cover bg-center after:content-[""] after:absolute after:w-full after:h-full after:bg-[#000000] after:top-0 after:left-0 after:opacity-60 after:z-0'>
          <div className="relative z-10 ml-[116px]">
            <h2 className="mb-8 font-primary font-bold text-[36px] w-[691px] text-white">
              Modern natural oil and gas refineries.
            </h2>
            <button className="py-[13px] px-10 text-white bg-primary">
              Learn More
            </button>
          </div>
        </div>
      </Flex>
      <Flex>
        <div className=' pt-[147px] pb-[139px] w-[50%] relative bg-[url(./assets/service2.png)] bg-no-repeat bg-cover bg-center after:content-[""] after:absolute after:w-full after:h-full after:bg-[#000000] after:top-0 after:left-0 after:opacity-60 after:z-0'>
          <div className="relative z-10 ml-[116px]">
            <h2 className="mb-8 font-primary font-bold text-[36px] w-[691px] text-white">
              Supply of national industries.
            </h2>
            <button className="py-[13px] px-10 text-white bg-primary">
              Learn More
            </button>
          </div>
        </div>
        <div className=' pt-[147px] pb-[139px] w-[50%] relative bg-[url(./assets/service3.png)] bg-no-repeat bg-cover bg-center after:content-[""] after:absolute after:w-full after:h-full after:bg-[#000000] after:top-0 after:left-0 after:opacity-60 after:z-0'>
          <div className="relative z-10 ml-[116px]">
            <h2 className="mb-8 font-primary font-bold text-[36px] w-[691px] text-white">
              National fuel distribution and supply.
            </h2>
            <button className="py-[13px] px-10 text-white bg-primary">
              Learn More
            </button>
          </div>
        </div>
      </Flex>
    </section>
  );
};

export default Services;
