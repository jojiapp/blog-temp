import ProfileAdditionalInfoVo from './profileAdditionalInfoVo'

class ProfileInfoVo {

  private readonly _name: string
  private readonly _job: string
  private readonly _description: string
  private readonly _additionalInfos: ProfileAdditionalInfoVo[]

  private constructor (
    name: string,
    job: string,
    description: string,
    additionalInfos: ProfileAdditionalInfoVo[]) {
    this._name = name
    this._job = job
    this._description = description
    this._additionalInfos = additionalInfos
  }

  static of (
    name: string,
    job: string,
    description: string,
    additionalInfos: ProfileAdditionalInfoVo[]
  ): ProfileInfoVo {
    return new ProfileInfoVo(name, job, description, additionalInfos)
  }

  getName (): string {
    return this._name
  }

  getJob (): string {
    return this._job
  }

  getDescription (): string {
    return this._description
  }

  getAdditionalInfos (): ProfileAdditionalInfoVo[] {
    return this._additionalInfos
  }
}

export default ProfileInfoVo