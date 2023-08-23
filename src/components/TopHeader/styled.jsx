import styled from 'styled-components/native';

export const ViewTop = styled.View`
width: 100%;
justify-content: center;
flex-direction: row;
`;
export const ButtonIcon = styled.TouchableOpacity`
position: absolute;
left: 10px;
`;

export const Text = styled.Text`
color: ${({theme}) => theme.Text.black};
font-size: 17px;
font-weight: 700;
line-height: 22.05px;  
`;


