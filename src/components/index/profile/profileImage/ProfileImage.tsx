import styled from 'styled-components';
import ProfileInfoVo from '../ProfileInfoVo';

const profileInfoVo = ProfileInfoVo.getInstance();

const ProfileImage = () => (
    <ProfileImageBox>
      <ProfileImageSource src={profileInfoVo.getImageSrc()} />
    </ProfileImageBox>
);

// === Styled === //

const ProfileImageBox = styled.div`
  flex: 1;
  height: 100%;
`;

const ProfileImageSource = styled.img`
  border-radius: 1rem;
  width: 50rem;
  height: 100%;
`;

export default ProfileImage;