import React from "react";
import { ButtonIcon, Text, ViewTop } from "./styled";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TopHeader(props) {
  return (
    <ViewTop>
        <ButtonIcon onPress={props.onPress}>
         <Ionicons
                name="chevron-back-sharp"
                size={24}
                color={"black"}
              />
        </ButtonIcon>
        <Text>{props.text}</Text>
    </ViewTop>
  );
}

