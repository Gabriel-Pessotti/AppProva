import styled from 'styled-components/native';

export const ViewButton = styled.View`

`;
export const Buttons = styled.TouchableOpacity`
  background-color: ${props => props.background || 'transparent'};
  border-color: ${props => props.border || '#ED1B24'};
  border-width: ${props => (props.border ? '1px' : '0px')};
  width: 100%;
  height: 60px;
  border-radius: 30.5px;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text`
  text-align: center;
  color: ${props => (props.color || 'white')};
  font-weight: 600;
  font-size: 18px;
  font-style: normal;
`;