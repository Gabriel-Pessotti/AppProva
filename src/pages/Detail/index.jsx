/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {ContainerGeral, DescriptionText, Image, TitleText, ViewGlobal, ViewHeader, ViewImage, ViewTxt} from './styled';
import api from '../../services/api';
import TopHeader from '../../components/TopHeader';
import { useNavigation } from '@react-navigation/native';



export default function Detail({route}) {
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const [img, setImg] = useState();
    useEffect(()=> {
        getApi()
    },[ ])
  async function getApi() {
    const resp = await api.get(`/produtos/${route?.params}/?populate=*`);
    setData(resp.data.data.attributes)
    setImg(resp.data.data.attributes?.image.data.attributes.url)
    // console.log(resp.data.data.attributes.image.data.attributes.url)
  }
  return (
    <ContainerGeral>
      <ViewHeader>
      <TopHeader
        onPress={()=> navigation.goBack()}
        text="Product Detail"
        />
      </ViewHeader>
      <ViewGlobal>
        <ViewImage>
        <Image source={{ uri:`http://192.168.1.192:1337${img}`}}/>
        </ViewImage>
        <ViewTxt>
        <TitleText>{data.name}</TitleText>
        <DescriptionText>{data.description}</DescriptionText>
        </ViewTxt>

      </ViewGlobal>
    </ContainerGeral>
  );
}
