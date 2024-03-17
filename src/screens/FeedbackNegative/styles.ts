import styled, { css } from 'styled-components/native'

export const FeedbackTitle = styled.Text`
  ${(props) => css`
    color: ${props.theme.colors['red-500']};
    font-size: ${props.theme.fontSizes.lg};
    font-family: ${props.theme.fontFamily.bold};
  `}
`
