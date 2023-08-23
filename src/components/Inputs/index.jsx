import React, { useState } from 'react';
import { TextError, View, TextInput } from './styled';
import { Controller } from 'react-hook-form';

export function Input ({ name, errors, inputRef, control, onSubmitEditing, placeholder, secureTextEntry, colorPlaceholder}) {
  const [hasContent, setHasContent] = useState(false);

  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(text) => {
              onChange(text);
              setHasContent(!!text); // Set hasContent to true if text is not empty
            }}
            value={value}
            ref={inputRef}
            onSubmitEditing={onSubmitEditing}
            placeholder={placeholder}
            placeholderTextColor={colorPlaceholder}
            secureTextEntry={secureTextEntry || false}
            style={hasContent ? { borderColor: '#7140FD' } : { borderColor: '#ccc' }} // Apply conditional border color
          />
        )}
      />
      {errors[name] && <TextError>{errors[name].message}</TextError>}
    </View>
  )
}
