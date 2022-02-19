import HistoryCompanyVo from './historyCompanyVo'

// === Hexcon History === //

const hexconWorks = [
	new HistoryCompanyVo.HistoryWorkVo(
		'엑스큐베이터',
		[
			'저러쿵저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵 저러쿵저러쿵저러쿵',
			'이러쿵'
		]
	),
	new HistoryCompanyVo.HistoryWorkVo(
		'주피토',
		[
			'저러쿵',
			'이러쿵'
		]
	)
]

export const getHexconHistory = () =>
	new HistoryCompanyVo(
		'헥스콘',
		'Back End',
		new Date(2021, 4),
		new Date(2022, 1),
		hexconWorks
	)

// === TelePiX History === //

const telepixWorks = [
	new HistoryCompanyVo.HistoryWorkVo(
		'미도과제',
		[
			'이러어쿵',
			'저러어쿵',
			'그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵'
		]
	)
]

export const getTelepixHistory = () =>
	new HistoryCompanyVo(
		'TelePiX',
		'Back End',
		new Date(2022, 2),
		null,
		telepixWorks
	)