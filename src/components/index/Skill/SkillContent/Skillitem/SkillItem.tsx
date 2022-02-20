import SkillItemVo from './skillIemVo'
import styled from 'styled-components'

type PropsType = {
	skillItemVo: SkillItemVo
}

type IconPropsType = {
	iconColor: string
}

const SkillItem = ({ skillItemVo }: PropsType) => (
	<Wrapper>
		<IconBox iconColor={skillItemVo.getIconColor()}>
			<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<title>{skillItemVo.getLanguage()}</title>
				<path d={skillItemVo.getIconSvgPath()}/>
			</svg>
		</IconBox>
		<LanguageText>{skillItemVo.getLanguage()}</LanguageText>
		<DescriptionText>{skillItemVo.getDescription()}</DescriptionText>
	</Wrapper>
)

// === Styled === //

const Wrapper = styled.div`

`

const IconBox = styled.div<IconPropsType>`
  width: 6rem;
  height: 6rem;

  & svg {
    fill: ${({ iconColor }) => iconColor}
  }
`

const LanguageText = styled.h3`

`

const DescriptionText = styled.div`

`

export default SkillItem