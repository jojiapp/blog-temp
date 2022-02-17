import styled from 'styled-components'
import { ProfileInfoProps } from './ProfileInfo'

const ProfileInfoDescription = ({ profileInfoVo }: ProfileInfoProps) => (
  <DescriptionText>
    {profileInfoVo.getDescription()}
  </DescriptionText>
)

// === Styled === //

const DescriptionText = styled.div`
  font-size: 1.6rem;
  color: var(--gray);
  margin-bottom: 4rem;
  line-height: 2.6rem;
`

export default ProfileInfoDescription