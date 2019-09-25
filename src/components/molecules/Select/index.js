import React from 'react';
import Text from '../../atoms/Text';
import './styles.scss';

const Select = ({ options, children }) => (
  <div className="select">
    {children}
    <select className="select__dropdown">
      <option className="option">--- Country ---</option>
      {options.map(opt => {
        return <option key={opt}>{opt}</option>;
      })}
    </select>
  </div>
);

export default Select;
