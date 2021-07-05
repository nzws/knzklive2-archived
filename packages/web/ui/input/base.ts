import { lighten } from 'polished';
import styled, { css } from 'styled-components';

export type Props = {
  error?: boolean;
};

const Error = css`
  color: ${({ theme: { colors } }) => colors.danger};
  border-color: ${({ theme: { colors } }) => colors.danger};
`;

export const InputStyle = css<Props>`
  display: block;
  width: 100%;
  border: none;
  background: ${({ theme: { colors } }) => colors.transparent};
  color: ${({ theme: { colors } }) => colors.text};
  border-bottom: solid 1px ${({ theme: { colors } }) => colors.border};
  padding: 10px 8px;
  transition: all ${({ theme: { animations } }) => animations.normal};

  :hover {
    border-color: ${({ theme: { colors } }) => lighten(0.1, colors.border)};
  }

  :active,
  :focus {
    border-color: ${({ theme: { colors } }) => colors.primary};
  }

  ${({ error }) => error && Error};
`;

export const Input = styled.input<Props>`
  ${InputStyle};
`;

export const TextArea = styled.textarea<Props>`
  ${InputStyle};
`;
