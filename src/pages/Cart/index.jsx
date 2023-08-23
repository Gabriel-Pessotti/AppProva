import React, {useCallback, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {
  ContainerGeral,
  Image,
  Price,
  Quantidade,
  TextTitle,
  Totals,
  Totalsprice,
  View,
  ViewChecout,
  Delete,
  ViewGeral,
  ViewGlobal,
  ViewHeader,
  ViewImage,
  ViewItens,
  ViewTotals,
  ViewTax,
  ViewFull,
} from './styled';
import TopHeader from '../../components/TopHeader';
import Button from '../../components/Button';

export default function Cart() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const Tax = 1.99;

  useFocusEffect(
    useCallback(() => {
      respStorage();
    }, []),
  );

  async function respStorage() {
    const cart = await AsyncStorage.getItem('cart');
    if (cart) {
      setData(JSON.parse(cart));
    }
  }

  function calcularTotal() {
    let total = 0;
    for (const item of data) {
      total += (item.value  * item.quantidade ) + Tax;
    }
    return total;
  }

  async function deleteCartItem(index) {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);

    // Atualize o AsyncStorage com os novos dados do carrinho
    await AsyncStorage.setItem('cart', JSON.stringify(updatedData));
  }

  return (
    <ContainerGeral>
      <ViewHeader>
        <TopHeader onPress={() => navigation.goBack('')} text="Cart" />
      </ViewHeader>
      <ViewGlobal>
        <ViewGeral
          data={data}
          numColumns={1}
           renderItem={({item}) => (
            <>
              <View>
                <ViewImage>
                  <Image
                    source={{
                      uri: `http://192.168.1.191:1337${item?.image?.data?.attributes.url}`,
                    }}
                  />
                </ViewImage>
                <TextTitle>{item?.name.slice(0, 18)}</TextTitle>
                <ViewFull><Quantidade>x {item?.quantidade}</Quantidade></ViewFull>
                <Price>R$ {item?.value}</Price>
    
              </View>
              <Delete onPress={() => deleteCartItem(item.id)}>
                <Ionicons name="trash-outline" size={24} color="#ff0000" />
              </Delete>
            </>
          )}
        />
      </ViewGlobal>
      <ViewChecout>
        <ViewItens>
          <Quantidade>{data.length} Items</Quantidade>
          <Quantidade>R$ {calcularTotal().toFixed(2)}</Quantidade>
        </ViewItens>
        <ViewTax>
          <Quantidade>Tax </Quantidade>
          <Quantidade>R$ {Tax}</Quantidade>
        </ViewTax>
        <ViewTotals>
          <Totals>Totals</Totals>
          <Totalsprice>{calcularTotal().toFixed(2)}</Totalsprice>
        </ViewTotals>
        <Button
          name="Checkout"
          background="#7140FD"
          // onPress={() => sendCart(data)}
        />
      </ViewChecout>
    </ContainerGeral>
  );
}
