// lib
import { render } from '@testing-library/react'

// components
import CategoryAndArchive, { CategoryAndArchiveProps } from '.'

// mocks
import { mockArchiveBrand, mockCategoryBrand } from '@mocks/mockDataCategory'

describe('Test Category And Archive component', () => {
  const defaultProps: CategoryAndArchiveProps = {
    brandTab: 'Category',
    categoryList: mockCategoryBrand,
  }

  const customProps: CategoryAndArchiveProps = {
    brandTab: 'Archive',
    archiveList: mockArchiveBrand,
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<CategoryAndArchive {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  test('Component Category And Archive should render correctly with default props', () => {
    const { getByText } = render(<CategoryAndArchive {...defaultProps} />)

    expect(getByText('Category')).toBeInTheDocument()
  })

  test('Component Category And Archive should render correctly width custom props', () => {
    const { getByText } = render(<CategoryAndArchive {...customProps} />)

    expect(getByText('Archive')).toBeInTheDocument()
  })
})
