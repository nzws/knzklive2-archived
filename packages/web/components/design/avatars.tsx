import { FC } from 'react';
import { ComponentsContainer } from './common';
import { Avatar } from '../avatar';

export const Avatars: FC = () => (
  <ComponentsContainer>
    <Avatar />

    <Avatar src="https://github.com/knzkoniisan.png" />

    <Avatar src="https://github.com/knzkoniisan.png" size={60} />

    <Avatar src="https://github.com/knzkoniisan.png" size={45} />

    <Avatar src="https://github.com/knzkoniisan.png" size={30} />
  </ComponentsContainer>
);
