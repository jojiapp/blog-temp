class HistoryCompanyVo {

	static HistoryWorkVo = class {

		constructor (work: string, details: string[]) {
			this._work = work
			this._details = details
		}

		private readonly _work: string
		private readonly _details: string[]

		getWork (): string {
			return this._work
		}

		getDetails (): string[] {
			return this._details
		}
	}

	constructor (
		company: string,
		job: string,
		startDate: Date,
		endDate: Date,
		historyWorks: HistoryCompanyVo.HistoryWorkVo[]) {
		this._company = company
		this._job = job
		this._startDate = startDate
		this._endDate = endDate
		this._historyWorks = historyWorks
	}

	private readonly _company: string
	private readonly _job: string
	private readonly _startDate: Date
	private readonly _endDate: Date
	private readonly _historyWorks: HistoryCompanyVo.HistoryWorkVo[]

	getCompany (): string {
		return this._company
	}

	getJob (): string {
		return this._job
	}

	private _getFullMonth (month: number): string {
		return (month > 10 ? month : `0${month}`).toString()
	}

	private _getDate (date: Date): string {
		return `${date.getFullYear()}.${this._getFullMonth(date.getMonth())}`
	}

	getStartDate (): string {
		return this._getDate(this._startDate)
	}

	getEndDate (): string {
		return this._getDate(this._endDate)
	}

	getHistoryWorks (): HistoryCompanyVo.HistoryWorkVo[] {
		return this._historyWorks
	}

}

namespace HistoryCompanyVo {
	export type HistoryWorkVo = InstanceType<typeof HistoryCompanyVo.HistoryWorkVo>;
}

export default HistoryCompanyVo