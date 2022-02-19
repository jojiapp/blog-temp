import ProfileInfoVo from './profileInfoVo'

export const getProfileInfo = () =>
	new ProfileInfoVo(
		'조지헌',
		'백엔드 개발자',
		'나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다. 나는 이렇고 저렇고 이러한 사람입니다.나는 이렇고 저렇고 이러한 사람입니다.',
		[
			new ProfileInfoVo.AdditionalInfoVo('Email', 'jojiapp@gmail.com'),
			new ProfileInfoVo.AdditionalInfoVo('Blog', 'https://jojiapp.github.io'),
			new ProfileInfoVo.AdditionalInfoVo('Github', 'https://github.com/jojiapp'),
			new ProfileInfoVo.AdditionalInfoVo('Mobile', '010-4435-8426'),
		],
	)