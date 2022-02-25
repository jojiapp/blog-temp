class ProfileAdditionalInfoVo {

  private readonly _title: string
  private readonly _content: string

  constructor (title: string, content: string) {
    this._title = title
    this._content = content
  }

  static of (title: string, content: string): ProfileAdditionalInfoVo {
    return new ProfileAdditionalInfoVo(title, content)
  }

  getTitle (): string {
    return this._title
  }

  getContent (): string {
    return this._content
  }
}

export default ProfileAdditionalInfoVo