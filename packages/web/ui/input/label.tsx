import {
  FC,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  useRef
} from 'react';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { useIsFocusing } from '../utils/hooks/use-is-focusing';
import { Input, TextArea, Props } from './base';

type _Props = Props & {
  label: ReactNode;
  disabled?: boolean;
  isTextArea?: boolean;
  widthPercent?: number;
};

const Base: FC<_Props & { focusing: boolean }> = ({
  focusing,
  widthPercent = 80,
  label,
  children
}) => (
  <LabelContainer widthPercent={widthPercent}>
    <Label active={focusing} widthPercent={100 - widthPercent}>
      {label}
    </Label>
    {children}
  </LabelContainer>
);

export const InputLabel: FC<_Props & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  widthPercent,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>();
  const [focusing] = useIsFocusing(inputRef);

  return (
    <Base focusing={focusing} label={label} widthPercent={widthPercent}>
      <Input ref={inputRef} {...props} />
    </Base>
  );
};

export const TextAreaLabel: FC<
  _Props & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ label, widthPercent, ...props }) => {
  const inputRef = useRef<HTMLTextAreaElement>();
  const [focusing] = useIsFocusing(inputRef);

  return (
    <Base focusing={focusing} label={label} widthPercent={widthPercent}>
      <TextArea ref={inputRef} {...props} />
    </Base>
  );
};

const LabelContainer = styled.label<{ widthPercent: number }>`
  display: flex;
  width: 100%;
  column-gap: 8px;
  align-items: center;

  > input,
  > textarea {
    flex-basis: ${({ widthPercent }) => widthPercent}%;
  }

  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

const Active = css`
  color: ${({ theme: { colors } }) => colors.primary};
`;

const Label = styled.div<{ active: boolean; widthPercent: number }>`
  padding: 0 8px;
  color: ${({ theme: { colors } }) => colors.title};
  flex-basis: ${({ widthPercent }) => widthPercent}%;
  transition: all ${({ theme: { animations } }) => animations.normal};

  ${({ active }) => active && Active};
`;
