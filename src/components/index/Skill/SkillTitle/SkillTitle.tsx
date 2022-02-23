import styled from 'styled-components'
import SkillTitleButtons, { SkillButtonPropsType } from './SkillTitleButtons'

const title = 'I have a variety of skills that all you need'
const description = '백엔드 분야로 취업을 하고 싶은 취업준비생입니다. 하지만 백엔드에 국한되지 않고, 호기심을 바탕으로 다양한 언어들을 공부하며 개발자로서 역량을 넓혀가고 싶습니다.'

const SkillTitle = ({
	handleButtonClick,
	currentSkill
}: SkillButtonPropsType) => (
	<Container>
		<TitleText>{title}</TitleText>
		<DescriptionText>{description}</DescriptionText>
		<SkillTitleButtons handleButtonClick={handleButtonClick}
		                   currentSkill={currentSkill}/>
	</Container>
)

// === Styled === //

const Container = styled.div`
  flex: 1;
`

const TitleText = styled.h2`
  font-family: var(--font_family_title);
  font-size: var(--font_size_title);
  line-height: 5.2rem;
  margin-bottom: 1rem;
`

const DescriptionText = styled.div`
  color: var(--gray);
  margin-bottom: 5rem;
`

export default SkillTitle
