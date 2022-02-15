import styled from 'styled-components'
import { ProfileInfoProps } from './ProfileInfo'

const ProfileInfoTitle = ({ profileInfoVo }: ProfileInfoProps) => (
  <Wrapper>
    <Name>{profileInfoVo.getName()}</Name>
    <Job>{profileInfoVo.getJob()}</Job>
  </Wrapper>
)

// === Styled === //

const Wrapper = styled.div`
  display: flex;
  line-height: 5.2rem;
  margin-bottom: 2rem;
`

const Name = styled.div`
  font-size: 3.8rem;
  font-weight: 500;
  margin-right: 2rem;
  letter-spacing: 1rem;
`

const Job = styled.div`
  font-size: 1.8rem;
  color: var(--gray);
`

export default ProfileInfoTitle