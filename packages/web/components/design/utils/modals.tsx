import { FC, Fragment } from 'react';
import styled from 'styled-components';

export const Modals: FC = () => {
  // WIP
  return <Fragment />;

  return (
    <Container>
      <Blur>aaa</Blur>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Blur = styled.div`
  width: 90vw;
  height: 90vh;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
