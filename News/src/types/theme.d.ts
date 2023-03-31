import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: {
      primary: string
      secondary: string
      darkCharcoal: string
      taupeGray: string
      chineseSilver: string
      graniteGray: string
      crayola: string
      azure: string
      white: string
      black: string
      platinum: string
      pigment: string
      burntSienna: string
      chineseBlue: string
      buttonBlue: string
      cinnabar: string
      cadmiumPurple: string
      lightSilver: string
    }
    Fonts: {
      size: {
        base: number
        tiny: number
        sm: number
        md: number
        lg: number
        xl: number
        xxl: number
        xxxl: number
      }
      lineHeight: {
        base: number
        tiny: number
        sm: number
        md: number
        lg: number
      }
      fontWeight: {
        base: number
        tiny: number
        sm: number
        md: number
        lg: number
        xl: number
      }
    }
  }
}
