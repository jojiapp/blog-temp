import ProfileInfoVo from './profileInfoVo'
import ProfileAdditionalInfoVo from './profileAdditionalInfoVo'

export const getProfileInfo = () =>
  ProfileInfoVo.of(
    '조지헌',
    '백엔드 개발자',
    '나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다.나는 이렇고 저렇고 이러한 사람입니다.',
    [
      ProfileAdditionalInfoVo.of('Email', 'jojiapp@gmail.com'),
      ProfileAdditionalInfoVo.of('Blog', 'https://jojiapp.github.io'),
      ProfileAdditionalInfoVo.of('Github', 'https://github.com/jojiapp'),
      ProfileAdditionalInfoVo.of('Mobile', '010-4435-8426')
    ]
  )