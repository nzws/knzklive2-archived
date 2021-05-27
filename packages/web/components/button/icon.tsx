import { DOMAttributes, FC } from 'react';
import { Icon } from 'react-feather';
import styled from 'styled-components';
import MDSpinner from 'react-md-spinner';
import { Button, Props } from './base';
import { GlobalTheme } from '../../styles/theme';

const IconSize = {
  small: 14,
  normal: 16,
  large: 18
} as const;

const GapSize = {
  small: 5,
  normal: 6,
  large: 8
} as const;

type _Props = Props &
  DOMAttributes<HTMLButtonElement> & {
    icon: Icon;
    isLoading?: boolean;
    disabled?: boolean;
  };

export const ButtonIcon: FC<_Props> = ({
  icon: Icon,
  isLoading,
  disabled,
  size,
  children,
  ...props
}) => (
  <_Button size={size} disabled={isLoading || disabled} {...props}>
    <IconContainer>
      {isLoading ? (
        <MDSpinner
          size={IconSize[size || 'normal']}
          singleColor={GlobalTheme.colors.title}
          borderSize={2}
        />
      ) : (
        <Icon size={IconSize[size || 'normal']} />
      )}
    </IconContainer>

    <div>{children}</div>
  </_Button>
);

const _Button = styled(Button)`
  display: inline-flex;
  column-gap: ${({ size }) => GapSize[size || 'normal']}px;
  flex-wrap: nowrap;
`;

const IconContainer = styled.div`
  margin: auto 0;

  > svg,
  > span {
    display: block !important;
  }
`;
