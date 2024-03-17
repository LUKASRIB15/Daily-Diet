import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type DetailsMealLayoutProps = {
  isInDiet?: boolean
}

/* Estilização do header do meal */

export const DetailsMealLayout = styled(SafeAreaView)<DetailsMealLayoutProps>`
  background-color: ${(props) =>
    props.isInDiet
      ? props.theme.colors['green-100']
      : props.theme.colors['red-100']};
  flex: 1;
  padding-top: 24px;
`

export const ContainerTitleDetailsMeal = styled.View`
  align-items: center;
  margin-bottom: 24px;
`

export const TitleDetailsMeal = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.fontSizes.md};
    font-family: ${props.theme.fontFamily.bold};
    color: ${props.theme.colors['gray-900']};
  `}
`

/* Estilização do conteúdo dentro modalbottomsheet */

export const NameMeal = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.fontSizes.md};
    font-family: ${props.theme.fontFamily.bold};
    color: ${props.theme.colors['gray-900']};
  `}
`

export const DescriptionMeal = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.fontSizes.base};
    font-family: ${props.theme.fontFamily.regular};
    color: ${props.theme.colors['gray-700']};
  `}
  line-height: 19px;
`

export const DateMeal = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.fontFamily.bold};
    color: ${props.theme.colors['gray-900']};
  `}
`

export const BlockDiet = styled.View`
  background-color: ${(props) => props.theme.colors['gray-200']};
  align-self: flex-start;
  padding: 8px 16px;
  gap: 8px;
  flex-direction: row;
  border-radius: 1000px;
  align-items: center;
`

const STATUS_BACKGROUND = {
  success: 'green-500',
  danger: 'red-500',
} as const

type StatusMealProps = {
  variant: keyof typeof STATUS_BACKGROUND
}

export const StatusMeal = styled.View<StatusMealProps>`
  background-color: ${(props) =>
    props.theme.colors[STATUS_BACKGROUND[props.variant]]};
  width: 8px;
  height: 8px;
  border-radius: 999px;
`
