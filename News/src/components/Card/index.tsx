// lib
import { memo } from 'react'

// styles
import { StyledLink, StyledCardBody, StyledCard, StyledCardImage } from './styles'
import { TextStyled } from '@common-styled/Text.styled'

// helpers
import { splitTitle } from '@helpers/splitTitle'

export type CardProps = {
  img: string
  title: string
  tag: string
  createDate: string
  alt: string
}

const Card = ({ img = '', title = '', tag = '', createDate = '', alt = '' }: CardProps) => {
  return (
    <StyledCard>
      <div>
        <StyledCardImage src={img} alt={alt} />
      </div>
      <StyledCardBody>
        <h4>
          <StyledLink as='a' type='titleCard' href=''>
            {splitTitle(title)}
          </StyledLink>
        </h4>
        <TextStyled as='p' type='date'>
          <StyledLink as='a' type='author' href=''>
            {tag} &nbsp;
          </StyledLink>
          - {createDate}
        </TextStyled>
      </StyledCardBody>
    </StyledCard>
  )
}

export default memo(Card)
