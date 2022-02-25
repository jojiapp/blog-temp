import { DefaultTheme } from 'styled-components'

const globalThemeStyle = ({ color, font }: DefaultTheme) => {
  return {
    ':root': {
      '--point': color.point,
      '--gray': color.gray,
      '--light_gray': color.lightGray,
      '--font_family_title': font.family.title,
      '--font_family_sub_title': font.family.subTitle,
      '--font_family_content': font.family.content,
      '--font_family_logo': font.family.logo,
      '--font_size_title': font.size.title,
      '--font_size_sub_title': font.size.subTitle,
      '--font_size_semi_sub_title': font.size.semiSubTitle,
      '--font_size_logo': font.size.logo,
      '--font_weight_content': font.weight.content
    }
  }
}

export default globalThemeStyle