// lib
import { memo } from 'react'
import isEqual from 'react-fast-compare'

// styles
import { NavigationBrand, StyledBranchTab, StyledLink, StyledLiTag, StyledUlTag } from './styled'
import { TextStyled } from '@common-styled/Text.styled'

export type TabNavigationProps = {
  color: string
  brandTab: string
  navTab?: string[]
}

// deep compare in memo
const areEqual = (prevData: TabNavigationProps, nextData: TabNavigationProps) => {
  return (
    isEqual(prevData.navTab, nextData.navTab) &&
    prevData.color === nextData.color &&
    prevData.brandTab === nextData.brandTab
  )
}

const TabNavigation = ({ color = '', brandTab = '', navTab = [] }: TabNavigationProps) => {
  const VIEW_ALL = 'View all'

  const renderNavTab = () =>
    navTab.map((item) =>
      item !== VIEW_ALL ? (
        <StyledLiTag key={item}>
          <TextStyled as='a' type='subBrand' href=''>
            {item}
          </TextStyled>
        </StyledLiTag>
      ) : (
        <StyledLink as='a' type='subBrand' href=''>
          {item} <i className='fs-12 m-l-5 fa fa-caret-right'></i>
        </StyledLink>
      ),
    )

  return (
    <NavigationBrand color={color}>
      <div>
        <StyledUlTag>
          <StyledBranchTab as='li' type='brand' color={color} data-testid='color'>
            {brandTab}
          </StyledBranchTab>
          {renderNavTab()}
        </StyledUlTag>
      </div>
    </NavigationBrand>
  )
}

export default memo(TabNavigation, areEqual)
