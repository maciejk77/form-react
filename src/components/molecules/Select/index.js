import React, { useContext } from 'react';
import './styles.scss';
import { FieldsContext } from '../../../context/FieldsContext';

const Select = ({ options, children, name }) => {
  const { dispatch } = useContext(FieldsContext);

  return (
    <div className="select">
      {children}
      <select
        className="select__dropdown"
        onChange={e =>
          dispatch({
            type: 'ADD_DATA',
            payload: { name: `${name}`, value: `${e.target.value}` }
          })
        }
      >
        <option className="option">--- Country ---</option>
        {options.map(opt => {
          return <option key={opt}>{opt}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
