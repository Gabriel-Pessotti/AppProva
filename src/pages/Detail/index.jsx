/* eslint-disable no-undef */
import React, {useContext, useEffect, useState} from 'react';
import {
  ButtonAdd,
  ButtonRemove,
  ContainerGeral,
  DescriptionText,
  Image,
  Price,
  TextValue,
  TitleText,
  ViewAdd,
  ViewDescription,
  ViewFooter,
  ViewGlobal,
  ViewHeader,
  ViewImage,
  ViewPrice,
  ViewTxt,
} from './styled';
import api from '../../services/api';
import TopHeader from '../../components/TopHeader';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import {AuthContext} from '../../hook';

export default function Detail({route}) {
  const {cartAdd} = useContext(AuthContext);
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const [img, setImg] = useState();
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const itemPrice = data.value * count;
    setTotalPrice(itemPrice);
    getApi();
  }, [count, data.value]);
  async function getApi() {
    const resp = await api.get(`/produtos/${route?.params}/?populate=*`);
    setData(resp.data.data.attributes);
    setImg(resp.data.data.attributes?.image.data.attributes.url);
  }
  async function sendCart(i) {
    await cartAdd({...i, quantidade: count});
  }
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <ContainerGeral>
      <ViewHeader>
        <TopHeader onPress={() => navigation.goBack()} text="Product Detail" />
      </ViewHeader>
      <ViewGlobal>
        <ViewImage>
          <Image source={{uri: `http://192.168.0.95:1337${img}`}} />
        </ViewImage>
        <ViewTxt>
          <TitleText>{data.name}</TitleText>
          <ViewDescription showsVerticalScrollIndicator={false}>
            <DescriptionText>{data.description}</DescriptionText>
          </ViewDescription>
        </ViewTxt>
        <ViewFooter>
          <ViewAdd>
            <ButtonRemove onPress={handleRemove}>
              <Ionicons name="remove-outline" size={24} color={'black'} />
            </ButtonRemove>
            <TextValue>{count}</TextValue>
            <ButtonAdd onPress={handleAdd}>
              <Ionicons name="add" size={24} color={'black'} />
            </ButtonAdd>
          </ViewAdd>
          <ViewPrice>
            <Price>R$ {totalPrice.toFixed(2)}</Price>
          </ViewPrice>
        </ViewFooter>
        <Button
          name="Add to Cart"
          background="#7140FD"
          onPress={() => {
            sendCart(data);
            navigation.navigate('Cart');
          }}
        />
      </ViewGlobal>
    </ContainerGeral>
  );
}
