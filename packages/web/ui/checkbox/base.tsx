import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox: FC<Props> = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={e => {
        onChange(e.target.checked);
      }}
    />
  );
};

const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
