import HistoryWorkVo from './HistoryWork/historyWorkVo'

class HistoryCompanyVo {

  private readonly _company: string
  private readonly _job: string
  private readonly _startDate: Date
  private readonly _endDate: Date | null
  private readonly _historyWorks: HistoryWorkVo[]

  private constructor (
    company: string,
    job: string,
    startDate: Date,
    endDate: Date | null,
    historyWorks: HistoryWorkVo[]) {
    this._company = company
    this._job = job
    this._startDate = startDate
    this._endDate = endDate
    this._historyWorks = historyWorks
  }

  static of (
    company: string,
    job: string,
    startDate: Date,
    endDate: Date | null,
    historyWorks: HistoryWorkVo[]
  ): HistoryCompanyVo {
    return new HistoryCompanyVo(company, job, startDate, endDate, historyWorks)
  }

  getCompany (): string {
    return this._company
  }

  getJob (): string {
    return this._job
  }

  getStartDate (): string {
    return this._getDate(this._startDate)
  }

  getEndDate (): string {
    return this._endDate === null ? '재직중' : this._getDate(this._endDate)
  }

  getHistoryWorks (): HistoryWorkVo[] {
    return this._historyWorks
  }

  private _getFullMonth (month: number): string {
    return (month > 10 ? month : `0${month}`).toString()
  }

  private _getDate (date: Date): string {
    return `${date.getFullYear()}.${this._getFullMonth(date.getMonth())}`
  }
}

export default HistoryCompanyVo