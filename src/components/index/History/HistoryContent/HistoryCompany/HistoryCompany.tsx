import HistoryCompanyVo from './historyCompanyVo'
import styled from 'styled-components'
import HistoryWork from './HistoryWork'
import { nanoid } from 'nanoid'

type PropsType = {
	historyCompanyVo: HistoryCompanyVo
}

const HistoryCompany = ({ historyCompanyVo }: PropsType) => (
	<Container>
		<TitleText>
			<span>{historyCompanyVo.getCompany()}</span>
			<span>[{historyCompanyVo.getJob()}]</span>
			<span>|</span>
			<span>{historyCompanyVo.getStartDate()}</span>
			<span>~</span>
			<span>{historyCompanyVo.getEndDate()}</span>
		</TitleText>
		<HistoryWorksWrapper>
			{historyCompanyVo.getHistoryWorks().map(historyWork =>
				<HistoryWork key={nanoid()} historyWorkVo={historyWork}/>
			)}
		</HistoryWorksWrapper>
	</Container>
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
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 4rem;
`

const HistoryWorksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export default HistoryCompany