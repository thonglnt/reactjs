// lib
import styled from 'styled-components'

// themes
import { theme } from '@themes'

export const StyledCardOverlays = styled.div`
  position: relative;
  width: 50%;

  :hover img {
    opacity: 0.9;
  }
`

export const StyledCardImage = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
`

export const StyledCardBody = styled.div`
  width: 100%;
  transition: 0.5s ease;
  position: absolute;
  top: 72%;
  left: 3%;
`

export const StyledCardTitle = styled.h5`
  padding: 10px 0;

  a:hover {
    color: ${theme.Colors.crayola};
    transition: all 0.3s;
  }
`
