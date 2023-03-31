// lib
import styled from 'styled-components'

// themes
import { Metrics } from '@themes/Metrics'

export type ButtonProps = {
  alignItems?: string
  attribute: string
}

export const ButtonStyled = styled.button<ButtonProps>`
  text-transform: capitalize;
  justify-content: center;
  align-items: ${(props) => props.alignItems || 'center'};
  ${(props) => `width: ${Metrics.button[props.attribute].width}px;`}
  ${(props) => `height: ${Metrics.button[props.attribute].height}px;`}
  ${(props) => `border-radius: ${Metrics.button[props.attribute].borderRadius}px;`}
  ${(props) => `color: ${Metrics.button[props.attribute].color};`}
  ${(props) => `font-size: ${Metrics.button[props.attribute].fontSize}px;`}
  ${(props) => `border-color: ${Metrics.button[props.attribute].borderColor};`}
  ${(props) => `cursor: ${Metrics.button[props.attribute].cursor};`}
  ${(props) => `background-color: ${Metrics.button[props.attribute].backgroundColor};`}
  ${(props) => `border: ${Metrics.button[props.attribute].border};`}
  ${(props) => `padding: ${Metrics.button[props.attribute].padding};`}
`

export const ButtonHover = styled(ButtonStyled)`
  &:hover {
    ${(props) => `border-color: ${Metrics.button[props.attribute].borderColorHover};`}
    ${(props) => `color: ${Metrics.button[props.attribute].colorHover};`}
    ${(props) => `background-color: ${Metrics.button[props.attribute].backgroundColorHover};`}
    ${(props) => `transaction: ${Metrics.button[props.attribute].transactionHover};`}
    ${(props) => `opacity: ${Metrics.button[props.attribute].opacity};`}
  }
`
