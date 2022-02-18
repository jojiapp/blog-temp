import styled from 'styled-components'
import HistoryCompanyVo from './HistoryCompany/historyCompanyVo'
import HistoryCompany from './HistoryCompany'
import { nanoid } from 'nanoid'

const hexcon1 = new HistoryCompanyVo.HistoryWorkVo(
	'주피토',
	[
		'저러쿵',
		'이러쿵'
	]
)

const hexcon2 = new HistoryCompanyVo.HistoryWorkVo(
	'엑스큐베이터',
	[
		'저러쿵저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵 저러쿵저러쿵저러쿵',
		'이러쿵'
	]
)

const hextconHistory = new HistoryCompanyVo(
	'헥스콘',
	'Back End',
	new Date(2021, 4),
	new Date(2022, 1),
	[
		hexcon1,
		hexcon2
	]
)

const historyCompanies = [
	hextconHistory,
	hextconHistory,
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