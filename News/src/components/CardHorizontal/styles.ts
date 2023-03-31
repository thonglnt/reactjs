// lib
import styled from 'styled-components'

// themes
import { theme } from '@themes'

// styled
import { TextStyled } from '@common-styled/Text.styled'

export const CardHorizontalStyled = styled.div`
  max-width: 360px;
  display: flex;
`

export const CardHeaderStyled = styled.div`
  width: 30%;
`

export const CardImageStyled = styled.img`
  width: 100%;
  display: block;
  height: 80%;

  &:hover {
    opacity: 0.8;
  }
`

export const CardBodyStyled = styled.div`
  width: 60%;
  height: 100%;
`

export const CardTitleStyled = styled.h4`
  padding-left: 10px;
`

export const LinkStyled = styled(TextStyled)`
  :hover {
    transition: all 0.3s;
    color: ${theme.Colors.crayola};
  }
`

export const DescriptionStyled = styled(TextStyled)`
  padding: 10px 0 0 10px;
`
