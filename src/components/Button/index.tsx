import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonLayout, ButtonTextLayout } from './styles'

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
  type?: 'light' | 'dark'
}

function Button({ children, type = 'dark', ...rest }: ButtonProps) {
  return (
    <ButtonLayout type={type} {...rest}>
      {children}
    </ButtonLayout>
  )
}

function ButtonText({ children, type = 'dark' }: ButtonProps) {
  return <ButtonTextLayout type={type}>{children}</ButtonTextLayout>
}

function ButtonIcon({ children }: { children: ReactNode }) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
