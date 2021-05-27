import styled, { css } from 'styled-components';
import { darken, lighten, rgba } from 'polished';
import { GlobalTheme } from '../../styles/theme';

export type Props = {
  color: keyof typeof GlobalTheme.colors;
  size?: 'small' | 'normal' | 'large';
  skeleton?: boolean;
};

const Small = css`
  padding: 6px 18px;
  font-size: ${({ theme: { size } }) => size.fontLabel};
`;

const Large = css`
  padding: 18px 18px;
  font-size: ${({ theme: { size } }) => size.fontLargeText};
`;

const Skeleton = css<Props>`
  background: ${({ theme: { colors } }) => colors.transparent};
  color: ${({ theme: { colors }, color }) => colors[color]};

  :hover {
    background: ${({ theme: { colors }, color }) => rgba(colors[color], 0.1)};
    border-color: ${({ theme: { colors }, color }) => rgba(colors[color], 0.2)};
  }

  :active {
    background: ${({ theme: { colors }, color }) => rgba(colors[color], 0.2)};
    border-color: ${({ theme: { colors }, color }) => rgba(colors[color], 0.4)};
  }

  :disabled {
    background: ${({ theme: { colors } }) => colors.transparent};
    color: ${({ theme: { colors }, color }) => lighten(0.08, colors[color])};
  }
`;

export const Button = styled.button<Props>`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  padding: 12px 18px;
  border-radius: ${({ theme: { size } }) => size.borderRadius};
  background: ${({ theme: { colors }, color }) => colors[color]};
  color: ${({ theme: { colors } }) => colors.title};
  font-weight: ${({ theme: { weights } }) => weights.bold};
  font-size: ${({ theme: { size } }) => size.fontText};
  border: solid 1px ${({ theme: { colors } }) => colors.transparent};
  transition: all ${({ theme: { animations } }) => animations.normal};

  :hover {
    background: ${({ theme: { colors }, color }) => darken(0.1, colors[color])};
  }

  :active {
    background: ${({ theme: { colors }, color }) =>
      darken(0.15, colors[color])};
  }

  :disabled {
    background: ${({ theme: { colors }, color }) =>
      lighten(0.08, colors[color])};
    cursor: not-allowed;
  }

  ${({ size }) => size === 'small' && Small};
  ${({ size }) => size === 'large' && Large};
  ${({ skeleton }) => skeleton && Skeleton};
`;
