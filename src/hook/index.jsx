import React, {createContext, useContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();
const CategoryContext = createContext();

const AuthProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  async function cartAdd(item) {
    const cartCopy = [...cart];
    const duplicated = cartCopy.findIndex(
      i => i.image.data.id === item.image.data.id,
    );

    if (duplicated !== -1) {
      cartCopy[duplicated] = item;
    } else {
      cartCopy.push(item);
    }
    cartSave(cartCopy);
  }

  async function cartSave(newCart) {
    setCart(newCart);
    await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  }

  return (
    <AuthContext.Provider value={{cartAdd, cartSave}}>
      {children}
    </AuthContext.Provider>
  );
};
export function CategoryProvider({children}) {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <CategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryContext);
}

export default AuthProvider;
