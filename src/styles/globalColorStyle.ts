import { DefaultTheme } from 'styled-components'

const globalColorStyle = ({ color }: DefaultTheme) => {
	return {
		'--point': color.point,
		'--gray': color.gray,
		'--light_gray': color.lightGray
	}
}

export default globalColorStyle