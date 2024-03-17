import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

const TYPE_COLOR = {
  dark: 'gray-700',
  light: 'gray-100',
} as const

type ButtonProps = {
  type: 'light' | 'dark'
}

export const ButtonLayout = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})<ButtonProps>`
  background-color: ${(props) => props.theme.colors[TYPE_COLOR[props.type]]};
  border-radius: 6px;
  padding: 16px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  ${(props) => css`
    border: 1px solid
      ${props.type === 'light' ? props.theme.colors['gray-700'] : 'transparent'};
  `}
`

export const ButtonTextLayout = styled.Text<ButtonProps>`
  ${(props) => css`
    color: ${props.type === 'light'
      ? props.theme.colors['gray-900']
      : props.theme.colors.white};
    font-family: ${props.theme.fontFamily.bold};
  `}
`
