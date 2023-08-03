import React from 'react'
import { TextError, View, TextInput } from './styled'
import { Controller } from 'react-hook-form'

export function Input ({ name, errors, inputRef, control, onSubmitEditing, placeholder, secureTextEntry, colorPlaceholder}) {
  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={colorPlaceholder}
            secureTextEntry={secureTextEntry || false}
          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
 </View>
  )
}