class SkillItemVo {

	constructor (language: string, description: string) {
		this._language = language
		this._description = description
	}

	private readonly _language: string
	private readonly _description: string

	getLanguage (): string {
		return this._language
	}

	getDescription (): string {
		return this._description
	}
}

// todo: 백엔드 프론트 데이터 작업, 히스토리도

export default SkillItemVo