import styled from 'styled-components'
import SkillCategory from '../skillCategory'
import { MouseEvent } from 'react'
import SkillTitleButton from './SkillTitleButton'

export type SkillButtonPropsType = {
  handleButtonClick: (
    e: MouseEvent<HTMLButtonElement>, currentSkill: SkillCategory) => void,
  currentSkill: SkillCategory
}

const SkillTitleButtons = ({
  handleButtonClick,
  currentSkill
}: SkillButtonPropsType) => {
  return (
    <Wrapper>
      <SkillTitleButton handleButtonClick={handleButtonClick}
                        currentSkill={currentSkill}
                        skillCategory={SkillCategory.BACK_END}
      />
      <SkillTitleButton handleButtonClick={handleButtonClick}
                        currentSkill={currentSkill}
                        skillCategory={SkillCategory.FRONT_END}
      />
      <SkillTitleButton handleButtonClick={handleButtonClick}
                        currentSkill={currentSkill}
                        skillCategory={SkillCategory.TOOL}
      />
    </Wrapper>
  )
}

// === Styled === //

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`

export default SkillTitleButtons