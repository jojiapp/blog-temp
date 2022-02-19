import styled from 'styled-components'
import SkillTitle from './SkillTitle'
import SkillContent from './SkillContent'
import { MouseEvent, useCallback, useState } from 'react'
import SkillCategory from './skillCategory'

const Skill = () => {
	const [currentSkill, setCurrentSkill] = useState(SkillCategory.BACK_END)
	const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		e.currentTarget.textContent === SkillCategory.BACK_END ?
			setCurrentSkill(SkillCategory.BACK_END) :
			setCurrentSkill(SkillCategory.FRONT_END)
	}, [])

	return (
		<Container>
			<SkillTitle handleButtonClick={handleButtonClick} currentSkill={currentSkill}/>
			<SkillContent currentSkill={currentSkill}/>
		</Container>
	)
}

// === Styled === //

const Container = styled.section`
  display: flex;
`

export default Skill
