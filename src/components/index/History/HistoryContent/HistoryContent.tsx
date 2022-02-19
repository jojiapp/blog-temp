import styled from 'styled-components'
import HistoryCompany from './HistoryCompany'
import { nanoid } from 'nanoid'
import { getHexconHistory, getTelepixHistory } from './HistoryCompany/historyCompanyStaticValues'

const historyCompanies = [
	getTelepixHistory(),
	getHexconHistory()
]

const HistoryContent = () => (
	<Container>
		<Wrapper>
			{historyCompanies.map(historyCompanyVo =>
				<HistoryCompany key={nanoid()} historyCompanyVo={historyCompanyVo}/>
			)}
		</Wrapper>
	</Container>
)

// === Styled === //

const Container = styled.div`
  flex: 2;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default HistoryContent