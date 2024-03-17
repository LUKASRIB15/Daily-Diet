import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

/* Estilização do Header do FormMeal */

export const FormMealLayout = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors['gray-300']};
  flex: 1;
  padding-top: 24px;
`

export const TitleFormMeal = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.fontSizes.md};
    font-family: ${props.theme.fontFamily.bold};
    color: ${props.theme.colors['gray-900']};
  `}
`

export const ContainerTitleFormMeal = styled.View`
  align-items: center;
  margin-bottom: 24px;
`

/* Estilização dos RadioButtons */

export const InDietText = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors['gray-700']};
    font-family: ${props.theme.fontFamily.bold};
  `}
`

export const ContainerRadioButtons = styled.View`
  flex-direction: row;
  gap: 16px;
`

const BG_DIET = {
  hasInDiet: 'green-100',
  hasNoInDiet: 'red-100',
} as const

const BORDER_DIET = {
  hasInDiet: 'green-500',
  hasNoInDiet: 'red-500',
} as const

type RadioButtonProps = {
  isChecked: boolean | undefined
  type: keyof typeof BG_DIET
}

export const RadioButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})<RadioButtonProps>`
  flex: 1;
  padding: 16px;
  gap: 8px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  background-color: ${(props) =>
    props.isChecked
      ? props.theme.colors[BG_DIET[props.type]]
      : props.theme.colors['gray-200']};

  border: 1px solid
    ${(props) =>
      props.isChecked
        ? props.theme.colors[BORDER_DIET[props.type]]
        : props.theme.colors['gray-200']};
`

export const RadioButtonText = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors['gray-900']};
    font-family: ${props.theme.fontFamily.bold};
  `}
`

type RadioButtonBeforeProps = {
  success?: boolean
}

export const RadioButtonBefore = styled.View<RadioButtonBeforeProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${(props) =>
    props.success
      ? props.theme.colors['green-500']
      : props.theme.colors['red-500']};
`
