export enum FontName {
	POPPINS = 'Poppins',
	NOTOSANSKR = 'NotoSansKR'
}

export enum FontWeightName {
	BLACK = 'Black',
	BLACKITALIC = 'BlackItalic',
	BOLD = 'Bold',
	BOLDITALIC = 'BoldItalic',
	EXTRABOLD = 'ExtraBold',
	EXTRABOLDITALIC = 'ExtraBoldItalic',
	EXTRALIGHT = 'ExtraLight',
	EXTRALIGHTITALIC = 'ExtraLightItalic',
	ITALIC = 'Italic',
	LIGHT = 'Light',
	LIGHTITALIC = 'LightItalic',
	MEDIUM = 'Medium',
	MEDIUMITALIC = 'MediumItalic',
	REGULAR = 'Regular',
	SEMIBOLD = 'SemiBold',
	SEMIBOLDITALIC = 'SemiBoldItalic',
	THIN = 'Thin',
	THINITALIC = 'ThinItalic'
}

export class FontFamily {

	static of (fontName: string, fontWeightName: string): FontFamily {
		return new FontFamily(fontName, fontWeightName)
	}

	private constructor (fontName: string, fontWeightName: string) {
		this._fontFamily = `${fontName}-${fontWeightName}`
	}

	private readonly _fontFamily: string

	public getFontFamily (): string {
		return this._fontFamily
	}
}

const globalFontStyle = (fontName: string) => {
	return Object.values(FontWeightName)
		.map(fontWeightName => {
			const fontWeight = FontFamily.of(fontName, fontWeightName)
			return `
				@font-face {
					'font-family': ${fontWeight.getFontFamily()},
					'src': url('/fonts/${fontName}/${fontWeight.getFontFamily()}.ttf') format('ttf'),
					'font-display': 'swap'
		    }`
		})
}

export default globalFontStyle