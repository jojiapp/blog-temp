import styled from 'styled-components';
import ProfileImage from './profileImage';
import ProfileInfo from './profileInfo';

const Profile = () => (
    <Container>
      <ProfileImage />
      <ProfileInfo />
    </Container>
);

// === Styled === //

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export default Profile;