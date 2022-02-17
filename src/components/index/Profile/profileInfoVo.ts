class ProfileInfoVo {

  static AdditionalInfoVo = class {

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

  constructor (
    name: string,
    job: string,
    description: string,
    additionalInfos: ProfileInfoVo.AdditionalInfoVo[]) {
    this._name = name
    this._job = job
    this._description = description
    this._additionalInfos = additionalInfos
  }

  private readonly _name: string
  private readonly _job: string
  private readonly _description: string
  private readonly _additionalInfos: ProfileInfoVo.AdditionalInfoVo[]

  getName (): string {
    return this._name
  }

  getJob (): string {
    return this._job
  }

  getDescription (): string {
    return this._description
  }

  getAdditionalInfos (): ProfileInfoVo.AdditionalInfoVo[] {
    return this._additionalInfos
  }
}

namespace ProfileInfoVo {
  export type AdditionalInfoVo = InstanceType<typeof ProfileInfoVo.AdditionalInfoVo>;
}

export default ProfileInfoVo