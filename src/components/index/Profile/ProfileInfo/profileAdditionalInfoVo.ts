class ProfileAdditionalInfoVo {

	static of (title: string, content: string): ProfileAdditionalInfoVo {
		return new ProfileAdditionalInfoVo(title, content)
	}

	constructor (title: string, content: string) {
		this._title = title
		this._content = content
	}

	private readonly _title: string
	private readonly _content: string

	getTitle (): string {
		return this._title
	}

	getContent (): string {
		return this._content
	}
}

export default ProfileAdditionalInfoVo