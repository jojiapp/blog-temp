export enum FontName {
	POPPINS = 'Poppins',
}

export enum FontWeightName {
	BLACK = 'Black',
	BLACK_ITALIC = 'BlackItalic',
	BOLD = 'Bold',
	BOLD_ITALIC = 'BoldItalic',
	EXTRA_BOLD = 'ExtraBold',
	EXTRA_BOLD_ITALIC = 'ExtraBoldItalic',
	EXTRA_LIGHT = 'ExtraLight',
	EXTRA_LIGHT_ITALIC = 'ExtraLightItalic',
	ITALIC = 'Italic',
	LIGHT = 'Light',
	LIGHT_ITALIC = 'LightItalic',
	MEDIUM = 'Medium',
	MEDIUM_ITALIC = 'MediumItalic',
	REGULAR = 'Regular',
	SEMI_BOLD = 'SemiBold',
	SEMI_BOLD_ITALIC = 'SemiBoldItalic',
	THIN = 'Thin',
	THIN_ITALIC = 'ThinItalic'
}

export class FontFamily {

	private readonly _fontFamily: string

	private constructor (fontName: string, fontWeightName: string) {
		this._fontFamily = `${fontName}-${fontWeightName}`
	}

	static of (fontName: string, fontWeightName: string): FontFamily {
		return new FontFamily(fontName, fontWeightName)
	}

	public getFontFamily (): string {
		return this._fontFamily
	}
}

const globalFontStyle = (fontName: string) => {
	return Object.values(FontWeightName).map(fontWeightName => {
		const fontWeight = FontFamily.of(fontName, fontWeightName)
		return `
				@font-face {
					'font-family': ${fontWeight.getFontFamily()};
					'src': url('/fonts/${fontName}/${fontWeight.getFontFamily()}.ttf') format('ttf');
					'font-display': 'swap';
		    }`
	}).join('\n')
}

export default globalFontStyle