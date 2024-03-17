import styled, { css } from 'styled-components/native'

export const RemoveMealLayout = styled.View`
  background-color: rgba(27, 29, 30, 0.25);
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const RemoveMealModal = styled.View`
  background-color: ${(props) => props.theme.colors['gray-100']};
  width: 327px;
  padding: 24px;
  border-radius: 8px;
  gap: 32px;
`

export const RemoveMealTitle = styled.Text`
  ${(props) => css`
    font-size: ${props.theme.fontSizes.md};
    font-family: ${props.theme.fontFamily.bold};
    color: ${props.theme.colors['gray-700']};
  `}
  text-align: center;
`
