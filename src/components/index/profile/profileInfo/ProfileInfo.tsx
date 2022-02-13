import styled from 'styled-components';
import ProfileInfoTitle from './ProfileInfoTitle';
import ProfileInfoDescription from './ProfileInfoDescription';
import ProfileAdditional from './profileAdditional';

const ProfileInfo = () => (
    <Container>
      <ProfileInfoTitle />
      <ProfileInfoDescription />
      <ProfileAdditional />
    </Container>
);

// === Styled === //

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
`;

export default ProfileInfo;