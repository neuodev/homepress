import React, { useState } from 'react';
import { validate } from '../../utils/validateInput';
import Alert from '../utils/Alert';
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [nameAlert, setNameAlert] = useState('');
  const [emailAlert, setEmailAlert] = useState('');
  const [phoneAlert, setPhoneAlert] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const [successAlert, setSuccessAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = e => {
    e.preventDefault();

    const isValid = validate(
      name,
      email,
      phone,
      message,
      setNameAlert,
      setEmailAlert,
      setPhoneAlert,
      setMessageAlert
    );

    if (!isValid) return;

    setLoading(true);
    setTimeout(() => {
      setSuccessAlert('Message Sended successfully');
      setLoading(false);
    }, 500);
  };

  return (
    <div className=''>
      <form onSubmit={onSubmit} className='bg-gray-50 px-5 py-7 shadow-xl '>
        <p className='font-semibold  text-gray-800 mb-3'>
          Call:{' '}
          <span className='text-gray-500 font-light border-b-2 border-dashed pb-1 '>
            {' '}
            ( 86********** )
          </span>
        </p>
        <h1 className='flex items-center justify-start mb-3'>
          <i
            class='fa fa-shield-check text-green-500 mr-2'
            aria-hidden='true'></i>
          <p className='text-lg '>Jone Doe</p>
        </h1>
        <div className=' mb-3'>
          <div className='w-full flex items-center  bg-gray-200  px-4'>
            <i class='far fa-user mr-2' aria-hidden='true'></i>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              className='w-full bg-gray-200 py-2 px-3 focus:outline-none'
              type='text'
              placeholder='First Name, Last Name*'
            />
          </div>
          {nameAlert && (
            <p className='text-red-400 text-sm font-semibold mt-0.5'>
              {nameAlert}
            </p>
          )}
        </div>
        <div className='mb-3'>
          <div className='w-full flex items-center  bg-gray-200 px-4  '>
            <i class='far fa-envelope mr-2' aria-hidden='true'></i>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='w-full bg-gray-200 py-2 px-3 focus:outline-none'
              type='text'
              placeholder='Your Email Address*'
            />
          </div>
          {emailAlert && (
            <p className='text-red-400 text-sm font-semibold mt-0.5'>
              {emailAlert}
            </p>
          )}
        </div>
        <div className='mb-3'>
          <div className='w-full flex items-center  bg-gray-200 px-4 '>
            <i class='far fa-phone mr-2' aria-hidden='true'></i>
            <input
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className='w-full bg-gray-200 py-2 px-3 focus:outline-none'
              type='text'
              placeholder='Your Phone ( ###-###-#### )'
            />
          </div>
          {phoneAlert && (
            <p className='text-red-400 text-sm font-semibold mt-0.5'>
              {phoneAlert}
            </p>
          )}
        </div>
        <div className=''>
          <div className='w-full bg-gray-200'>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              className='w-full bg-gray-200 focus:outline-none p-5 '
              cols='25'
              rows='5'></textarea>
          </div>
          {messageAlert && (
            <p className='text-red-400 text-sm font-semibold mt-0.5'>
              {messageAlert}
            </p>
          )}
        </div>
        <button
          type='submit'
          className='w-full  py-4 bg-blue-600  text-white  uppercase tracking-wide text-sm font-semibold mt-3 focus:ring focus:outline-none'>
          contact property
        </button>

        {loading ? (
          <div className='flex items-center justify-center my-7'>
            <div className='w-7 h-7 animate-ping bg-blue-400 rounded-full'></div>
          </div>
        ) : (
          successAlert && <Alert serverity='success' message={successAlert} />
        )}
        <Alert serverity='warning' message='For test only' />
      </form>
    </div>
  );
};

export default Form;
