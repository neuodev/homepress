import React from 'react';

const Select = ({ item, setItem, show, setShow, list, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <div>
        <p>{item}</p>
      </div>
    </div>
  );
};

export default Select;
