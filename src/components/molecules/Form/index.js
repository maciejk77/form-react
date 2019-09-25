import React, { useState, useEffect, useContext } from 'react';
import { FieldsContext } from '../../../context/FieldsContext';
import { questions } from '../../../../src/config.json';
import { printToConsole } from '../../../utils';

import Text from '../../atoms/Text';
import Fields from '../Fields';
import './styles.scss';

const Form = () => {
  const [data, setData] = useState();
  const { fields } = useContext(FieldsContext);

  const fetchData = () => {
    setTimeout(() => {
      setData(questions);
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  if (!data) {
    return <div>Loading data, please wait...</div>;
  }

  const handleSubmit = e => {
    printToConsole(fields);
    e.preventDefault();
  };

  return (
    <form className="form " onSubmit={handleSubmit}>
      {data.map((q, i) => (
        <div className="form-group" key={i}>
          <Text>{q.title}</Text>
          <Fields key={i} fields={q.fields} type={q.type} />
        </div>
      ))}
      <input className="form-group__button" type="submit" value="SUBMIT" />
    </form>
  );
};

export default Form;
