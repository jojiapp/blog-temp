class HistoryWorkVo {

  private readonly _work: string
  private readonly _details: string[]

  private constructor (work: string, details: string[]) {
    this._work = work
    this._details = details
  }

  static of (work: string, details: string[]): HistoryWorkVo {
    return new HistoryWorkVo(work, details)
  }

  getWork (): string {
    return this._work
  }

  getDetails (): string[] {
    return this._details
  }
}

export default HistoryWorkVo