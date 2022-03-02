import styled from 'styled-components'

const profileImage = '/profile/profile-image.jpeg'

const ProfileImage = () => (
  <Container>
    <ImageSource src={profileImage}/>
  </Container>
)

// === Styled === //

const Container = styled.div`
  flex: 1;
  height: 100%;
  padding-right: 5rem;
`

const ImageSource = styled.img`
  border-radius: 1rem;
  width: 50rem;
  height: 100%;
`

export default ProfileImage