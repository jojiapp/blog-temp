import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      point: string,
      gray: string,
      lightGray: string
    },
    font: {
      family: {
        title: string,
        subTitle: string,
        semiSubTitle: string,
        content: string,
        logo: string
      }
      size: {
        title: string,
        logo: string,
        subTitle: string,
        semiSubTitle: string
      }
      weight: {
        content: string
      }
    }
  }
}