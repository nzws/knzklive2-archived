import { FC, Fragment } from 'react';
import { ComponentsContainer, ComponentsTitle } from './common';
import { Badge } from '../../ui/badge';

export const Badges: FC = () => (
  <Fragment>
    <ComponentsContainer>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="transparent">Transparent</Badge>
    </ComponentsContainer>

    <ComponentsContainer>
      <ComponentsTitle>Additional props</ComponentsTitle>

      <Badge color="primary" upper>
        Uppercase
      </Badge>
    </ComponentsContainer>

    <ComponentsContainer>
      <ComponentsTitle>Usage example</ComponentsTitle>

      <Badge color="transparent" upper>
        Stand by
      </Badge>
      <Badge color="warning" upper>
        Stand by
      </Badge>
      <Badge color="success" upper>
        Stand by
      </Badge>
      <Badge color="success" upper>
        Live
      </Badge>
      <Badge color="danger" upper>
        Offline
      </Badge>
    </ComponentsContainer>
  </Fragment>
);
