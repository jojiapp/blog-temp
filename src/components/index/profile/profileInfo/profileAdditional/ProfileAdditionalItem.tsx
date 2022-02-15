import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import ProfileInfoVo from '../../profileInfoVo'
import AdditionalInfo = ProfileInfoVo.AdditionalInfoVo

type PropsType = {
  additionalInfo: AdditionalInfo
}

const ProfileAdditionalItem = ({ additionalInfo }: PropsType) => (
  <Box>
    <IconBox>
      <FontAwesomeIcon icon={faCircleCheck}/>
    </IconBox>
    <Title>{additionalInfo.getTitle()} -</Title>
    {additionalInfo.getContent()}
  </Box>
)

// === Styled === //

const Box = styled.li`
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

const Title = styled.div`
  font-weight: bold;
  margin-right: 0.5rem;
`

export default ProfileAdditionalItem