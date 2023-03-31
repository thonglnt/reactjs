// types
import { IMetrics } from 'types/metrics'

// themes
import { Colors } from './Color'
import { Fonts } from './Font'

export const Metrics: IMetrics = {
  button: {
    default: {
      backgroundColor: Colors.primary,
      border: 'none',
      padding: '10px 25px',
      borderRadius: 3,
      color: Colors.white,
      fontSize: Fonts.size.md,
      cursor: 'pointer',
      backgroundColorHover: Colors.crayola,
      transactionHover: 'all 0.3s',
    },
    outline: {
      padding: '10px 20px',
      border: '1px solid  ',
      borderRadius: 20,
      borderColor: Colors.chineseSilver,
      color: Colors.taupeGray,
      fontSize: Fonts.size.sm,
      cursor: 'pointer',
      transactionHover: 'all 0.3s',
      colorHover: Colors.crayola,
      borderColorHover: Colors.crayola,
    },
    backToTop: {
      color: Colors.white,
      backgroundColor: Colors.crayola,
      border: '1px solid',
      cursor: 'pointer',
      padding: '8px 13px',
      opacity: 0.8,
    },
  },
  text: {
    large: {
      color: Colors.white,
      fontSize: Fonts.size.xxxl,
      lineHeight: Fonts.lineHeight.base,
      fontWeight: Fonts.fontWeight.md,
    },
    mediumWhite: {
      color: Colors.white,
      fontSize: Fonts.size.xxl,
      lineHeight: Fonts.lineHeight.base,
      fontWeight: Fonts.fontWeight.md,
    },
    mediumBlack: {
      color: Colors.primary,
      fontSize: Fonts.size.xxl,
      lineHeight: Fonts.lineHeight.base,
      fontWeight: Fonts.fontWeight.md,
    },
    small: {
      color: Colors.darkCharcoal,
      fontSize: Fonts.size.md,
      lineHeight: Fonts.lineHeight.tiny,
      fontWeight: Fonts.fontWeight.sm,
    },
    content: {
      color: Colors.graniteGray,
      fontSize: Fonts.size.sm,
      lineHeight: Fonts.lineHeight.lg,
      fontWeight: Fonts.fontWeight.sm,
    },
    description: {
      color: Colors.taupeGray,
      fontSize: Fonts.size.tiny,
      lineHeight: Fonts.lineHeight.md,
      fontWeight: Fonts.fontWeight.sm,
    },
    author: {
      color: Colors.taupeGray,
      fontSize: Fonts.size.base,
      lineHeight: Fonts.lineHeight.md,
      fontWeight: Fonts.fontWeight.sm,
    },
    menu: {
      color: Colors.primary,
      fontSize: Fonts.size.lg,
      lineHeight: Fonts.lineHeight.sm,
      fontWeight: Fonts.fontWeight.sm,
    },
    subMenu: {
      color: Colors.primary,
      fontSize: Fonts.size.sm,
      lineHeight: Fonts.lineHeight.md,
      fontWeight: Fonts.fontWeight.sm,
    },
    brand: {
      fontSize: Fonts.size.xl,
      fontWeight: Fonts.fontWeight.md,
    },
    subBrand: {
      color: Colors.secondary,
      fontSize: Fonts.size.sm,
      lineHeight: Fonts.lineHeight.md,
      fontWeight: Fonts.fontWeight.sm,
    },
    titleCard: {
      color: Colors.primary,
      fontSize: Fonts.size.xxl,
      lineHeight: Fonts.lineHeight.sm,
      fontWeight: Fonts.fontWeight.md,
    },
    titleCardHorizontal: {
      color: Colors.darkCharcoal,
      fontSize: Fonts.size.md,
      lineHeight: Fonts.lineHeight.tiny,
      fontWeight: Fonts.fontWeight.md,
    },
    date: {
      color: Colors.taupeGray,
      fontSize: Fonts.size.base,
      lineHeight: Fonts.lineHeight.md,
      fontWeight: Fonts.fontWeight.sm,
    },
    post: {
      color: Colors.primary,
      fontSize: Fonts.size.tiny,
      lineHeight: Fonts.lineHeight.tiny,
      fontWeight: Fonts.fontWeight.sm,
    }
  },
}
