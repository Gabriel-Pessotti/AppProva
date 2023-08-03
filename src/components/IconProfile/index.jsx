import React from "react";
import { ButtonIcon, Text, View, ViewIcon } from "./styled";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function IconProfile(props) {
  return (
    <View>
      <ViewIcon>
        <ButtonIcon onPress={props.onPress}>
         <Ionicons
                name={props.name}
                size={props.size}
                color={props.color}
              />
        </ButtonIcon>
        <Text>{props.text}</Text>
        </ViewIcon>
        <Ionicons
                name={props.nameR}
                size={props.sizeR}
                color={props.colorR}
        />

    </View>
  );
}