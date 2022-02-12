import {
  InfoContainer,
  ProfileContainer,
  ProfileImage,
  ProfileImageBox,
} from './ProfileStyled';
import {ProfileInfo} from './ProfileInfo';

const profileInfo = ProfileInfo.getInstance();

const Profile = () => (
    <ProfileContainer>
      <ImageBox />
      <Info />
    </ProfileContainer>
);

const ImageBox = () => (
    <ProfileImageBox>
      <ProfileImage src={profileInfo.getImageSrc()} />
    </ProfileImageBox>
);

const Info = () => (
    <InfoContainer>

      {profileInfo.getName()}
    </InfoContainer>
);

export default Profile;