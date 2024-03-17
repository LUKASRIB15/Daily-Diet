import { TextInputProps } from 'react-native'
import { InputFormField, InputFormLayout, LabelFormInput } from './styles'
import { useState } from 'react'

type InputFormProps = TextInputProps & {
  label: string
}

export function InputForm({ label, ...rest }: InputFormProps) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <InputFormLayout>
      <LabelFormInput>{label}</LabelFormInput>
      <InputFormField
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        focused={isFocused}
      />
    </InputFormLayout>
  )
}
