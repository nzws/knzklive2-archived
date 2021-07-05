import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap-reboot.css';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;
    font-style: normal;
    color: ${({ theme: { colors } }) => colors.text};
    background: ${({ theme: { colors } }) => colors.background};
    font-size: ${({ theme: { size } }) => size.fontText};
  }

  b, strong, h1, h2, h3 {
    font-weight: 500;
  }

  a {
    word-break: break-all;
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.primary};

    :hover {
      text-decoration: underline;
    }
  }

  *, *:after, *:before {
    outline: 0;
  }

  #nprogress .peg {
    box-shadow: none;
  }
`;
