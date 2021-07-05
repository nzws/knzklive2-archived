import { lighten } from 'polished';
import styled from 'styled-components';

type Props = {
  src?: string;
  size?: number;
};

export const Avatar = styled.div<Props>`
  display: inline-block;
  width: ${({ size }) => size || 90}px;
  height: ${({ size }) => size || 90}px;
  background: ${({ theme: { colors } }) => lighten(0.1, colors.background)};
  background-size: cover;
  background-image: url(${({ src }) => src});
  border-radius: 100%;
  transition: all ${({ theme: { animations } }) => animations.normal};
`;
