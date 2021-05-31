import React from 'react';
import styled from 'styled-components';
import { BoldText, RegularText } from 'styles/typo';
import getToday from 'utils/getDateUtil';

const Header = () => {
  return (
    <StyledHeader>
      <BoldText fontSize="large">{getToday().Date}</BoldText>
      <RegularText fontSize="small">{getToday().Week}</RegularText>
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
