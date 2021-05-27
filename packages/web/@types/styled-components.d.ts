import 'styled-components';
import { GlobalTheme } from '../styles/theme';

type Theme = typeof GlobalTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
