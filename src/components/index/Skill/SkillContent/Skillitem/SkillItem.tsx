import SkillItemVo from './skillIemVo'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

type PropsType = {
  skillItemVo: SkillItemVo
}

type IconPropsType = {
  iconColor: string
}

const SkillItem = ({ skillItemVo }: PropsType) => (
  <Container>
    <IconBox iconColor={skillItemVo.getIconColor()}>
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>{skillItemVo.getLanguage()}</title>
        <path d={skillItemVo.getIconSvgPath()}/>
      </svg>
    </IconBox>
    <LanguageText>{skillItemVo.getLanguage()}</LanguageText>
    <DescriptionText>
      {skillItemVo.getContents().map(content =>
        <span key={nanoid()}>{content}</span>)}
    </DescriptionText>
  </Container>
)

// === Styled === //

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: var(--light_gray);
  padding: 3rem 2rem;
`

const IconBox = styled.div<IconPropsType>`
  width: 6rem;
  height: 6rem;

  & svg {
    fill: ${({ iconColor }) => iconColor}
  }
`

const LanguageText = styled.h3`
  font-family: var(--font_family_title);
  font-size: var(--font_size_sub_title);
  line-height: 3.5rem;
`

const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export default SkillItem