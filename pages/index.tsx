import type { NextPage } from 'next'
import Profile from '../src/components/index/Profile/Profile'
import History from '../src/components/index/History'
import styled from 'styled-components'

const Home: NextPage = () => {
	return (
		<Container>
			<Profile/>
			<History/>
		</Container>
	)
}

// === Styled === //

const Container = styled.div`
  & > section {
    margin-bottom: 16rem;
  }
`

export default Home