import React from 'react';

const Alert = ({ serverity, message }) => {

  return (
    <div className={`max-w-screen-lg mx-auto px-6 my-10 py-6 `}>
      <div
        className={` ${
          serverity === 'error'
            ? ' bg-red-200'
            : serverity === 'success'
            ? 'bg-green-200'
            : serverity === 'warning'
            ? 'bg-yellow-200'
            : 'bg-blue-200'
        } flex flex-row items-center justify-start px-6  py-6 `}>
        {serverity === 'error' ? (
          <i class='far fa-exclamation-square mr-2 text-red-800 p-3 rounded-full bg-red-300'></i>
        ) : serverity === 'success' ? (
          <i class='fas fa-shield-check mr-2 text-lg text-green-800 p-2 px-3 rounded-full bg-green-300   '></i>
        ) : serverity === 'warning' ? (
          <i
            class='fa fa-exclamation-triangle mr-2 text-lg text-yellow-800 p-2 px-3  rounded-full bg-yellow-300 '
            aria-hidden='true'></i>
        ) : (
          <i class='fas fa-exclamation-circle  mr-2 text-lg text-blue-800 p-2 px-3  rounded-full bg-blue-300    '></i>
        )}
        <h1
          className={`${
            serverity === 'error'
              ? ' text-red-500'
              : serverity === 'success'
              ? 'text-green-500'
              : serverity === 'warning'
              ? 'text-yellow-600'
              : 'text-blue-500'
          } uppercase tracking-wider font-semibold   `}>
          {message}
        </h1>
      </div>
    </div>
  );
};

export default Alert;
