import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components';

const textSize = {
  large: `${RFValue(24)}px`,
  medium: `${RFValue(24)}px`,
  small: `${RFValue(18)}px`,
  xsmall: `${RFValue(16)}px`,
};

export const BoldText = styled.Text`
  /* font-family: 'NotoSansKR-Bold'; */
  font-size: ${props => textSize[props.fontSize]};
  color: ${props => props.theme.textColor};
`;

export const MediumText = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.textColor};
`;

export const RegularText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.textColor};
`;

export const LightText = styled.Text`
  font-family: 'NotoSansKR-Light';
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.textColor};
`;

export const ErrorText = styled(BoldText)`
  color: red;
`;
