import styled from 'styled-components/native';

export const ContainerGeral = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${({theme}) => theme.backgorund.white};
`;
export const ViewHeader = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewHeaderText = styled.View``;

export const TextLocation = styled.Text`
  color: ${({theme}) => theme.Text.grayligth};
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
`;
export const Text = styled.Text`
  color: ${({theme}) => theme.Text.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
`;

export const ViewLocation = styled.View`
  flex-direction: row;
  gap: 15px;
`;

export const ButtonSeach = styled.TouchableOpacity``;

export const ViewLogo = styled.View`
  align-items: center;
  margin-top: 30px;
  justify-content: center;
`;

export const Image = styled.Image`
  position: absolute;
  left: 30px;
`;
export const ViewGlobal = styled.View`
  width: 90%;
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
`;

export const ViewTexts = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextStrong = styled.Text`
  color: ${({theme}) => theme.Text.black};
  font-size: 16px;
  font-weight: 700;
  line-height: 28.8px;
`;
export const TextViewAll = styled.Text`
  color: ${({theme}) => theme.Text.purple};
  font-size: 12px;
  font-weight: 500;
  line-height: 19.2px;
`;

export const ButtonViewAll = styled.TouchableOpacity``;


