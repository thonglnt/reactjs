// lib
import styled from 'styled-components'

// themes
import { Metrics } from '@themes/Metrics'

export type TextProps = {
  textAlign?: string
  padding?: number
  type: string
}

export const TextStyled = styled.h1<TextProps>`
  text-transform: capitalize;
  text-decoration: none;
  text-align: ${(props) => props.textAlign || 'left'};
  padding: ${(props) => props.padding}px;
  ${(props) => `color: ${Metrics.text[props.type].color};`}
  ${(props) => `font-size: ${Metrics.text[props.type].fontSize}px;`}
  ${(props) => `line-height: ${Metrics.text[props.type].lineHeight};`}
  ${(props) => `font-weight: ${Metrics.text[props.type].fontWeight};`}
`
