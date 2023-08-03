/* eslint-disable no-undef */
import React from 'react';
import {
  ContainerGeral,
  ViewGlobal,
  ViewHeader,
} from './styled';
import TopHeader from '../../components/TopHeader';
import { useNavigation } from '@react-navigation/native';


export default function Search() {
    const navigation = useNavigation();
  return (
    <ContainerGeral>
      <ViewHeader>
        <TopHeader
        onPress={()=> navigation.navigate("Home")}
        text="Search"
        />
      </ViewHeader>
      <ViewGlobal>


      </ViewGlobal>
    </ContainerGeral>
  );
}