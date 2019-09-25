import React, { useState, useEffect } from 'react';
import { questions } from '../../../../src/config.json';

import Text from '../../atoms/Text';
import Fields from '../Fields';
import './styles.scss';

const InputGroup = () => {
  const [data, setData] = useState();

  const fetchData = () => {
    setTimeout(() => {
      setData(questions);
    }, 3000);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  if (!data) {
    return <div>Loading data, please wait...</div>;
  }

  return (
    <div>
      {data.map((q, i) => (
        <div className="input-group" key={i}>
          <Text>{q.title}</Text>
          <Fields key={i} fields={q.fields} type={q.type} />
        </div>
      ))}
    </div>
  );
};

export default InputGroup;
