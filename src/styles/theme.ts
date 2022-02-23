import { DefaultTheme } from 'styled-components'
import { FontFamily, FontName, FontWeightName } from './globalFontStyle'

export const theme: DefaultTheme = {
	color: {
		point: '#182F43',
		gray: '#93939D',
		lightGray: '#FCFCFC'
	},
	font: {
		family: {
			title: FontFamily.of(FontName.POPPINS, FontWeightName.SEMI_BOLD).getFontFamily(),
			subTitle: FontFamily.of(FontName.POPPINS, FontWeightName.REGULAR).getFontFamily(),
			semiSubTitle: FontFamily.of(FontName.POPPINS, FontWeightName.SEMI_BOLD).getFontFamily(),
			content: FontFamily.of(FontName.POPPINS, FontWeightName.LIGHT).getFontFamily(),
			logo: FontFamily.of(FontName.POPPINS, FontWeightName.BOLD).getFontFamily()
		},
		size: {
			logo: '2.6rem',
			title: '3.8rem',
			subTitle: '2.2rem',
			semiSubTitle: '2rem'
		},
		weight: {
			content: '300'
		}
	}
}