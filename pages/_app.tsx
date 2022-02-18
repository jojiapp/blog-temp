import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Header from '../src/components/partials/Header/Header'

function MyApp ({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<Container>
				<Header/>
				<Component {...pageProps} />
			</Container>
		</ThemeProvider>
	)
}

// === Styled === //

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`

export default MyApp
