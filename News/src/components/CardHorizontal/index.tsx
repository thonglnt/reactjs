// lib
import { memo } from 'react'

// styles
import {
  CardBodyStyled,
  CardHeaderStyled,
  CardHorizontalStyled,
  CardImageStyled,
  DescriptionStyled,
  LinkStyled,
  CardTitleStyled,
} from './styles'

// helpers
import { splitTitle } from '@helpers/splitTitle'

export type CardHorizontalProps = {
  img: string
  title: string
  alt: string
  tag: string
  createDate: string
}

const CardHorizontal = ({
  img = '',
  alt = '',
  title = '',
  tag = '',
  createDate = '',
}: CardHorizontalProps) => {
  return (
    <CardHorizontalStyled>
      <CardHeaderStyled>
        <CardImageStyled src={img} alt={alt} />
      </CardHeaderStyled>
      <CardBodyStyled>
        <CardTitleStyled>
          <LinkStyled as='a' type='titleCardHorizontal' href=''>
            {splitTitle(title)}
          </LinkStyled>
        </CardTitleStyled>
        <DescriptionStyled as='p' type='date'>
          <LinkStyled as='a' type='author' href=''>
            {tag}&nbsp;
          </LinkStyled>
          - {createDate}
        </DescriptionStyled>
      </CardBodyStyled>
    </CardHorizontalStyled>
  )
}

export default memo(CardHorizontal)
