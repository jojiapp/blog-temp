import styled from 'styled-components'

const profileImage = '/profile/profile-image.jpeg'

const ProfileImage = () => (
  <ProfileImageBox>
    <ProfileImageSource src={profileImage}/>
  </ProfileImageBox>
)

// === Styled === //

const ProfileImageBox = styled.div`
  flex: 1;
  height: 100%;
`

const ProfileImageSource = styled.img`
  border-radius: 1rem;
  width: 50rem;
  height: 100%;
`

export default ProfileImage