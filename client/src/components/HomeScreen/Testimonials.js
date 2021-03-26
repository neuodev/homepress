import React, { Component, useState } from 'react';

const testimonials = [
  {
    images: '/images/testimonial_6.jpg',
    name: 'Maria E. Flynn',
    job: 'Manager at coldhawk inc.',
    text:
      'It’s ideal for business clients who simply prefer to pay for transactions only as incurred. They help managing your time so you’ll get more done.',
  },
  {
    images: '/images/testimonial_3.jpg',
    name: 'Dalmer Johnson',
    job: 'founder of webflex inc',
    text:
      'We have chosen to work extensively with HomePress because of their quality services, including their On-the-Job Training program and other employer.',
  },
  {
    images: '/images/testimonial_1.jpg',
    name: 'David S. Morris',
    job: 'ceo at entavollc',
    text:
      'HomePress WP comes up with results that are actually implementable. That is their strength compared to other consulting companies.',
  },
];

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  nextSlide = () => {
    let slide =
      this.state.activeSlide + 1 < testimonials.length
        ? this.state.activeSlide + 1
        : 0;
    console.log(this.state);
    this.setState({
      activeSlide: slide,
    });
  };
  prevSlide = () => {
    let slide =
      this.state.activeSlide - 1 < 0
        ? testimonials.length - 1
        : this.state.activeSlide - 1;
    this.setState({
      activeSlide: slide,
    });
  };
  render() {
    const slider = this.state.activeSlide;
    return (
      <div className=' p-4    bg-blue-100 '>
        <div className='container mx-auto flex items-center justify-center flex-col relative slider-height'>
          {testimonials.map((item, idx) => (
            <div
              className={`flex items-center justify-center flex-col text-center absolute   ${
                slider === idx ? 'showSlide' : 'hideSlide'
              } slide`}
              key={idx}>
              <img
                className='w-40 h-40 md:h-44 md:w-44  object-cover inline-block rounded-md mb-3 shadow-lg '
                src={item.images}
                alt={item.name}
              />
              <h1 className='text-2xl md:text-3xl font-bold mb-1'>
                {item.name}
              </h1>
              <p className='text-blue-600 md:text-lg uppercase tracking-wider mb-3 '>
                {item.job}
              </p>
              <em className='max-w-xl px-4 md:text-lg '>{item.text}</em>
            </div>
          ))}
          <div className='absolute  bottom-2  slider-btn' >
            <button
              onClick={this.prevSlide}
              className='px-5 py-3 text-gray-800 bg-white mx-3 rounded-full focus:outline-none focus:ring '>
              <i class='fa fa-chevron-left' aria-hidden='true'></i>
            </button>
            <button
              onClick={this.nextSlide}
              className='px-5 py-3 text-gray-800 bg-white mx-3 rounded-full focus:outline-none focus:ring '>
              <i class='fa fa-chevron-right' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
