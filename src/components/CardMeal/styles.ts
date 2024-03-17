import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const CardMealLayout = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})`
  border: 1px solid ${(props) => props.theme.colors['gray-300']};
  border-radius: 6px;
  padding: 14px 16px 12px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`

export const ContainerTimeText = styled.View`
  padding-right: 16px;
  margin-right: 16px;
  border-right-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors['gray-400']};
`

export const TimeText = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.fontSizes.xs};
    color: ${props.theme.colors['gray-900']};
    font-family: ${props.theme.fontFamily.bold};
  `}
`

export const NameText = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.fontSizes.base};
    color: ${props.theme.colors['gray-700']};
    font-family: ${props.theme.fontFamily.regular};
  `}
  flex: 1;
`

const STATUS_VARIANT = {
  success: 'green-200',
  danger: 'red-200',
} as const

type DietSignBackground = {
  variant: keyof typeof STATUS_VARIANT
}

export const DietSign = styled.View<DietSignBackground>`
  width: 14px;
  height: 14px;
  background-color: ${(props) =>
    props.theme.colors[STATUS_VARIANT[props.variant]]};
  border-radius: 999px;
`
