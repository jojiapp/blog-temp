import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      point: string,
      gray: string,
      lightGray: string
    };
  }
}