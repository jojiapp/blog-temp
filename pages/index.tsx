import type { NextPage } from 'next'
import Profile from '../src/components/index/Profile'
import History from '../src/components/index/History'
import styled from 'styled-components'
import Skill from '../src/components/index/Skill'

const Home: NextPage = () => {
	return (
		<Container>
			<Profile/>
			<History/>
			<Skill/>
		</Container>
	)
}

// === Styled === //

const Container = styled.div`
  & > section {
    min-height: 100vh;
  }
`

export default Home