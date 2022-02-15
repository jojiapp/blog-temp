import styled from 'styled-components'
import HistoryTitle from './historyTitle'
import HistoryContent from './historyContent'

const History = () => (
  <Container>
    <HistoryTitle/>
    <HistoryContent/>
  </Container>
)

// ===  Styled === //

const Container = styled.div`
  display: flex;
`

export default History