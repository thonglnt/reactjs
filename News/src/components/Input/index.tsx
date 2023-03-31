// lib
import React, { InputHTMLAttributes, memo } from 'react'

// styles
import { ErrMsgStyled, InputStyled, LabelStyled, Wrapper } from './styles'

export type InputProps = {
  name: string
  type: InputHTMLAttributes<HTMLElement>['type']
  label?: string
  placeholder?: string
  errorMessage?: string
  defaultValue?: string
}

const Input = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, InputProps>(
  (
    {
      name = '',
      label = '',
      type = 'text',
      placeholder = 'Please enter something.',
      errorMessage = '',
      defaultValue = '',
      ...rest
    }: InputProps,
    ref,
  ): JSX.Element => {
    return (
      <>
        <Wrapper>
          {label && <LabelStyled>{label}</LabelStyled>}
          <InputStyled
            defaultValue={defaultValue}
            ref={ref}
            placeholder={placeholder}
            type={type}
            name={name}
            {...rest}
          />
        </Wrapper>
        {errorMessage && <ErrMsgStyled>{errorMessage}</ErrMsgStyled>}
      </>
    )
  },
)

export default memo(Input)
