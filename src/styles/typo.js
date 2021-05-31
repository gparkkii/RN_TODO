import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components';

const textSize = {
  xlarge: `${RFValue(24)}px`,
  large: `${RFValue(20)}px`,
  medium: `${RFValue(16)}px`,
  small: `${RFValue(14)}px`,
  xsmall: `${RFValue(12)}px`,
};

export const BoldText = styled.Text`
  /* font-family: 'NotoSansKR-Bold'; */
  font-size: ${props => textSize[props.fontSize]};
  color: ${({ theme }) => theme.textColor};
`;

export const MediumText = styled.Text`
  /* font-family: 'NotoSansKR-Medium'; */
  font-size: ${props => textSize[props.fontSize]};
  color: ${({ theme }) => theme.textColor};
`;

export const RegularText = styled.Text`
  /* font-family: 'NotoSansKR-Regular'; */
  font-size: ${props => textSize[props.fontSize]};
  color: ${({ theme }) => theme.textColor};
`;

export const LightText = styled.Text`
  /* font-family: 'NotoSansKR-Light'; */
  font-size: ${props => textSize[props.fontSize]};
  color: ${({ theme }) => theme.textColor};
`;

export const ErrorText = styled(BoldText)`
  color: red;
`;
