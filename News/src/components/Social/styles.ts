// lib
import styled from 'styled-components'

// themes
import { theme } from '@themes'

export const IconStyled = styled.i`
  color: ${(props) => props.color};
  padding-left: 10px;

  &:hover {
    color: ${theme.Colors.crayola};
  }
`

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 5px;
  border-radius: 3px;

  :hover {
    background-color: ${theme.Colors.crayola};
    color: ${theme.Colors.white};
  }
`

export const IconTagStyled = styled.i`
  margin-right: 3px;
`
