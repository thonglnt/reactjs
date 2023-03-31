// lib
import styled from 'styled-components'

// theme
import { theme } from '@themes'

export const StyledDropdown = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;

  & li {
    display: block;
    position: relative;
    padding-left: 35px;

    & a:after {
      content: ' »';
    }

    & a:only-child:after {
      content: '';
    }

    & a {
      display: block;
      padding: 15px 0;
      white-space: nowrap;

      &:hover {
        color: ${theme.Colors.crayola};
        transition: all 0.3s;
      }
    }

    & ul {
      display: none;
      padding: 0;
      background-color: ${theme.Colors.white};
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
      width: 180px;

      & li {
        padding-left: 0;
        & a {
          padding: 10px;

          &:hover {
            background-color: ${theme.Colors.crayola};
            color: ${theme.Colors.white};
          }
        }
      }
    }

    &:hover ul {
      display: block;
      position: absolute;
    }
  }
`
