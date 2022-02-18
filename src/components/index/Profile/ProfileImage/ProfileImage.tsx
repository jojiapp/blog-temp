import styled from 'styled-components'

const profileImage = '/Profile/Profile-image.jpeg'

const ProfileImage = () => (
	<Container>
		<ImageSource src={profileImage}/>
	</Container>
)

// === Styled === //

const Container = styled.div`
  flex: 1;
  height: 100%;
`

const ImageSource = styled.img`
  border-radius: 1rem;
  width: 50rem;
  height: 100%;
`

export default ProfileImage