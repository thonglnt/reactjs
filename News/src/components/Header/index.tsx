// assets
import banner from '@assets/images/banner.jpg'
import logo from '@assets/images/logo-header.png'

// components
import Dropdown from '@components/Dropdown'
import Social from '@components/Social'

// mocks
import {
  Business,
  Entertainment,
  Features,
  Home,
  LifeStyle,
  News,
  Travel,
  Video,
} from '@mocks/mockDataMenu'
import { mockDataSocialIcon } from '@mocks/mockDataSocial'

// styles
import {
  StyledContainerFluid,
  StyledUlTag,
  StyledLinkTag,
  Wrapper,
  StyledSpanTag,
  StyledInputSearch,
  StyledButtonSearch,
  WrapperSearch,
  StyledSocialIcon,
} from './styles'
import { Container } from '@common-styled/Layout.styled'
import { Column, Row } from '@common-styled/Flexs.styled'
import { TextStyled } from '@common-styled/Text.styled'

// themes
import { theme } from '@themes'

const Header = () => {
  return (
    <header>
      <StyledContainerFluid>
        <Container width={1000}>
          <Row display='flex' width={1000} justifyContent='space-between'>
            <Column>
              <StyledUlTag>
                <li>
                  <StyledLinkTag href=''>About</StyledLinkTag>
                </li>
                <li>
                  <StyledLinkTag href=''>Contact</StyledLinkTag>
                </li>
                <li>
                  <StyledLinkTag href=''>Sign up</StyledLinkTag>
                </li>
                <li>
                  <StyledLinkTag href=''>Login</StyledLinkTag>
                </li>
              </StyledUlTag>
            </Column>
            <Column display='flex' justifyContent='center'>
              <StyledSocialIcon>
                <Social
                  socialIcon={mockDataSocialIcon}
                  colorIcon={theme.Colors.chineseSilver}
                  size='fa-lg'
                />
              </StyledSocialIcon>
            </Column>
          </Row>
        </Container>
      </StyledContainerFluid>
      <Wrapper>
        <Container width={1000} display='block' justifyContent='center'>
          <Row mTop={25} width={1000} display='flex' justifyContent='space-between'>
            <Column display='flex' justifyContent='center'>
              <img src={logo} alt='logo' />
            </Column>
            <Column>
              <img src={banner} alt='logo' />
            </Column>
          </Row>
          <Row display='flex'>
            <Dropdown label='Home' options={Home} />
            <Dropdown label='News' options={News} />
            <Dropdown label='Entertainment' options={Entertainment} />
            <Dropdown label='Business' options={Business} />
            <Dropdown label='Travel' options={Travel} />
            <Dropdown label='Life Style' options={LifeStyle} />
            <Dropdown label='Video' options={Video} />
            <Dropdown label='Feature' options={Features} />
          </Row>
          <Row display='flex' justifyContent='space-between' alignItem='center'>
            <Column pLeft={35}>
              <Row display='flex'>
                <TextStyled as='h5' type='subMenu'>
                  TRENDING NOW:
                </TextStyled>
                <StyledSpanTag as='span' type='content'>
                  Microsoft quisque at ipsum vel orci eleifend ultrices
                </StyledSpanTag>
              </Row>
            </Column>
            <Column display='grid' width={220} height={45}>
              <WrapperSearch>
                <StyledInputSearch placeholder='Search...' type='text' />
                <StyledButtonSearch>
                  <i className='fa fa-search fa-sm'></i>
                </StyledButtonSearch>
              </WrapperSearch>
            </Column>
          </Row>
        </Container>
      </Wrapper>
    </header>
  )
}

export default Header
