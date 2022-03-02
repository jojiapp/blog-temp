import { nanoid } from 'nanoid'
import styled from 'styled-components'

type PropsType = {
  content: string
}

const SkillItemDetail = ({ content }: PropsType) => (
  <DescriptionBox key={nanoid()}>
    <span>-</span>
    <span key={nanoid()}>{content}</span>
  </DescriptionBox>
)

// === Styled === //

const DescriptionBox = styled.li`
  display: flex;
  gap: 1rem;
`

export default SkillItemDetail