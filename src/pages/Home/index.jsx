/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  Button,
  ButtonSeach,
  ButtonSwap,
  ButtonTitle,
  ButtonViewAll,
  ContainerGeral,
  Image,
  Teexto,
  Text,
  TextLocation,
  TextStrong,
  TextViewAll,
  ViewFlatBastSaller,
  ViewFlatCategory,
  ViewGlobal,
  ViewHeader,
  ViewHeaderText,
  ViewLocation,
  ViewLogo,
  ViewTexts,
} from './styled';
import LogoHome from '../../assets/svg/LogoHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native';
import api from '../../services/api';
import {CardList} from '../../components/CardList';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(0);

  async function getCateg() {
    const response = await api.get('/categorias/?populate=*');
    setCategories(response.data.data);
  }

  useEffect(() => {
    getCateg();
  }, []);

  return (
    <ContainerGeral>
      <ViewHeader>
        <ViewHeaderText>
          <TextLocation>Location</TextLocation>
          <Text>Jebres, Surakarta</Text>
        </ViewHeaderText>
        <ViewLocation>
          <ButtonSeach onPress={()=> navigation.navigate("Search")}>
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
        <ViewFlatCategory>
          <ButtonSwap>
            <Ionicons name="swap-horizontal-outline" size={26} color="#000" />
          </ButtonSwap>
          <FlatList
            horizontal={true}
            data={categories}
            // numColumns={2}
            // columnWrapperStyle={{ justifyContent: 'space-around' }}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Button
                onPress={() => getCateg(item?.attributes.name)}
                isSelected={setSelected === item?.attributes.name}>
                <ButtonTitle>{item?.attributes.name}</ButtonTitle>
              </Button>
            )}
          />
        </ViewFlatCategory>
        <ViewTexts>
          <TextStrong>Best Seller</TextStrong>
          <ButtonViewAll onPress={()=> navigation.navigate("BastSaller")}>
            <TextViewAll>View All</TextViewAll>
          </ButtonViewAll>
        </ViewTexts>
        <CardList />
      </ViewGlobal>
    </ContainerGeral>
  );
}
