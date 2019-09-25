import React from 'react';
import './styles.scss';

const Input = ({ name, children }) => (
  <div className="input">
    <div>{children}</div>
    <input name={name} className="input__field" />
  </div>
);

export default Input;
