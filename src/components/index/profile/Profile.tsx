import styled from 'styled-components';
import ProfileImage from './profileImage';
import ProfileInfo from './profileInfo';

const Profile = () => (
    <ProfileContainer>
      <ProfileImage />
      <ProfileInfo />
    </ProfileContainer>
);

// === Styled === //

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default Profile;