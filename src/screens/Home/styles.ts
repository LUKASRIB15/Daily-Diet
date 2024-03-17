import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const HomeLayout = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors['gray-100']};
  flex: 1;

  padding: 16px 24px;
`
/* Estilização do pressable de porcentagem de refeição */

type ButtonMealsPercent = {
  variant?: 'success' | 'danger'
}

export const ButtonMealsPercent = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})<ButtonMealsPercent>`
  background-color: ${(props) =>
    props.variant === 'success'
      ? props.theme.colors['green-100']
      : props.theme.colors['red-100']};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 20px 16px;
`

export const InfoMealsPercent = styled.View`
  align-items: center;
`

export const TitlePercent = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.fontFamily.bold};
    font-size: ${props.theme.fontSizes.xl};
    color: ${props.theme.colors['gray-900']};
  `}
`

export const SubtitlePercent = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.fontFamily.regular};
    color: ${props.theme.colors['gray-700']};
  `}
`

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs({
  size: 24,
})`
  position: absolute;
  top: 8px;
  right: 8px;
`
/* Estilização do container de nova refeição */

export const ContainerNewMeal = styled.View`
  gap: 8px;
  margin-top: 32px;
`

export const NewMealTitle = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.fontFamily.regular};
    font-size: ${props.theme.fontSizes.base};
    color: ${props.theme.colors['gray-900']};
  `}
`

/* Estilização da lista de refeições */

export const DateOfMealsTitle = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.fontFamily.bold};
    font-size: ${props.theme.fontSizes.md};
    color: ${props.theme.colors['gray-900']};
  `}
  line-height: 30px;
`

/* Estilizando FlatList vazio */

export const TitleListOfMealsIsEmpty = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.fontFamily.bold};
    font-size: ${props.theme.fontSizes.md};
    color: ${props.theme.colors['gray-900']};
  `}
  text-align: center;
`
