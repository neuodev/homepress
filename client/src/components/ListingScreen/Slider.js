import React, { Component } from 'react';
import './style.css';
const images = [
  'pro-1.jpg',
  'pro-2.jpg',
  'pro-3.jpg',
  'pro-4.jpg',
  'pro-5.jpg',
  'pro-6.jpg',
  'pro-7.jpg',
  'pro-8.jpg',
  'pro-10.jpg',
];

class Slider extends Component {
  state = {
    aciveSlide: 0,
    limit: 5,
  };

  setAciveSlide = idx => {
    this.setState({ ...this.state, aciveSlide: idx });
  };

  render() {
    return (
      <div className='px-5 max-w-screen-lg mx-auto'>
        <div className=''>
          <div className='relative slider-height-listing '>
            {images.map((img, idx) => (
              <div
                className={
                  this.state.aciveSlide === idx ? 'showSlide' : 'hideSlide'
                }>
                <img
                  className={`absolute top-0 left-0 w-full  h-full rounded-md  shadow-md object-cover  border ${
                    this.state.aciveSlide ? 'showSlideImg' : 'hideSlideImg'
                  }`}
                  src={`./images/${img}`}
                  alt='aciveSlide'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-center justify-start flex-wrap py-3 '>
          {images.map((img, idx) => {
            if (idx > this.state.limit) {
              return;
            }

            return (
              <div
                key={idx}
                className='relative '
                onClick={() => this.setAciveSlide(idx)}>
                {idx === this.state.limit && (
                  <div onClick={() => this.setAciveSlide(idx)}>
                    <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30  text-white text-3xl  flex items-center justify-center z-0 -m-1 rounded-md   '></div>
                    <p className='absolute transform -translate-x-1/2  -translate-y-1/2 text-white font-bold text-xl z-50 opacity-100 top-1/2 left-1/2  '>
                      +{images.length - this.state.limit}
                    </p>
                  </div>
                )}
                <img
                  className={`w-20 h-20 object-cover mr-2 mb-2 rounded-md  shadow-md  ${
                    this.state.aciveSlide === idx && 'ring'
                  }  `}
                  src={`./images/${img}`}
                  alt=''
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
