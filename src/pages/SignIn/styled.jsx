import styled from 'styled-components/native';

export const ContainerGeral = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${({theme})=>theme.backgorund.white};
  align-items: center;
`;
export const ViewGlobal = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
export const ViewHeader = styled.View`
  margin-top: 50px; 
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  gap: 32px;
`;
export const Title = styled.Text`
color: ${({theme})=>theme.Text.black};
font-size: 40px;
font-weight: 600;
line-height: 56px;
`;
export const SubTitle = styled.Text`
color: ${({theme})=>theme.Text.grayligth};
font-size: 14px;
font-weight: 400;
line-height: 21px; 
`;

export const ViewInput = styled.View`
  margin-top: 30px;
  gap: 16px;
`;
export const ViewSenha = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;
export const ButtonSenha = styled.TouchableOpacity`
  width: 40px;
  height: 20px;
  position: absolute;
  right: 3px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  color: ${({theme})=>theme.Text.black};
`;
export const ViewFooterr = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  height: 60px;
`;
export const TextAccount = styled.Text`
  color: ${({theme})=>theme.Text.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;
export const ButtonLogin = styled.TouchableOpacity``;

export const TextLogin = styled.Text`
  color: ${({theme})=>theme.Text.purple};
  font-size: 14px;
  font-weight: 700;
`;
export const ViewButton = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 20px;
`;
