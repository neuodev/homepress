import React, { useState } from 'react';

const parteners = [
  './images/partner_one.png',
  './images/partner_two.png',
  './images/partner_three.png',
  './images/partner_four.png',
];
const Partners = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className='py-10 px-4 bg-gray-100 '>
      <div className='container mx-auto  '>
        <h1 className='text-center text-6xl text-gray-600 mb-7 '>
          Our Partners
        </h1>
        <div className='flex items-center justify-center flex-wrap'>
          {parteners.map((p, idx) => (
            <div
              onMouseEnter={() => setAnimate(idx)}
              onMouseLeave={() => setAnimate(false)}
              className={`${
                animate === idx ? 'animate' : 'deanimate'
              } w-1/2 mb-7 flex items-center justify-center  py-5`}
              key={idx}>
              <img src={p} alt={idx} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
