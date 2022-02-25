import styled from 'styled-components'

type PropsType = {
  detail: string
}

const HistoryDetail = ({ detail }: PropsType) => (
  <Box>
    <span>-</span>
    <span>{detail}</span>
  </Box>
)

// === Styled === //

const Box = styled.li`
  display: flex;
  gap: 1rem;
`

export default HistoryDetail