import { DefaultTheme } from 'styled-components'
import { FontFamily, FontWeightName } from './globalFontStyle'

export const theme: DefaultTheme = {
	color: {
		point: '#182F43',
		gray: '#93939D',
		lightGray: '#FCFCFC'
	},
	font: {
		family: {
			title: FontFamily.NOTO_SANS.getFontFamilies(FontWeightName.BOLD),
			subTitle: FontFamily.NOTO_SANS.getFontFamilies(FontWeightName.REGULAR),
			semiSubTitle: FontFamily.NOTO_SANS.getFontFamilies(FontWeightName.REGULAR),
			content: FontFamily.NOTO_SANS.getFontFamilies(FontWeightName.LIGHT),
			logo: FontFamily.NOTO_SANS.getFontFamilies(FontWeightName.BOLD)
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