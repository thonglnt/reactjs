// lib
import styled from 'styled-components'

// themes
import { theme } from '@themes'

// styled
import { TextStyled } from '@common-styled/Text.styled'

export const SpanTagStyled = styled(TextStyled)`
  padding: 8px 0;

  &:hover {
    color: ${theme.Colors.crayola};
  }
`

export const WrapperArchive = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HrTagStyled = styled.hr`
  color: ${theme.Colors.platinum};
`
