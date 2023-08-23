import styled from 'styled-components/native';

export const ContainerGeral = styled.SafeAreaView`
  width: 100%;
  background: ${({theme}) => theme.backgorund.white};
`;
export const ViewHeader = styled.View`
  margin-top: 50px;
  align-items: center;
`;
export const ViewGlobal = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const ViewGeral = styled.FlatList`
  height: 800px;
`;
export const View = styled.View`
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

export const ViewFull = styled.View`

width: 20px;
position: absolute;
right: 130px;
margin-top: 30px;
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
export const Delete = styled.TouchableOpacity`
  width: 80px;
  height: 112px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 36px;
  position: absolute;
  right: 0px;
  background-color: ${({theme}) => theme.backgorund.whiteOff};
`;
export const ViewChecout = styled.View`
  width: 100%;
  height: 245px;
  position: absolute;
  bottom: 0px;
  border-radius: 32px 32px 0px 0px;
  background-color: ${({theme}) => theme.backgorund.whiteOff};
  flex-shrink: 0;
  margin-left: auto;
  margin-right: auto;
`;
export const ViewItens = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const ViewTax = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const Quantidade = styled.Text`
  color: ${({theme}) => theme.Text.gray};
  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.2px;
`;
export const ViewTotals = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
`;
export const Totals = styled.Text`
  color: ${({theme}) => theme.Text.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 17.6px;
`;
export const Totalsprice = styled.Text`
  color: ${({theme}) => theme.Text.black};
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
`;
