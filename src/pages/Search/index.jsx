/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react';
import {
  ContainerGeral,
  Image,
  Input,
  Price,
  TextTitle,
  View,
  ViewGeral,
  ViewGlobal,
  ViewHeader,
  ViewImage,
  ViewInput,
} from './styled';
import TopHeader from '../../components/TopHeader';
import {useNavigation} from '@react-navigation/native';
import {CategoryList} from '../../components/CategoryList';
import api from '../../services/api';
import {useCategory} from '../../hook';

export default function Search() {
  const navigation = useNavigation();
  const {selectedCategory} = useCategory();

  const [search, setSearch] = useState();
  const [products, setProducts] = useState([]);
  const debounceDelay = 300;

  useEffect(() => {
    getApi();
  }, [selectedCategory]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (search?.length > 1) {
        getApi();
      }
    }, debounceDelay);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [search]);

  async function getApi() {
    try {
      let url = '/produtos/?populate=*';
      if (search) url = `${url}&filters[name][$containsi]=${search}`;
      if (selectedCategory)
        url = `${url}&filters[categoria][id][$eq]=${selectedCategory}`;
      console.log(url);
      const resp = await api.get(url);
      console.log(search);
      setProducts(resp.data.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }

  return (
    <ContainerGeral>
      <ViewHeader>
        <TopHeader onPress={() => navigation.goBack('')} text="Search" />
      </ViewHeader>
      <ViewGlobal>
        <ViewInput>
          <Input
            placeholder="Search your Product"
            value={search}
            onChangeText={text => setSearch(text)}
          />
        </ViewInput>
        <CategoryList />
        <ViewGeral
          data={products}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View onPress={() => navigation.navigate('Detail', item.id)}>
              <ViewImage>
                <Image
                  source={{
                    uri: `http://192.168.0.95:1337${item?.attributes.image?.data?.attributes.url}`,
                  }}
                />
              </ViewImage>
              <TextTitle>{item?.attributes.name.slice(0, 18)}</TextTitle>
              <Price>R$ {item?.attributes.value}</Price>
            </View>
          )}
        />
      </ViewGlobal>
    </ContainerGeral>
  );
}
