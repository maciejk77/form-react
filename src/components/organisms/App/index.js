import React, { useReducer } from 'react';
import { FieldsContext } from '../../../context/FieldsContext';
import { fieldsReducer } from '../../../reducers';
import InputGroup from '../../molecules/InputGroup';

const App = () => {
  const [{ fields }, dispatch] = useReducer(fieldsReducer, { fields: [] });

  // const handleChange = e => {
  //   dispatch({ type: 'ADD_DATA', payload: e.target.value });
  // };

  return (
    <div>
      {/* <Header /> */}
      <FieldsContext.Provider value={{ fields, dispatch }}>
        <InputGroup />
      </FieldsContext.Provider>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
