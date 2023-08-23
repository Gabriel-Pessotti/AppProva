import styled from 'styled-components/native';

export const ContainerGeral = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${({theme}) => theme.backgorund.white};
`;

export const ViewHeader = styled.View`
  margin-top: 50px;
  align-items: center;
  margin-bottom: 66px;
`;
export const ViewGlobal = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
export const ViewInput = styled.View`
  margin-bottom: 24px;
`;
export const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${({theme}) => theme.Borders.whiteLigth};
  text-align: left;
  font-size: 14px;
  border-radius: 16px;
  height: 60px;
  background-color: ${({theme}) => theme.backgorund.white};
  border-width: 3px;
  padding-left: 5px;
  color: ${({theme}) => theme.Text.purple};
`;

export const ViewGeral = styled.FlatList`
  height: 570px;
  margin-top: 20px;
`;
export const View = styled.TouchableOpacity`
  width: 269px;
  height: 112px;
  background-color: ${({theme}) => theme.backgorund.whiteOff};
  border-radius: 24px;
  margin-right: 10px;
  margin-top: 36px;
`;
export const ViewImage = styled.View`
  height: 122px;
  width: 40%;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 110px;
`;
export const TextTitle = styled.Text`
  color: ${({theme}) => theme.Text.black};
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  position: absolute;
  margin-top: 10px;
  right: 30px;
  
`;
export const Price = styled.Text`
  color: ${({theme}) => theme.Text.purple};
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  right: 70px;
  bottom: 15px;
`;
