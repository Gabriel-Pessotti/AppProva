import React, {useContext, useEffect, useState} from 'react';
import {
  ButtonAdd,
  Image,
  Price,
  TextTitle,
  View,
  ViewFlatBastSaller,
  ViewImage,
} from './styled';
import {FlatList} from 'react-native';
import api from '../../services/api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../hook';

export function CardList() {
  const navigation = useNavigation();
  const {cartAdd} = useContext(AuthContext);
  const [count, setCount] = useState(1);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getProduto();
  }, []);

  async function getProduto() {
    const response = await api.get(
      '/produtos/?populate=*&filters[BastSaler][$eq]=true',
    );

    setProdutos(response.data.data);
  }

  async function sendCart(i) {
    setCount(count + 1);
    await cartAdd({...i, quantidade: 1});

  }


  return (
    <ViewFlatBastSaller>
      <>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={produtos}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View onPress={() => navigation.navigate('Detail', item.id)}>
                <ViewImage>
                  <Image
                    source={{
                      uri: `http://192.168.1.191:1337${item?.attributes.image?.data?.attributes.url}`,
                    }}
                    onError={() => console.log('A imagem falhou ao carregar')}
                  />
                </ViewImage>
                <TextTitle>{item?.attributes.name.slice(0, 18)}</TextTitle>
                <Price>R$ {item?.attributes.value}</Price>
                <ButtonAdd onPress={() => sendCart(item?.attributes)}>
                  <Ionicons name="add" size={26} color="#000" />
                </ButtonAdd>
              </View>
            );
          }}
        />
      </>
    </ViewFlatBastSaller>
  );
}
