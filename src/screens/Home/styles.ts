import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { MaterialIcons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ImageBackground, Image as ImageBasic } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(40)}px;
`;

export const UserWrapper = styled.View`
  flex-direction: row;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const CarInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTextWrapper = styled.View`
  margin-left: ${RFValue(26)}px;
`;

export const CarPlate = styled.Text`
  color: ${({ theme }) => theme.colors.header_text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(24)}px;
`;

export const LogoutButton = styled.View``;

export const LogoutIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;

`;

export const ImageBack = styled(ImageBackground)`
  justify-content: center;
  width: 70%;
  height: 72%;
`;

export const Image = styled(ImageBasic)``;

