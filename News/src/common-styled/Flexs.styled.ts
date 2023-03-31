// lib
import styled from 'styled-components'

export type DefaultProps = {
  mLeft?: number
  mRight?: number
  mBottom?: number
  mTop?: number
  pLeft?: number
  pRight?: number
  pBottom?: number
  pTop?: number
  justifyContent?: string
  alignItem?: string
  width?: number
  height?: number
  mHorizontal?: number
  mVertical?: number
  pHorizontal?: number
  pVertical?: number
  display?: string
}

export const Default = styled.div<DefaultProps>`
  ${(props) => props.mLeft && `margin-left: ${props.mLeft}px`};
  ${(props) => props.mRight && `margin-right: ${props.mRight}px`};
  ${(props) => props.mBottom && `margin-bottom: ${props.mBottom}px`};
  ${(props) => props.mTop && `margin-top: ${props.mTop}px`};

  ${(props) => props.pLeft && `padding-left: ${props.pLeft}px`};
  ${(props) => props.pRight && `padding-right: ${props.pRight}px`};
  ${(props) => props.pBottom && `padding-bottom: ${props.pBottom}px`};
  ${(props) => props.pTop && `padding-top: ${props.pTop}px`};

  ${(props) => props.mHorizontal && `margin-horizontal: ${props.mHorizontal}px`};
  ${(props) => props.mVertical && `margin-vertical: ${props.mVertical}px`};

  ${(props) => props.pHorizontal && `padding-horizontal: ${props.pHorizontal}px`};
  ${(props) => props.pVertical && `padding-vertical: ${props.pVertical}px`};

  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${(props) => props.alignItem && `align-items: ${props.alignItem}`};
  ${(props) => props.display && `display: ${props.display}`};
  ${(props) => props.width && `width: ${props.width}px`};
  ${(props) => props.height && `height: ${props.height}px`};
`

export const Column = styled(Default)`
  flex-direction: column;
`

export const Row = styled(Default)`
  flex-direction: row;
`

export const RowCenterVertical = styled(Row)`
  justify-content: center;
`

export const RowRightVertical = styled(Row)`
  justify-content: flex-end;
`

export const RowCenterHorizontal = styled(Row)`
  align-items: center;
`

export const SpaceBetween = styled(Row)`
  justify-content: space-between;
`

export const Wrap = styled(Row)`
  flex-wrap: wrap;
`
