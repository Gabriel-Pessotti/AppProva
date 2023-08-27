import React, {useEffect, useState} from 'react';
import {
  ButtonSeach,
  ButtonViewAll,
  ContainerGeral,
  Image,
  Text,
  TextLocation,
  TextStrong,
  TextViewAll,
  ViewGlobal,
  ViewHeader,
  ViewHeaderText,
  ViewLocation,
  ViewLogo,
  ViewTexts,
} from './styled';
import LogoHome from '../../assets/svg/LogoHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CardList} from '../../components/CardList';
import {useNavigation} from '@react-navigation/native';
import {CategoryList} from '../../components/CategoryList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const navigation = useNavigation();
  const [name, setName] = useState()
  useEffect(() => {
    loadStorage();
  }, [name]);
  async function loadStorage() {
    const item = await AsyncStorage.getItem('name')
    setName(item)
  }

  return (
    <ContainerGeral>
      <ViewHeader>
        <ViewHeaderText>
          <TextLocation>Location</TextLocation>
          <Text>{name}</Text>
        </ViewHeaderText>
        <ViewLocation>
          <ButtonSeach onPress={() => navigation.navigate('Search')}>
            <Ionicons name="search-outline" size={24} color="#000" />
          </ButtonSeach>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </ViewLocation>
      </ViewHeader>
      <ViewLogo>
        <LogoHome />
        <Image source={require('../../assets/png/RacaoLogo.png')} />
      </ViewLogo>
      <ViewGlobal>
        <ViewTexts>
          <TextStrong>Category</TextStrong>
          <ButtonViewAll>
            <TextViewAll>View All</TextViewAll>
          </ButtonViewAll>
        </ViewTexts>
        <CategoryList />
        <ViewTexts>
          <TextStrong>Best Seller</TextStrong>
          <ButtonViewAll onPress={() => navigation.navigate('BastSaller')}>
            <TextViewAll>View All</TextViewAll>
          </ButtonViewAll>
        </ViewTexts>
        <CardList />
      </ViewGlobal>
    </ContainerGeral>
  );
}
