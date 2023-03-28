import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'alcohol' | 'gasoline' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => 
    type === 'gasoline' ? theme.colors.secondary : theme.colors.header_text};

  width: ${RFValue(300)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
  align-items: center;
  border-radius: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'gasoline' ? theme.colors.card_text_2 : theme.colors.card_text_1};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;

export const Consumption = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(10)}px;
`;

export const ConsumptionLabel = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'gasoline' ? theme.colors.card_text_2 : theme.colors.card_text_1};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  margin-right: 15px;
`;

export const ConsumptionValue = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'gasoline' ? theme.colors.card_text_2 : theme.colors.card_text_1};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: ${RFValue(16)}px;
`;

export const Cost = styled.View`
  flex-direction: row;
  margin-bottom: ${RFValue(12)}px;
`;

export const CostLabel = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'gasoline' ? theme.colors.card_text_2 : theme.colors.card_text_1};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  margin-right: 30px;
`;

export const CostValue = styled.Text<TypeProps>`
  color: ${({ theme, type }) => 
    type === 'gasoline' ? theme.colors.card_text_2 : theme.colors.card_text_1};
  font-family: ${({ theme }) => theme.fonts.semi_bold};
  font-size: ${RFValue(16)}px;
`;
