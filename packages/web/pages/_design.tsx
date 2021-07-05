import { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import { Avatars, Badges, Buttons, Inputs, Modals } from '../components/design';
import { FC } from 'react';

const WIP: FC = () => (
  <div style={{ textAlign: 'center' }}>
    <i>Work in Progress</i>
  </div>
);

const Page: NextPage = () => (
  <Container>
    <Head>
      <title>@knzk/ui - KnzkLive</title>
    </Head>

    <h1>@knzk/ui (仮)</h1>

    <hr />

    <h1>Design components</h1>

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

    <Component>
      <h2>Checkbox</h2>

      <WIP />
    </Component>

    <Component>
      <h2>Dialog</h2>

      <WIP />
    </Component>

    <Component>
      <h2>Input / TextArea</h2>

      <Inputs />
    </Component>

    <Component>
      <h2>Menu</h2>
      (縦横想定)
      <WIP />
    </Component>

    <Component>
      <h2>Radio button</h2>

      <WIP />
    </Component>

    <Component>
      <h2>Text</h2>

      <WIP />
    </Component>

    <Component>
      <h2>Toast (design)</h2>

      <WIP />
    </Component>

    <hr />

    <h1>Design utils</h1>

    <Component>
      <h2>Modal</h2>

      <p>
        ページの上位レイヤーでユーザーに強制的なコンポーネントを表示します。
        例えば、Dialog
        コンポーネントをラップすることでユーザーに選択を促すダイアログを作成できます。
        Modal
        が存在する間、ユーザーはラップされているコンポーネント以外の操作ができなくなります。
      </p>

      <Modals />
    </Component>

    <Component>
      <h2>Toast (layout)</h2>

      <p>
        ページの上位レイヤーでユーザーに非強制的なコンポーネントを表示します。
        例えば、Toast
        コンポーネントをラップすることでユーザーに進行状況等を示すことができます。
        Modal と異なり、Toast が存在する間もユーザーは別の操作を続行できます。
      </p>

      <WIP />
    </Component>

    <Component>
      <h2>Tooltip / Popover</h2>

      <p>
        親コンポーネント上に被さる子コンポーネントを表示します。
        例えば、テキストにTooltipを使用してユーザーにそのテキストに関する追加情報を示すことができます。
        場所は画面固定ではなく、親コンポーネントの周囲で表示します。
      </p>

      <WIP />
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
