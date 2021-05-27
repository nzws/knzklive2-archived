import styled from 'styled-components';

import { GlobalTheme } from '../../styles/theme';

type Props = {
  color: keyof typeof GlobalTheme.colors;
  upper?: boolean;
};

export const Badge = styled.span<Props>`
  display: inline-block;
  text-transform: ${({ upper }) => upper && 'uppercase'};
  background: ${({ theme: { colors }, color }) => colors[color]};
  color: ${({ theme: { colors } }) => colors.title};
  font-weight: ${({ theme: { weights } }) => weights.bold};
  border-radius: ${({ theme: { size } }) => size.borderRadiusLarge};
  font-size: ${({ theme: { size } }) => size.fontLabel};
  padding: 2px 8px;
  text-align: center;
  transition: all ${({ theme: { animations } }) => animations.normal};
`;
