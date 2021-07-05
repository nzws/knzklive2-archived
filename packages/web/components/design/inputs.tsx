import { FC, Fragment, useState } from 'react';
import { ComponentsContainer } from './common';
import { Input, InputLabel, TextAreaLabel } from '../../ui/input';

export const Inputs: FC = () => {
  const [input1, setInput1] = useState('');

  return (
    <Fragment>
      <ComponentsContainer>
        <Input
          type="text"
          value={input1}
          onChange={e => setInput1(e.target.value)}
          placeholder="Normal Input"
        />

        <InputLabel
          label="Label"
          type="text"
          value={input1}
          onChange={e => setInput1(e.target.value)}
          placeholder="With Label"
        />

        <TextAreaLabel
          label="TextArea"
          value={input1}
          onChange={e => setInput1(e.target.value)}
          placeholder="Supports Multi-Line"
        />

        <InputLabel
          label="Custom Input Width"
          type="text"
          value={input1}
          onChange={e => setInput1(e.target.value)}
          placeholder="4:6 sample"
          widthPercent={60}
        />
      </ComponentsContainer>
    </Fragment>
  );
};
