import React from 'react';

const Button = ({ text, call, classProps }) => {
  const changeCall = (e) => {
    e.preventDefault();
    call();
  };

  return (
    <button className={`btn ${classProps}`} onClick={changeCall}>
      {text}
    </button>
  );
};

export default Button;
