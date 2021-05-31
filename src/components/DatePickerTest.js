import React from 'react';
import { Platform, Pressable, Text } from 'react-native';
import styled from 'styled-components';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerTest = ({ onPress, onChange, date }) => {
  return (
    <Container onPress={onPress}>
      <DateTimeView>
        {Platform.OS === 'ios' && (
          <Header>
            <Pressable onPress={onPress}>
              <Text>Done</Text>
            </Pressable>
          </Header>
        )}
        <RNDateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="spinner"
          onChange={onChange}
        />
      </DateTimeView>
    </Container>
  );
};

export default DateTimePickerTest;

const DateTimeView = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  bottom: 0;
  width: 100%;
`;

const Container = styled.Pressable`
  background-color: ${Platform.OS === 'ios' ? '#00000066' : 'transparent'};
  position: absolute;
  z-index: 99999;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
`;

const Header = styled.View`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: white;
  border-color: grey;
`;
