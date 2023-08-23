import styled from 'styled-components/native';

export const ContainerGeral = styled.SafeAreaView`
  width: 100%;
  background: ${({theme}) => theme.backgorund.white};
`;
export const ViewGlobal = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
export const ViewHeader = styled.View`
  margin-top: 50px;
  align-items: center;
`;
export const TitleText = styled.Text`
  color: ${({theme}) => theme.Text.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 17.6px;
`;
export const DescriptionText = styled.Text`
  color: ${({theme}) => theme.Text.grayligth};
  text-align: justify;
  font-size: 12px;
  font-weight: 400;
  line-height: 19.2px;
`;
export const Image = styled.Image`
  width: 327px;
  height: 311px;
  object-fit: contain;
`;
export const ViewTxt = styled.View`
  margin-top: 24px;
`;
export const ViewDescription = styled.ScrollView`
height: 200px;
`;
export const ViewImage = styled.View`
  margin-top: 36px;
  align-items: center;
  width: 100%;
`;
export const AddRemove = styled.View`
  flex-direction: row;
  background-color: blue;
`;
export const ViewAdd = styled.View`
  width: 120px;
  height: 48px;
  border-radius: 24px;
  flex-direction: row;
  background: ${({theme}) => theme.backgorund.whiteOff};
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
export const ButtonRemove = styled.TouchableOpacity`

`;
export const ButtonAdd = styled.TouchableOpacity`

`;
export const ViewPrice = styled.View`
`;
export const Price = styled.Text`
  color: ${({theme}) => theme.Text.black};
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
`;
export const ViewFooter = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 15px;
`;
export const TextValue = styled.Text`
font-size: 15px;
font-weight: 800;
`;
