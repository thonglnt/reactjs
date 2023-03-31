// lib
import styled from 'styled-components'

// themes
import { theme } from '@themes'

// styled
import { ContainerFluid } from '@common-styled/Layout.styled'
import { TextStyled } from '@common-styled/Text.styled'

export const StyledContainerFluid = styled(ContainerFluid)`
  background-color: ${theme.Colors.black};
  display: flex;
  justify-content: center;
`

export const StyledUlTag = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;
`

export const StyledLinkTag = styled.a`
  text-decoration: none;
  padding-right: 20px;
  color: ${theme.Colors.chineseSilver};

  &:hover {
    color: ${theme.Colors.crayola};
  }
`

export const StyledSocialIcon = styled.div`
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledSpanTag = styled(TextStyled)`
  display: flex;
  align-items: center;
  padding-left: 10px;
`

export const StyledInputSearch = styled.input`
  border-radius: 23px;
  border: 1px solid ${theme.Colors.platinum};
  padding-left: 25px;
  height: 85%;

  &:focus {
    border: 1px solid ${theme.Colors.platinum};
    outline: 0px;
  }
`

export const StyledButtonSearch = styled.i`
  position: absolute;
  top: 10px;
  right: 30px;
  text-align: center;
  color: ${theme.Colors.primary};
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    color: ${theme.Colors.crayola};
  }
`

export const WrapperSearch = styled.div`
  position: relative;
`
