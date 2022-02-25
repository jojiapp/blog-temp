import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'
import styled from 'styled-components'

const Profile = () => (
  <Container>
    <ProfileImage/>
    <ProfileInfo/>
  </Container>
)

// === Styled === //

const Container = styled.section`
  display: flex;
  align-items: center;
`

export default Profile