// lib
import styled from 'styled-components'

// themes
import { theme } from '@themes'

// styled
import { TextStyled } from '@common-styled/Text.styled'

export const NavigationBrand = styled.div`
  height: 50px;
  margin-bottom: 20px;
  border: 1px solid ${theme.Colors.platinum};
  border-left: ${(props) => `6px solid ${props.color}`};
`

export const StyledUlTag = styled.ul`
  display: flex;
  padding-left: 12px;
`

export const StyledLiTag = styled.li`
  padding-left: 20px;
  list-style: none;

  &:hover a {
    color: ${theme.Colors.crayola};
  }
`

export const StyledBranchTab = styled(TextStyled)`
  list-style: none;
  color: ${(props) => props.color};
`

export const StyledLink = styled(TextStyled)`
  :last-child {
    position: absolute;
    right: 40px;
  }

  &:hover {
    color: ${theme.Colors.crayola};
  }
`
