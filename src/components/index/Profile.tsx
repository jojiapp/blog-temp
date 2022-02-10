import {ProfileContainer} from './ProfileStyled';
import styled from 'styled-components';

const Profile = () => (
    <ProfileContainer>
      <ProfileImage></ProfileImage>
      <InfoContainer></InfoContainer>
    </ProfileContainer>
);

const ProfileImage = styled.div`
  flex: 1;
  height: 100%;
  background-color: antiquewhite;
`;

const InfoContainer = styled.div`
  flex: 1;
  height: 100%;
  background-color: fuchsia;
`;

export default Profile;