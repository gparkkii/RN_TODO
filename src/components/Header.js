import React from 'react';
import styled from 'styled-components';
import { BoldText, RegularText } from 'styles/typo';
import getToday from 'utils/getDateUtil';

const Header = ({ onPress, today }) => {
  return (
    <>
      <StyledHeader>
        <StyledButton onPress={onPress}>
          <BoldText fontSize="large">{getToday(today).Date}</BoldText>
          <RegularText fontSize="small">{getToday(today).Week}</RegularText>
        </StyledButton>
      </StyledHeader>
    </>
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

const StyledButton = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
`;
