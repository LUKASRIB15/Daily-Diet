import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const FeedbackLayout = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const FeedbackInfos = styled.View`
  align-items: center;
`

export const FeedbackTitle = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors['green-500']};
    font-size: ${props.theme.fontSizes.lg};
    font-family: ${props.theme.fontFamily.bold};
  `}
`

export const FeedbcakDescription = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors['gray-900']};
    font-size: ${props.theme.fontSizes.base};
    font-family: ${props.theme.fontFamily.regular};
  `}
  text-align: center
`
