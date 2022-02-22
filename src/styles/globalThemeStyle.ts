import { DefaultTheme } from 'styled-components'
import { FontFamily } from './globalFontStyle'

const globalThemeStyle = ({ color }: DefaultTheme) => {
	return {
		':root': {
			'--point': color.point,
			'--gray': color.gray,
			'--light_gray': color.lightGray
		}
	}
}

export default globalThemeStyle