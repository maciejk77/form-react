import React, { useReducer } from 'react';
import { FieldsContext } from '../../../context/FieldsContext';
import { fieldsReducer } from '../../../reducers';
import Form from '../../molecules/Form';

const App = () => {
  const [{ fields }, dispatch] = useReducer(fieldsReducer, { fields: [] });

  return (
    <div className="app">
      {/* <Header /> */}
      <FieldsContext.Provider value={{ fields, dispatch }}>
        <Form />
      </FieldsContext.Provider>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
