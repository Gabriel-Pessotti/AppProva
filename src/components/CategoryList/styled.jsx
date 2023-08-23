import styled from 'styled-components/native';

export const ViewFlatCategory = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-left: 12px;
`;

export const ButtonSwap = styled.TouchableOpacity`
  width: 47px;
  height: 47px;
  border-radius: 16px;
  background-color: ${({theme}) => theme.backgorund.whiteOff};
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 14px 20px;
  align-items: flex-start;
  border-radius: 16px;
  background-color: ${props => (props.isSelected ? '#7140FD' : '#F8F8F8')};  
  margin-left: 12px;
`;

export const ButtonTitle = styled.Text``;
