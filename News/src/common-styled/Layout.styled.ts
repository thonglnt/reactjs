// lib
import styled from 'styled-components'

export type ContainerProps = {
  margin?: number
  padding?: number
  width?: number
  height?: number
  display?: string
  justifyContent?: string
}

export type SectionProps = {
  bgColor?: string
}

export const ContainerFluid = styled.div`
  width: 100%;
`

export const Container = styled.div<ContainerProps>`
  display: ${(props) => props.display || 'flex'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  ${(props) => props.margin && `margin: 0 ${props.margin}px`};
  ${(props) => props.padding && `padding: 0 ${props.padding}px`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: 0 ${props.height}px`};
`

export const Section = styled(Container)<SectionProps>`
  ${(props) => props.bgColor && `background-color: 0 ${props.bgColor}`}
`
