// lib
import styled from 'styled-components'

// themes
import { theme } from '@themes'

export const StyledToolTip = styled.a`
  border: 1px solid ${theme.Colors.white};
  padding: 0 4px;
  text-decoration: none;
  color: ${theme.Colors.white};

  &:hover {
    background-color: ${theme.Colors.crayola};
    border: none;
    transition: all 0.3s;
  }
`
