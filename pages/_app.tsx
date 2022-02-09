import type {AppProps} from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import styled, {ThemeProvider} from 'styled-components';
import {theme} from '../styles/theme';
import Header from '../src/components/partials/header/Header';

function MyApp({Component, pageProps}: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
  );
}

const Container = styled.div`
  width: 111rem;
  margin: 0 auto;
`;

export default MyApp;
