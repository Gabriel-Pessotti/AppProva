import styled from 'styled-components/native';

export const ViewFlatBastSaller = styled.View`

`;
export const ButtonCard = styled.TouchableOpacity`

`;
export const View = styled.TouchableOpacity`
  width: 156px;
  height: 210px;
  background-color: ${({theme}) => theme.backgorund.whiteOff};
  border-radius: 20px;
  margin-right: 10px;
`;
export const ViewImage = styled.View`
height: 75%;
width: 80%;
justify-content: center;
align-items: center;

`;
export const TextTitle = styled.Text`
  color: ${({theme}) => theme.Text.black};
  font-size: 12px;
  font-weight: 400;
  line-height: 19.2px;
  position: absolute;
  bottom: 37px;
`;
export const Price = styled.Text`
  color: ${({theme}) => theme.Text.black};
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  position: absolute;
  bottom: 15px;
`;
export const Image = styled.Image`
width: 142px;
height: 100%;

`;
export const ButtonAdd = styled.TouchableOpacity`
width: 30px;
height: 30px;
background-color: ${({theme}) => theme.backgorund.purple};
border-radius: 16px;
align-items: center;
justify-content: center;
position: absolute;
right: 15px;
bottom: 12px;
`;
