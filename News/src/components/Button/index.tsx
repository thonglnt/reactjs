// lib
import { ButtonHTMLAttributes, memo, ReactNode } from 'react'

// styles
import { ButtonHover } from '@common-styled/Button.styled'

export type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  buttonType: string
  icon?: string
  type: ButtonHTMLAttributes<HTMLElement>['type']
}

const Button = ({
  children = '',
  icon = '',
  onClick = () => {},
  buttonType = 'default',
  type = 'button',
}: ButtonProps) => {
  return (
    <>
      {icon ? (
        <ButtonHover type={type} attribute={buttonType} className={buttonType} onClick={onClick}>
          <i className={icon} />
        </ButtonHover>
      ) : (
        <ButtonHover type={type} attribute={buttonType} className={buttonType} onClick={onClick}>
          {children}
        </ButtonHover>
      )}
    </>
  )
}

export default memo(Button)
