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

	private readonly _name: string
	private readonly _fonts: string[]

	private constructor (name: string, fonts: string[]) {
		this._name = name
		this._fonts = fonts
	}

	static NOTO_SANS = new FontFamily('NotoSans', ['NotoSans', 'NotoSansKR'])

	public getFontFamilies (weightName: FontWeightName): string {
		return this.getFonts().map(font => `${this.getFontFamily(font, weightName)}`).join(',  ')
	}

	private getFontFamily (font: string, weightName: FontWeightName): string {
		return `${font}-${weightName}`
	}

	public getName (): string {
		return this._name
	}

	public getFonts (): string[] {
		return this._fonts
	}

	private getFontFace (font: string): string {
		return Object.values(FontWeightName).map(weightName => {
			`
			@font-face {
				'font-family': ${this.getFontFamilies(weightName)};
				'src': url('/fonts/${font}/${this.getFontFamily(font, weightName)}.ttf') format('ttf');
				'font-display': 'swap';
	    }`
		}).join('\n')
	}

	public getFontFaces (): string {
		return this.getFonts().map(font => this.getFontFace(font)).join('\n')
	}

}

const globalFontStyle = (): string => {
	const fonts = [FontFamily.NOTO_SANS]
	return fonts.map(fontFamily => fontFamily.getFontFaces()).join('\n')
}

export default globalFontStyle