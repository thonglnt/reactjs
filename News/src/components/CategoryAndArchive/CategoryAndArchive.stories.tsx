// lib
import { Story } from '@storybook/react'

// components
import CategoryAndArchive, { CategoryAndArchiveProps } from '.'

// mocks
import { mockArchiveBrand, mockCategoryBrand } from '@mocks/mockDataCategory'

export default {
  title: 'Components/CategoryAndArchive',
  component: CategoryAndArchive,
}

const Template: Story<CategoryAndArchiveProps> = (args) => <CategoryAndArchive {...args} />

export const Category = Template.bind({})
Category.args = {
  brandTab: 'Category',
  categoryList: mockCategoryBrand,
}

export const Archive = Template.bind({})
Archive.args = {
  brandTab: 'Archive',
  archiveList: mockArchiveBrand,
}
