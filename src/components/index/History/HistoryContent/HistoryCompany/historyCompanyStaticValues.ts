import HistoryCompanyVo from './historyCompanyVo'
import HistoryWorkVo from './HistoryWork/historyWorkVo'

// === Hexcon History === //

const hexconWorks = [
  HistoryWorkVo.of(
    '엑스큐베이터',
    [
      '저러쿵저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵저러쿵저러쿵 저러쿵저러쿵 저러쿵저러쿵저러쿵',
      '이러쿵'
    ]
  ),
  HistoryWorkVo.of(
    '주피토',
    [
      '저러쿵',
      '이러쿵'
    ]
  )
]

export const getHexconHistory = () =>
  HistoryCompanyVo.of(
    '헥스콘',
    'Back End',
    new Date(2021, 4),
    new Date(2022, 1),
    hexconWorks
  )

// === TelePiX History === //

const telepixWorks = [
  HistoryWorkVo.of(
    '미도과제',
    [
      '이러어쿵',
      '저러어쿵',
      '그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵그러어쿵'
    ]
  )
]

export const getTelepixHistory = () =>
  HistoryCompanyVo.of(
    'TelePiX',
    'Back End',
    new Date(2022, 2),
    null,
    telepixWorks
  )