import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

/* Estilizando o header com informações de porcentagem */

type StatisticsLayoutProps = {
  variant: 'success' | 'danger'
}

export const StatisticsLayout = styled(SafeAreaView)<StatisticsLayoutProps>`
  background-color: ${(props) =>
    props.variant === 'success'
      ? props.theme.colors['green-100']
      : props.theme.colors['red-100']};
  flex: 1;
  padding-top: 32px;
`

export const ButtonGoBack = styled(TouchableOpacity)`
  position: absolute;
  top: 40px;
  left: 24px;
`

/* Estilização dos ModalBottomSheet e suas caixas */

export const StatisticsText = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors['gray-900']};
    font-family: ${props.theme.fontFamily.bold};
  `}
  margin-bottom: 16px;
  text-align: center;
`

export const BoxesStatistics = styled.View`
  gap: 16px;
`
