// lib
import { memo } from 'react'
import isEqual from 'react-fast-compare'

// types
import { IDropdownMenu } from 'types/dropdownMenu'

// styles
import { TextStyled } from '@common-styled/Text.styled'
import { StyledDropdown } from './styles'

export type DropdownProps = {
  label: string
  options: IDropdownMenu[]
}

// deep compare in memo
const areEqual = (prevData: DropdownProps, nextData: DropdownProps) => {
  return isEqual(prevData.options, nextData.options) && prevData.label === nextData.label
}

const Dropdown = ({ label = '', options = [] }: DropdownProps) => {
  const renderOptions = () =>
    options.map((item) => (
      <li>
        <TextStyled as='a' type='subMenu' href={item.dropdownLink}>
          {item.dropdownItem}
        </TextStyled>
      </li>
    ))

  return (
    <StyledDropdown>
      <li>
        <TextStyled as='a' type='menu' href=''>
          {label}
        </TextStyled>
        <ul>{renderOptions()}</ul>
      </li>
    </StyledDropdown>
  )
}

export default memo(Dropdown, areEqual)
