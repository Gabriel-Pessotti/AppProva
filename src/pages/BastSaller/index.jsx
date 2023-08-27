
import React, { useEffect, useState } from 'react';
import {
  ButtonAdd,
  ContainerGeral,
  Image,
  Price,
  TextTitle,
  View,
  ViewGlobal,
  ViewHeader,
  ViewImage,
} from './styled';
import TopHeader from '../../components/TopHeader';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native';

export default function BastSaller() {
  const navigation = useNavigation();
  const lodprod = 10
  const [produtos, setProdutos] = useState([]);
  const [page, setPage] = useState(10);


  async function getProduto() {
    try {
      const response = await api.get(
        `/produtos/?populate=*&articles?pagination[page]=1&pagination[pageSize]=54`
      );
      setProdutos(response.data.data)
    } catch (error) {
      console.error('Erro ao obter os produtos:', error);
    }
  }

  async function handleMore() {
    const moreResponse = await api.get( `/produtos/?populate=*&articles?pagination[page]=1&pagination[pageSize]=54`);
    const moreProducts = moreResponse.data.data;

    setProdutos(moreProducts);
    setPage((prevProductsToShow) => prevProductsToShow + lodprod);
  }

  useEffect(() => {
    getProduto();
  }, []); 

  return (
    <ContainerGeral>
      <ViewHeader>
        <TopHeader onPress={() => navigation.goBack()} text="All products" />
      </ViewHeader>
      <ViewGlobal>
      <FlatList
        data={produtos.slice(0, page)}
        numColumns={2}
        onEndReached={handleMore}
        onEndReachedThreshold={0.1}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        keyExtractor={(item, index) => item.id + index} // Usando item.id + index como chave única
        renderItem={({item}) => (
          <View onPress={() => navigation.navigate('Detail', item.id)}>
            <ViewImage>
              <Image
                source={{
                  uri: `http://192.168.0.95:1337${item?.attributes.image.data?.attributes.url}`,
                }}
              />
            </ViewImage>
            <TextTitle>{item?.attributes.name.slice(0, 18)}</TextTitle>
            <Price>R$ {item?.attributes.value}</Price>
            <ButtonAdd>
              <Ionicons name="add" size={26} color="#000" />
            </ButtonAdd>
          </View>
        )}
      />
    </ViewGlobal>
    </ContainerGeral>
  );
}
