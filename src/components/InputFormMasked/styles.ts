import { TextInputMask } from 'react-native-masked-text'
import styled from 'styled-components/native'

type InputFormFieldProps = {
  focused: boolean
}

export const InputFormField = styled(TextInputMask).attrs((props) => ({
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
