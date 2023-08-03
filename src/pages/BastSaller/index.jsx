/* eslint-disable no-undef */
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
  const [produtos, setProdutos] = useState([]);
  const [offset, setOffSet] = useState(0);
  console.log(offset);

  async function getProduto() {
    try {
      const response = await api.get(
        `/produtos/?populate=*&pagination[pageSize]=${10}&pagination[offset]=${offset}`
      );
      console.log(response.data.data)

      if (offset === 0) {
        setProdutos(response.data.data);
      } else {
        setProdutos(i => [...i, ...response.data.data]);
      }
    } catch (error) {
      console.error('Erro ao obter os produtos:', error);
    }
  }

  useEffect(() => {
    getProduto();
  }, [offset]); // Adicione o offset como dependência do useEffect para executar a chamada sempre que o offset mudar

  const handleMore = () => {
    setOffSet(offset => offset + 1); // Use a função de atualização do estado para calcular o novo offset
  };

  return (
    <ContainerGeral>
      <ViewHeader>
        <TopHeader onPress={() => navigation.goBack()} text="Settings Page" />
      </ViewHeader>
      <ViewGlobal>
      <FlatList
        data={produtos}
        numColumns={2}
        onEndReached={handleMore}
        onEndReachedThreshold={0.2}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        keyExtractor={(item, index) => item.id + ':' + index} // Usando item.id + index como chave única
        renderItem={({item}) => (
          <View onPress={() => navigation.navigate('Detail', item.id)}>
            <ViewImage>
              <Image
                source={{
                  uri: `http://192.168.1.192:1337${item?.attributes.image.data?.attributes.url}`,
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
