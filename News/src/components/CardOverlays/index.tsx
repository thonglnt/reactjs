// lib
import { memo } from 'react'

// components
import Tooltip from '@components/Tooltip'

// styles
import { StyledCardBody, StyledCardImage, StyledCardOverlays, StyledCardTitle } from './styles'
import { TextStyled } from '@common-styled/Text.styled'

// helpers
import { splitTitle } from '@helpers/splitTitle'

export type CardOverlaysProps = {
  img: string
  title: string
  tooltip: string
  author?: string
  createDate?: string
  alt?: string
}

const CardOverlays = ({
  img = '',
  title = '',
  author = '',
  createDate = '',
  tooltip = '',
  alt = '',
}: CardOverlaysProps) => {
  return (
    <StyledCardOverlays>
      <StyledCardImage src={img} alt={alt} />
      <StyledCardBody>
        <Tooltip nameTag={tooltip} />
        <StyledCardTitle>
          <TextStyled as='a' type='large' href=''>
            {splitTitle(title)}
          </TextStyled>
        </StyledCardTitle>
        <TextStyled as='p' type='date'>
          <TextStyled as='a' type='author' href=''>
            {author}&nbsp;
          </TextStyled>
          - {createDate}
        </TextStyled>
      </StyledCardBody>
    </StyledCardOverlays>
  )
}

export default memo(CardOverlays)
