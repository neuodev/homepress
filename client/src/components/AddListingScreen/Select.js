import React from 'react';

const Select = ({ item, setItem, show, setShow, list, label }) => {
  const updateItem = item => {
    setItem(item);
    setShow(false);
  };

  document.addEventListener('click', e => {
    if (!e.target.closest('#list')) {
      setShow(false);
    }
  });
  return (
    <div id='list' className=''>
      <label className='font-semibold mb-1 text-sm' htmlFor={label}>
        {label}
      </label>
      <div className='relative'>
        <div
          onClick={() => setShow(!show)}
          className='bg-gray-100  px-4 py-2 cursor-pointer flex items-center justify-between '>
          <p className=''>{item}</p>
          <i
            class={`fa fa-chevron-down ${
              show && 'rotate-180'
            } transition-transform duration-300 transform  `}
            aria-hidden='true'></i>
        </div>
        <ul
          className={`absolute bg-gray-100 w-full py-2  ${
            !show && 'hidden'
          } max-h-32 overflow-y-scroll shadow-lg z-50 `}
          id='scroll'>
          {list.map((item, idx) => (
            <li
              onClick={() => updateItem(item)}
              className='py-1 px-4 hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-150'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
