import styled from 'styled-components'
import SkillCategory from '../skillCategory'
import getCurrentSkills from './skillContentStaticValues'
import { nanoid } from 'nanoid'
import SkillItem from './Skillitem/SkillItem'

type PropsType = {
	currentSkill: SkillCategory
}

const SkillContent = ({ currentSkill }: PropsType) => {
	return (
		<Container>
			{getCurrentSkills(currentSkill).map(skill =>
				<SkillItem key={nanoid()} skillItemVo={skill}/>
			)}
		</Container>
	)
}

// === Styled === //

const Container = styled.div`
  flex: 2;
`

export default SkillContent