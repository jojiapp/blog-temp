import HistoryCompanyVo from './historyCompanyVo'
import styled from 'styled-components'
import HistoryWork from './HistoryWork'
import { nanoid } from 'nanoid'

type PropsType = {
  historyCompanyVo: HistoryCompanyVo
}

const HistoryCompany = ({ historyCompanyVo }: PropsType) => (
  <Container>
    <Title historyCompanyVo={historyCompanyVo}/>
    <HistoryWorksWrapper>
      {historyCompanyVo.getHistoryWorks().map(historyWork =>
        <HistoryWork key={nanoid()} historyWorkVo={historyWork}/>
      )}
    </HistoryWorksWrapper>
  </Container>
)

const Title = ({ historyCompanyVo }: PropsType) => (
  <TitleText>
    <span>{historyCompanyVo.getCompany()}</span>
    <span>[{historyCompanyVo.getJob()}]</span>
    <span>|</span>
    <span>{historyCompanyVo.getStartDate()}</span>
    <span>~</span>
    <span>{historyCompanyVo.getEndDate()}</span>
  </TitleText>
)

// === Styled === //

const Container = styled.article`
  background-color: var(--light_gray);
  padding: 5rem;
  border-radius: 1rem;
`

const TitleText = styled.h3`
  display: flex;
  gap: 1rem;
  font-family: var(--font_family_title);
  font-size: var(--font_size_semi_sub_title);
  margin-bottom: 4rem;
`

const HistoryWorksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export default HistoryCompany