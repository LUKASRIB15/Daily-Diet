import styled, { css } from 'styled-components/native'

const STATUS_VARIANT = {
  success: 'green-100',
  danger: 'red-100',
} as const

type BoxLayoutProps = {
  variant: keyof typeof STATUS_VARIANT
}

export const BoxStatisticsLayout = styled.View<BoxLayoutProps>`
  background-color: ${(props) =>
    props.theme.colors[STATUS_VARIANT[props.variant]]};
  align-items: center;
  padding: 16px;
  gap: 8px;
  border-radius: 8px;
`

export const StatisticsQuantity = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors['gray-900']};
    font-size: ${props.theme.fontSizes.lg};
    font-family: ${props.theme.fontFamily.bold};
  `}
`

export const StatisticsDescription = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors['gray-700']};
    font-family: ${props.theme.fontFamily.regular};
  `}
  text-align: center;
`
