import React from 'react';

import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.png';

const imgg = [slide1, slide2, slide3, slide4];

const Slider = () => {
  return (
    <section>
      <div className="flex gap-[30px] overflow-x-auto">
        {imgg.map((item, index) => (
          <div key={index}>
            <img src={item} alt="slide" className='w-[458px]' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
