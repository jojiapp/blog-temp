import styled from 'styled-components'
import HistoryTitle from './HistoryTitle'
import HistoryContent from './HistoryContent'

const History = () => (
  <Container>
    <HistoryTitle/>
    <HistoryContent/>
  </Container>
)

// ===  Styled === //

const Container = styled.section`
  display: flex;
`

export default History