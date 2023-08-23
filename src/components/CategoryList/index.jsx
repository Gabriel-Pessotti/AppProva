/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {Button, ButtonSwap, ButtonTitle, ViewFlatCategory} from './styled';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import api from '../../services/api';
import { useCategory } from '../../hook';

export function CategoryList() {
  const [categories, setCategories] = useState([]);
  const { selectedCategory, setSelectedCategory } = useCategory();
  const navigation = useNavigation();
  useEffect(() => {
    getCateg();
  }, []);

  async function getCateg() {
    const response = await api.get('/categorias/?populate=*');
    setCategories(response.data.data);
  }
  // console.log(selected);
  return (
    <ViewFlatCategory>
      <ButtonSwap>
        <Ionicons name="swap-horizontal-outline" size={26} color="#000" />
      </ButtonSwap>
      <FlatList
        horizontal={true}
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <>
            <Button
              onPress={() => {
                setSelectedCategory(item?.attributes.name); // Atualize o valor selecionado no contexto
                navigation.navigate('Search', { item: item?.attributes.name });
              }}
              isSelected={selectedCategory === item?.attributes.name}
            >
              <ButtonTitle>{item?.attributes.name}</ButtonTitle>
            </Button>
          </>
        )}
      />
    </ViewFlatCategory>
  );
}
