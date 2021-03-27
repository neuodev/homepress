import React from 'react';

const Form = () => {
  return (
    <div className=''>
      <div className='bg-gray-50 px-5 py-7 shadow-xl '>
        <p className='font-semibold  text-gray-800 mb-3'>
          Call:{' '}
          <span className='text-gray-500 font-light border-b-2 border-dashed pb-1 '>
            {' '}
            (86********)
          </span>
        </p>
        <h1 className='flex items-center justify-start mb-3'>
          <i class='fa fa-shield text-green-500 mr-2' aria-hidden='true'></i>
          <p className='text-lg '>Jone Doe</p>
        </h1>
        <div className='w-full flex items-center  bg-gray-200 px-2 mb-3'>
          <i class='fa fa-user mr-2' aria-hidden='true'></i>
          <input
            className='w-full bg-gray-200 py-2 px-3 focus:outline-none'
            type='text'
            placeholder='First Name, Last Name'
          />
        </div>
        <div className='w-full flex items-center  bg-gray-200 px-2 mb-3 '>
          <i class='fa fa-envelope-o mr-2' aria-hidden='true'></i>
          <input
            className='w-full bg-gray-200 py-2 px-3 focus:outline-none'
            type='text'
            placeholder='Your Email Address*'
          />
        </div>
        <div className='w-full flex items-center  bg-gray-200 px-2 mb-3 '>
          <i class='fa fa-phone mr-2' aria-hidden='true'></i>
          <input
            className='w-full bg-gray-200 py-2 px-3 focus:outline-none'
            type='text'
            placeholder='Your Phone'
          />
        </div>
        <div className='w-full bg-gray-200'>
          <textarea
            className='w-full bg-gray-200 focus:outline-none p-5 '
            cols='25'
            rows='5'></textarea>
        </div>
        <button className='w-full  py-3 bg-blue-600  text-white  uppercase tracking-wide text-sm font-semibold mt-3 focus:ring focus:outline-none'>
          contact property
        </button>
      </div>
    </div>
  );
};

export default Form;
