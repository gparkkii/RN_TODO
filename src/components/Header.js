import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components';
import { BoldText } from 'styles/typo';

const Header = () => {
  return (
    <StyledHeader>
      <BoldText fontSize="large">TODAY</BoldText>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.View`
  position: absolute;
  z-index: 99999;
  top: 0;
  right: 0;
  left: 0;
  height: 60px;
  align-items: center;
  justify-content: center;
`;
