import React, { useEffect, useState } from 'react';
import { Appearance, Platform, StatusBar, useColorScheme } from 'react-native';
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './src/styles/theme';
import { defaultMode } from './src/context/ThemeContext';
import Main from './src/screens/Main';
import Header from './src/components/Header';

const App = () => {
  const [themeState, setThemeState] = useState(defaultMode);
  const setMode = mode => {
    setThemeState(mode);
  };

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode }}>
      <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
        <Container>
          <StatusBar
            barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
            translucent={true}
            backgroundColor="transparent"
          />
          <Scroll>
            <Header />
            <Main />
          </Scroll>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;

const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding-top: ${Platform.OS === 'android' ? '25px' : '0px'};
`;

const Scroll = styled.ScrollView`
  position: relative;
  display: flex;
  flex: 1;
`;
