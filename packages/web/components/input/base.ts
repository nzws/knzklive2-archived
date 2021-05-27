import styled, { css } from 'styled-components';

type Props = {
  error?: boolean;
};

const Error = css`
  color: ${({ theme: { colors } }) => colors.danger};
  border-color: ${({ theme: { colors } }) => colors.danger};
`;

export const Input = styled.input<Props>`
  display: block;
  border: none;
  background: ${({ theme: { colors } }) => colors.transparent};
  border-bottom: solid 1px ${({ theme: { colors } }) => colors.border};
  padding: 10px 8px;

  :active {
    border-color: ${({ theme: { colors } }) => colors.primary};
  }

  ${({ error }) => error && Error};
`;
