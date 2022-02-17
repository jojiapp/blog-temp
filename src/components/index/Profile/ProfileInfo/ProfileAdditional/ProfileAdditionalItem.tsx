import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import ProfileInfoVo from '../../profileInfoVo'

type PropsType = {
  additionalInfo: ProfileInfoVo.AdditionalInfoVo
}

const ProfileAdditionalItem = ({ additionalInfo }: PropsType) => (
  <Wrapper>
    <IconBox>
      <FontAwesomeIcon icon={faCircleCheck}/>
    </IconBox>
    <TitleText>{additionalInfo.getTitle()} -</TitleText>
    {additionalInfo.getContent()}
  </Wrapper>
)

// === Styled === //

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: var(--gray);
  line-height: 2.6rem;
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