import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header_text};
  border-radius: 15px;
  padding: 10px 22px 22px;
  margin-top: ${RFValue(98)}px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 15px;
  padding: 10px 22px;
  margin-top: ${RFValue(12)}px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.sans_bold};
  font-size: ${RFValue(16)}px;
`;

export const DataConteiner = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 10px 0;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${RFValue(16)}px;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: ${RFValue(16)}px;
`;
