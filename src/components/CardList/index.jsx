import React,{useEffect, useState} from 'react';
import {  ButtonAdd, Image, Price, TextTitle, View, ViewFlatBastSaller, ViewImage } from './styled';
import { FlatList } from 'react-native';
import api from '../../services/api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export function CardList() {
  const navigation = useNavigation();
  const[produtos,setProdutos]=useState([])

async function getProduto() {
  const response = await api.get('/produtos/?populate=*&filters[BastSaler][$eq]=true');
  
  setProdutos(response.data.data);
  console.log(response.data.data);
}

useEffect(() => {
  getProduto();
}, []);
  return (
    <ViewFlatBastSaller>
    <FlatList
    showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={produtos}
      // numColumns={2}
      // columnWrapperStyle={{ justifyContent: 'space-around' }}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        // console.log(item),
        <View onPress={()=> navigation.navigate("Detail", item.id)}>
          <ViewImage>
            <Image source={{ uri:`http://192.168.1.192:1337${item?.attributes.image.data?.attributes.url}`}}/>
          </ViewImage>
          <TextTitle>{item?.attributes.name.slice(0, 18)}</TextTitle>
          <Price>R$ {item?.attributes.value}</Price>
          <ButtonAdd>
          <Ionicons name="add" size={26} color="#000" />
          </ButtonAdd>
        </View>
      )}
    />
  </ViewFlatBastSaller>
  );
}
