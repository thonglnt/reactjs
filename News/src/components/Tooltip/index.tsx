// lib
import { memo } from 'react'

// style
import { StyledToolTip } from './styles'

export type TooltipProps = {
  nameTag: string
  link?: string
}

const Tooltip = ({ nameTag = '', link = '' }: TooltipProps) => {
  return (
    <div>
      <StyledToolTip href={link}>{nameTag}</StyledToolTip>
    </div>
  )
}

export default memo(Tooltip)
