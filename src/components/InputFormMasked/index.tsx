import { useState } from 'react'
import { InputFormLayout, LabelFormInput } from '../InputForm/styles'
import { InputFormField } from './styles'
import { TextInputProps } from 'react-native'
import { TextInputMaskTypeProp } from 'react-native-masked-text'

type InputFormProps = TextInputProps & {
  label: string
  format: string
  type: TextInputMaskTypeProp
}

export function InputFormMasked({
  label,
  format,
  type,
  ...rest
}: InputFormProps) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <InputFormLayout>
      <LabelFormInput>{label}</LabelFormInput>
      <InputFormField
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        focused={isFocused}
        type={type}
        options={{
          format,
        }}
      />
    </InputFormLayout>
  )
}
