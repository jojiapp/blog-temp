import type { NextPage } from 'next'
import styled from 'styled-components'
import Profile from '../src/components/index/Profile'
import Skill from '../src/components/index/Skill'
import Project from '../src/components/index/Project'
import History from '../src/components/index/History'

const Home: NextPage = () => {
  return (
    <Container>
      <Profile/>
      <History/>
      <Skill/>
      <Project/>
    </Container>
  )
}

// === Styled === //

const Container = styled.div`
  & > section:not(:last-of-type) {
    min-height: 100vh;
    margin-bottom: 15rem;
  }

  & > section:first-of-type {
    margin-bottom: 0;
  }
`

export default Home