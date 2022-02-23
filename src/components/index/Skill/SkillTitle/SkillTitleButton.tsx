import SkillCategory from '../skillCategory'
import styled, { css } from 'styled-components'
import { SkillButtonPropsType } from './SkillTitleButtons'

type PropsType = SkillButtonPropsType & {
	skillCategory: SkillCategory
}

type ButtonStyledPropsType = {
	isSelected: boolean
}

const SkillTitleButton = ({
	handleButtonClick,
	currentSkill,
	skillCategory
}: PropsType) => (
	<Button onClick={(e) => handleButtonClick(e, skillCategory)}
	        isSelected={currentSkill === skillCategory}>{skillCategory}</Button>
)

// === Styled === //

const Button = styled.button<ButtonStyledPropsType>`
  display: flex;
  height: 4.6rem;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--point);
  border-radius: 0.6rem;
  ${({ isSelected }) => isSelected && css`
    background-color: var(--point);
    color: white;
  `}
`

export default SkillTitleButton