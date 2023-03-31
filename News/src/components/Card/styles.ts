// lib
import styled from 'styled-components'

// themes
import { theme } from '@themes'

// styled
import { TextStyled } from '@common-styled/Text.styled'

export const StyledCard= styled.div`
  margin: 10px;
  background-color: ${theme.Colors.white};
  overflow: hidden;
  width: 320px;
`

export const StyledCardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;

  &:hover {
    opacity: 0.8;
  }
`

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledLink = styled(TextStyled)`
  :hover {
    transition: all 0.3s;
    color: ${theme.Colors.crayola};
  }
`

export const StyledDescription = styled.p`
  margin: 0 0 20px;
`
