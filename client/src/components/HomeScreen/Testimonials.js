import React from 'react';

const testimonials = [
  {
    images: '/images/testimonial_1.jpg',
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
    images: '/images/testimonial_6.jpg',
    name: 'David S. Morris',
    job: 'ceo at entavollc',
    text:
      'HomePress WP comes up with results that are actually implementable. That is their strength compared to other consulting companies.',
  },
];

const Testimonials = () => {
  return (
    <div>
      <div>
        {testimonials.map(item => (
          <div>
            <img src={item.images} alt='' />
            <h1>{item.name}</h1>
            <p>{item.job}</p>
            <em>{item.text}</em>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
