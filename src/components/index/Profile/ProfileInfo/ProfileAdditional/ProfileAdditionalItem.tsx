import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import ProfileInfoVo from '../profileInfoVo'

type PropsType = {
	additionalInfoVo: ProfileInfoVo.AdditionalInfoVo
}

const ProfileAdditionalItem = ({ additionalInfoVo }: PropsType) => (
	<Wrapper>
		<IconBox>
			<FontAwesomeIcon icon={faCircleCheck}/>
		</IconBox>
		<TitleText>{additionalInfoVo.getTitle()} -</TitleText>
		{additionalInfoVo.getContent()}
	</Wrapper>
)

// === Styled === //

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  color: var(--gray);
  margin-bottom: 1rem;
`

const IconBox = styled.div`
  color: var(--point);
  font-size: 2rem;
  margin-right: 1rem;
`

const TitleText = styled.div`
  font-weight: bold;
  margin-right: 0.5rem;
`

export default ProfileAdditionalItem