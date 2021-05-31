import React, { useEffect, useState } from 'react';
import { Appearance, Platform, StatusBar, Text, View } from 'react-native';
import styled, { ThemeContext, ThemeProvider } from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';
import { darkTheme, lightTheme } from './src/styles/theme';
import { defaultMode } from './src/context/ThemeContext';
import Main from './src/screens/Main';
import Header from './src/components/Header';
import DateTimePicker from './src/components/DateTimePicker';

const App = () => {
  const [themeState, setThemeState] = useState(defaultMode);
  const [isLoading, setIsLoading] = useState(true);
  const [isPicked, setIsPicked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [Tasks, setTasks] = useState({
    1: { id: '1', text: '공부', completed: true },
    2: { id: '2', text: '장고', completed: false },
    3: { id: '3', text: '파이썬', completed: false },
    4: { id: '4', text: '리액트 네이티브', completed: false },
  });

  const setMode = mode => {
    setThemeState(mode);
  };

  const onChange = (event, selectedDate) => {
    setIsPicked(Platform.OS === 'ios');
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onLoadTask = async () => {
    try {
      const loadedTasks = await AsyncStorage.getItem('tasks');
      if (loadedTasks === null) {
        setTasks(Tasks);
      } else {
        setTasks(JSON.parse(loadedTasks));
      }
    } catch (error) {
      console.error(error);
    }
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
    onLoadTask();
    fetchLoading();
  }, []);

  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode }}>
      <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
        {isLoading ? (
          <Loading>
            <LoadingText>RN_TODO</LoadingText>
          </Loading>
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
              <Main Tasks={Tasks} setTasks={setTasks} />
            </Scroll>
          </Container>
        )}
        {isPicked && (
          <DateTimePicker
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

const Loading = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.textColor};
`;
