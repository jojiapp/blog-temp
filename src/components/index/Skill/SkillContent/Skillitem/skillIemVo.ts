class SkillItemVo {

	private readonly _language: string
	private readonly _description: string
	private readonly _iconSvgPath: string
	private readonly _iconColor: string

	private constructor (
		language: string,
		description: string,
		iconSvgPath: string,
		iconColor: string
	) {
		this._language = language
		this._description = description
		this._iconSvgPath = iconSvgPath
		this._iconColor = iconColor
	}

	static of (
		language: string,
		description: string,
		iconSvgPath: string,
		iconColor: string): SkillItemVo {
		return new SkillItemVo(language, description, iconSvgPath, iconColor)
	}

	getLanguage (): string {
		return this._language
	}

	getDescription (): string {
		return this._description
	}

	getIconColor (): string {
		return this._iconColor
	}

	getIconSvgPath (): string {
		return this._iconSvgPath
	}
}

// todo: 백엔드 프론트 데이터 작업, 히스토리도

export default SkillItemVo