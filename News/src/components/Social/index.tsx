// lib
import { memo } from 'react'
import isEqual from 'react-fast-compare'

// themes
import { theme } from '@themes'

// types
import { ISocialButton, ISocialIcon } from 'types/social'

// styles
import { IconTagStyled, ButtonStyled, IconStyled } from './styles'

export type SocialProps = {
  icons?: ISocialIcon[]
  buttons?: ISocialButton[]
  size?: 'fa-lg' | 'fa-sm'
  colorIcon: string
}

// deep compare in memo
const areEqual = (prevData: SocialProps, nextData: SocialProps) => {
  return (
    isEqual(prevData.icons, nextData.icons) &&
    isEqual(prevData.buttons, nextData.buttons) &&
    isEqual(prevData.size, nextData.size) &&
    isEqual(prevData.colorIcon, nextData.colorIcon)
  )
}

const Social = ({
  icons = [],
  buttons = [],
  size = 'fa-sm',
  colorIcon = theme.Colors.chineseSilver,
}: SocialProps) => {
  return (
    <div>
      {icons.length > 0
        ? icons.map((item) => (
            <a href={item.href}>
              <IconStyled
                data-testid='colorIcon'
                className={`${item.className} ${size}`}
                color={colorIcon}
              />
            </a>
          ))
        : buttons &&
          buttons.map((item) => (
            <ButtonStyled data-testid='colorButton' color={item.backgroundColor}>
              <IconTagStyled className={`${item.className} ${size}`} />
              {item.nameButton}
            </ButtonStyled>
          ))}
    </div>
  )
}

export default memo(Social, areEqual)
