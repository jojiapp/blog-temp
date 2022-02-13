import styled from 'styled-components';
import ProfileInfoVo from '../ProfileInfoVo';

const profileInfoVo = ProfileInfoVo.getInstance();

const ProfileInfoDescription = () => (
    <Description>
      {profileInfoVo.getDescription()}
      나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다.
      나는 이렇고 저렇고 이러한 사람입니다.
      나는 이렇고 저렇고 이러한 사람입니다.나는 이렇고 저렇고 이러한 사람입니다.

    </Description>
);

// === Styled === //

const Description = styled.div`
  font-size: 1.6rem;
  color: var(--gray);
  margin-bottom: 4rem;
  line-height: 2.6rem;
`;

export default ProfileInfoDescription;