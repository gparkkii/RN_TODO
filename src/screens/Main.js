import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrapper>
      <Text>TODO</Text>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.View`
  flex: 1;
  padding-top: 60px;
`;
