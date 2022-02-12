export class ProfileInfo {

  private static INSTANCE = new ProfileInfo();

  static getInstance(): ProfileInfo {
    return this.INSTANCE;
  }

  private constructor() {}

  private _imageSrc: string = '/profile/profile-image.jpeg';
  private _name: string = '조지헌';
  private _job: string = '백엔드 개발자';
  private _description: string = '설명';
  private _email: string = 'jojiapp@gmail.com';
  private _blog: string = 'https://jojiapp.github.io';
  private _github: string = 'https://github.com/jojiapp';
  private _mobile: string = '010-4435-8426';

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

  getEmail(): string {
    return this._email;
  }

  getBlog(): string {
    return this._blog;
  }

  getGithub(): string {
    return this._github;
  }

  getMobile(): string {
    return this._mobile;
  }
}