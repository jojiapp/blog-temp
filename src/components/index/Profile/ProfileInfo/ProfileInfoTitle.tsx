import styled from 'styled-components'
import { ProfileInfoProps } from './ProfileInfo'

const ProfileInfoTitle = ({ profileInfoVo }: ProfileInfoProps) => (
	<Wrapper>
		<NameText>{profileInfoVo.getName()}</NameText>
		<JobText>{profileInfoVo.getJob()}</JobText>
	</Wrapper>
)

// === Styled === //

const Wrapper = styled.div`
  display: flex;
  line-height: 5.2rem;
  margin-bottom: 2rem;
`

const NameText = styled.div`
  font-size: 3.8rem;
  font-weight: 500;
  margin-right: 2rem;
  letter-spacing: 1rem;
`

const JobText = styled.div`
  font-size: 1.8rem;
  color: var(--gray);
`

export default ProfileInfoTitle