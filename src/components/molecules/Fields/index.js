import React from 'react';
import Text from '../../atoms/Text';
import Input from '../../atoms/Input';
import Select from '../Select';
import './styles.scss';

const whichInput = type => (type === 'text' ? true : false);
// this can be refactored to if() text, dropdown specifically any any additional type

const Fields = ({ fields }) =>
  fields.map((f, i) => (
    <div key={i} className="fields">
      {whichInput(f.type) ? (
        <Input name={f.name}>
          <Text>{f.label}</Text>
        </Input>
      ) : (
        <Select options={f.options} name={f.name}>
          <Text>{f.label}</Text>
        </Select>
      )}
    </div>
  ));

export default Fields;
