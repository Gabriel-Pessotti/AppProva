import styled from 'styled-components/native';

export const ContainerGeral = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background: ${({theme}) => theme.backgorund.white};
`;
export const ViewGlobal = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
export const ViewHeader = styled.View`
margin-top: 50px;
align-items: center;
`;
export const TextBold = styled.Text`
color: ${({theme}) => theme.Text.black};
font-size: 17px;
font-weight: 700;
line-height: 28.8px;
margin-top: 35px;
`;
export const ViewButtonFooter = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;