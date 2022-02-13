class ProfileInfoVo {

  static AdditionalInfo = class {

    public constructor(title: string, content: string) {
      this._title = title;
      this._content = content;
    }

    private readonly _title: string;
    private readonly _content: string;

    getTitle(): string {
      return this._title;
    }

    getContent(): string {
      return this._content;
    }
  };

  private static INSTANCE = new ProfileInfoVo();

  static getInstance(): ProfileInfoVo {
    return this.INSTANCE;
  }

  private constructor() {}

  private readonly _imageSrc = '/profile/profile-image.jpeg';
  private readonly _name = '조지헌';
  private readonly _job = '백엔드 개발자';
  private readonly _description = '설명';
  private readonly _additionalInfos: ProfileInfoVo.AdditionalInfo[] = [
    new ProfileInfoVo.AdditionalInfo('Email', 'jojiapp@gmail.com'),
    new ProfileInfoVo.AdditionalInfo('Blog', 'https://jojiapp.github.io'),
    new ProfileInfoVo.AdditionalInfo('Github', 'https://github.com/jojiapp'),
    new ProfileInfoVo.AdditionalInfo('Mobile', '010-4435-8426'),
  ];

  getImageSrc(): string {
    return this._imageSrc;
  }

  getName(): string {
    return this._name;
  }

  getJob(): string {
    return this._job;
  }

  getDescription(): string {
    return this._description;
  }

  getAdditionalInfos(): ProfileInfoVo.AdditionalInfo[] {
    return this._additionalInfos;
  }
}

namespace ProfileInfoVo {
  export type AdditionalInfo = InstanceType<typeof ProfileInfoVo.AdditionalInfo>;
}

export default ProfileInfoVo;