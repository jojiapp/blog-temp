import styled from 'styled-components'
import { ProfileInfoProps } from './ProfileInfo'

const ProfileInfoDescription = ({ profileInfoVo }: ProfileInfoProps) => (
  <DescriptionText>
    {profileInfoVo.getDescription()}
  </DescriptionText>
)

// === Styled === //

const DescriptionText = styled.div`
  color: var(--gray);
  margin-bottom: 4rem;
`

export default ProfileInfoDescription