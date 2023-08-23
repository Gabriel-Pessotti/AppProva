import styled from 'styled-components/native'

export const View = styled.View`
  width: 100%;
`
export const TextInput = styled.TextInput`
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

export const TextError = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.Text.red};
  font-weight: bold;

`