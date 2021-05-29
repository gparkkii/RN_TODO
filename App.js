import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './src/styles/theme';
import Main from './src/screens/Main';
import Header from './src/components/Header';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <StatusBar translucent />
        <Scroll>
          <Header />
          <Main />
        </Scroll>
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.background};
`;

const Scroll = styled.ScrollView`
  position: relative;
  display: flex;
  flex: 1;
`;
