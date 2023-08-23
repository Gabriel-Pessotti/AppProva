import styled from 'styled-components/native';

export const View = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 20px;

`;
export const ButtonIcon = styled.TouchableOpacity`
background-color: ${({theme}) => theme.backgorund.whiteOff};
border-radius: 55px;
width: 35px;
height: 35px;
justify-content: center;
align-items: center;
`;

export const Text = styled.Text`
color:  ${({theme}) => theme.Text.black};
font-size: 14px;
font-weight: 400;
line-height: 21px;  
`;
export const ViewIcon = styled.View`
gap: 10px;
flex-direction: row;
align-items: center;
`;