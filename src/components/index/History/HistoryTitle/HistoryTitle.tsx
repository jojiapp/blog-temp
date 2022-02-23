import styled from 'styled-components'

const title = `I've been doing this for a while.`
const description = '이러쿵 저러쿵 그러쿵 이러쿵 저러쿵 그러쿵 이러쿵 저러쿵 그러쿵'

const HistoryTitle = () => (
	<Container>
		<Wrapper>
			<TitleText>{title}</TitleText>
			<DescriptionText>{description}</DescriptionText>
		</Wrapper>
	</Container>
)

// === Styled === //

const Container = styled.div`
  flex: 1;
`

const Wrapper = styled.div`
  padding-right: 5rem;
`

const TitleText = styled.h2`
  font-family: var(--font_family_title);
  font-size: var(--font_size_title);
  line-height: 5.2rem;
  margin-bottom: 1rem;
`

const DescriptionText = styled.div`
  color: var(--gray);
`

export default HistoryTitle