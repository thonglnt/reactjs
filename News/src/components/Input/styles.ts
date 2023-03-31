// lib
import styled from 'styled-components'

// themes
import { theme } from '@themes'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelStyled = styled.label`
  margin: 0 0 10px 3px;
`

export const InputStyled = styled.input`
  width: 260px;
  height: 50px;
  padding-left: 10px;
  border: 1px solid ${theme.Colors.lightSilver};
  border-radius: 5px;

  &:focus {
    outline-width: 0;
  }
`

export const ErrMsgStyled = styled.small`
  color: ${theme.Colors.cinnabar};
  padding-left: 3px;
`
