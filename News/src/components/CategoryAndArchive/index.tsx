// lib
import { memo } from 'react'

// styles
import { WrapperArchive, SpanTagStyled, HrTagStyled } from './styles'

// types
import { IArchive } from 'types/archive'

// components
import TabNavigation from '@components/Navigation'

// themes
import { theme } from '@themes'

export type CategoryAndArchiveProps = {
  brandTab: string
  categoryList?: string[]
  archiveList?: IArchive[]
}

const CategoryAndArchive = ({
  brandTab = '',
  categoryList = [],
  archiveList = [],
}: CategoryAndArchiveProps) => {
  return (
    <>
      <TabNavigation color={theme.Colors.darkCharcoal} brandTab={brandTab}></TabNavigation>
      {categoryList.length > 0 ? (
        <div>
          {categoryList.map((item) => (
            <div key={item}>
              <SpanTagStyled as='p' type='post'>
                {item}
              </SpanTagStyled>
              <HrTagStyled />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {archiveList.map((item) => (
            <WrapperArchive key={item.duration}>
              <SpanTagStyled as='p' type='post'>
                {item.duration}
              </SpanTagStyled>
              <SpanTagStyled as='p' type='post'>
                ({item.quantity})
              </SpanTagStyled>
            </WrapperArchive>
          ))}
        </div>
      )}
    </>
  )
}

export default memo(CategoryAndArchive)
