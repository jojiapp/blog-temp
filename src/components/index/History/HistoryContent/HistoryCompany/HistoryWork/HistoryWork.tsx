import styled from 'styled-components'
import HistoryCompanyVo from '../historyCompanyVo'
import { nanoid } from 'nanoid'
import HistoryDetail from './HistoryDetail'

type PropsType = {
  historyWorkVo: HistoryCompanyVo.HistoryWorkVo
}

const HistoryWork = ({ historyWorkVo }: PropsType) => (
  <>
    <WorkText>{historyWorkVo.getWork()}</WorkText>
    <Details>
      {historyWorkVo.getDetails().map(detail =>
        <HistoryDetail key={nanoid()} detail={detail}/>
      )}
    </Details>
  </>
)

// === Styled === //

const WorkText = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

const Details = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default HistoryWork