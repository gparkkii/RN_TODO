import React, { useEffect, useState } from 'react';
import { Appearance, Platform, StatusBar, Text, View } from 'react-native';
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './src/styles/theme';
import { defaultMode } from './src/context/ThemeContext';
import Main from './src/screens/Main';
import Header from './src/components/Header';
import DateTimePickerTest from './src/components/DatePickerTest';
import taskData from './src/utils/taskData';

const App = () => {
  const [themeState, setThemeState] = useState(defaultMode);
  const [isLoading, setIsLoading] = useState(true);
  const [isPicked, setIsPicked] = useState(false);
  const [date, setDate] = useState(new Date());
  const { Tasks, setTasks } = taskData();

  const setMode = mode => {
    setThemeState(mode);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const fetchLoading = async () => {
    await setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme);
    });
    fetchLoading();
  }, []);

  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode }}>
      <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
        {isLoading ? (
          <View>
            <Text>Loading</Text>
          </View>
        ) : (
          <Container>
            <StatusBar
              barStyle={
                themeState === 'dark' ? 'light-content' : 'dark-content'
              }
              translucent={true}
              backgroundColor="transparent"
            />
            <Scroll>
              <Header
                onPress={() => {
                  setIsPicked(!isPicked);
                }}
                today={date}
              />
              <Main taskList={Tasks} />
            </Scroll>
          </Container>
        )}
        {isPicked && (
          <DateTimePickerTest
            onPress={() => {
              setIsPicked(!isPicked);
            }}
            onChange={onChange}
            date={date}
          />
        )}
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
  min-height: 100%;
  height: 100%;
`;
