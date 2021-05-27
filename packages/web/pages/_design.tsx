import { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import { Avatars, Badges, Buttons } from '../components/design';

const Page: NextPage = () => (
  <Container>
    <Head>
      <title>@knzk/ui - KnzkLive</title>
    </Head>

    <h1>@knzk/ui (仮)</h1>

    <Component>
      <h2>Avatar</h2>

      <Avatars />
    </Component>

    <Component>
      <h2>Badge</h2>

      <Badges />
    </Component>

    <Component>
      <h2>Button</h2>

      <Buttons />
    </Component>
  </Container>
);

const Container = styled.div`
  padding: 40px;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

const Component = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export default Page;
