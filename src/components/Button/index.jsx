import React from 'react';
import {Buttons, Text, ViewButton} from './styled';

export default function Button(props) {
  return (
    <ViewButton>
      <Buttons
        disabled={props?.disabled}
        onPress={props.onPress}
        background={props?.background}
        border={props?.border}
        whidth={props?.whidth}
        >
        <Text color={props.color}>{props.name}</Text>
      </Buttons>
    </ViewButton>
  );
}
