import { FC, Fragment } from 'react';
import { ComponentsContainer, ComponentsTitle } from './common';
import { Avatar } from '../../ui/avatar';

export const Avatars: FC = () => (
  <Fragment>
    <ComponentsContainer>
      <ComponentsTitle>Size</ComponentsTitle>

      <Avatar src="https://github.com/knzkoniisan.png" />

      <Avatar src="https://github.com/knzkoniisan.png" size={60} />

      <Avatar src="https://github.com/knzkoniisan.png" size={45} />

      <Avatar src="https://github.com/knzkoniisan.png" size={30} />
    </ComponentsContainer>

    <ComponentsContainer>
      <ComponentsTitle>Placeholder</ComponentsTitle>

      <Avatar />
    </ComponentsContainer>
  </Fragment>
);
