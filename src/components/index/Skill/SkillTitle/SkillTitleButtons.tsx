import styled, { css } from 'styled-components'
import { MouseEvent } from 'react'
import SkillCategory from '../skillCategory'

export type SkillButtonPropsType = {
	handleButtonClick: (e: MouseEvent<HTMLButtonElement>) => void,
	currentSkill: SkillCategory
}

type ButtonStyledPropsType = {
	isSelected: boolean
}

const SkillTitleButtons = ({ handleButtonClick, currentSkill }: SkillButtonPropsType) => {
	return (
		<Wrapper>
			<Button onClick={handleButtonClick}
			        isSelected={currentSkill === SkillCategory.BACK_END}>{SkillCategory.BACK_END}</Button>
			<Button onClick={handleButtonClick}
			        isSelected={currentSkill === SkillCategory.FRONT_END}>{SkillCategory.FRONT_END}</Button>
		</Wrapper>
	)
}

// === Styled === //

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const Button = styled.button<ButtonStyledPropsType>`
  flex: 1;
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

export default SkillTitleButtons