import React, { useContext } from 'react';
import { FieldsContext } from '../../../context/FieldsContext';
import './styles.scss';

const Input = ({ name, children }) => {
  const { dispatch } = useContext(FieldsContext);
  return (
    <div className="input">
      <div>{children}</div>
      <input
        name={name}
        className="input__field"
        onChange={e =>
          dispatch({
            type: 'ADD_DATA',
            payload: { name: `${name}`, value: `${e.target.value}` }
          })
        }
      />
    </div>
  );
};

export default Input;
