import styled from 'styled-components'
import ProfileInfoVo from '../profileInfoVo'
import ProfileInfoTitle from './ProfileInfoTitle'
import ProfileInfoDescription from './ProfileInfoDescription'
import ProfileAdditional from './ProfileAdditional'

export type ProfileInfoProps = {
  profileInfoVo: ProfileInfoVo
}

const ProfileInfo = () => {
  const profileInfoVo = new ProfileInfoVo(
    '조지헌',
    '백엔드 개발자',
    '나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다.나는 이렇고 저렇고 이러한 사람입니다.',
    [
      new ProfileInfoVo.AdditionalInfoVo('Email', 'jojiapp@gmail.com'),
      new ProfileInfoVo.AdditionalInfoVo('Blog', 'https://jojiapp.github.io'),
      new ProfileInfoVo.AdditionalInfoVo('Github', 'https://github.com/jojiapp'),
      new ProfileInfoVo.AdditionalInfoVo('Mobile', '010-4435-8426'),
    ],
  )
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
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
`

export default ProfileInfo