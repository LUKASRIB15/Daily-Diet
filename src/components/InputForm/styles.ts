import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const InputFormLayout = styled.View`
  gap: 8px;
`

export const LabelFormInput = styled.Text`
  ${(props) => css`
    font-family: ${props.theme.fontFamily.bold};
    color: ${props.theme.colors['gray-900']};
  `}
`

type InputFormFieldProps = {
  focused: boolean
}

export const InputFormField = styled(TextInput).attrs((props) => ({
  cursorColor: props.theme.colors['gray-900'],
}))<InputFormFieldProps>`
  border: 1px solid
    ${(props) =>
      props.focused
        ? props.theme.colors['gray-600']
        : props.theme.colors['gray-300']};
  padding: 14px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors['gray-900']};
  margin-bottom: 24px;
`
