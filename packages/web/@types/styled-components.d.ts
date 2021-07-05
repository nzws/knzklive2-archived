import 'styled-components';
import { GlobalTheme } from '../ui/theme';

type Theme = typeof GlobalTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
