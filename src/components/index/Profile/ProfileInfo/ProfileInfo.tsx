import styled from 'styled-components'
import ProfileInfoVo, { getProfileInfo } from './profileInfoVo'
import ProfileInfoTitle from './ProfileInfoTitle'
import ProfileInfoDescription from './ProfileInfoDescription'
import ProfileAdditional from './ProfileAdditional'

export type ProfileInfoProps = {
	profileInfoVo: ProfileInfoVo
}

const profileInfoVo = getProfileInfo()

const ProfileInfo = () => {
	return (
		<Container>
			<ProfileInfoTitle profileInfoVo={profileInfoVo}/>
			<ProfileInfoDescription profileInfoVo={profileInfoVo}/>
			<ProfileAdditional profileInfoVo={profileInfoVo}/>
		</Container>
	)
}

// === Styled === //

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

export default ProfileInfo