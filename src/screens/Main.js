import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components';
import TaskInput from 'components/TaskInput';
import TaskContent from 'components/TaskContent';

const Main = ({ Tasks, setTasks }) => {
  const [Value, setValue] = useState('');

  const onTaskHandler = text => {
    setValue(text);
  };

  const onSaveTask = async tasks => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks), () => {
        console.log('todo 저장완료 :', tasks);
      });
      setTasks(tasks);
    } catch (e) {
      console.error(e);
    }
  };

  const onAddTask = () => {
    const ID = Date.now().toString();

    const newTask = {
      [ID]: {
        id: ID,
        text: Value,
        completed: false,
      },
    };
    setValue('');
    setTasks({ ...Tasks, ...newTask });

    onSaveTask({ ...Tasks, ...newTask });

    alert(`새로운 할 일을 추가했습니다 : ${Value}`);
  };

  const onDeleteTask = id => {
    // const currentTask = Object.values(Tasks).filter(todo => todo.id !== id);
    const currentTask = { ...Tasks };
    delete currentTask[id];
    setTasks(currentTask);
    onSaveTask(currentTask);
  };

  const onCompleteTask = id => {
    const currentTask = { ...Tasks };
    currentTask[id].completed = !currentTask[id].completed;
    setTasks(currentTask);
    onSaveTask(currentTask);
  };

  const onEditTask = editedTask => {
    const currentTask = { ...Tasks };
    currentTask[editedTask.id] = editedTask;
    setTasks(currentTask);
    onSaveTask(currentTask);
  };

  const onBlurHandler = () => {
    setValue('');
  };

  return (
    <MainWrapper>
      <TaskInput
        value={Value}
        onChangeText={onTaskHandler}
        onSubmitEditing={onAddTask}
        onBlur={onBlurHandler}
        placeholder="+ 오늘 할 일을 입력해주세요"
      />
      <ContentList>
        {Object.values(Tasks)
          .reverse()
          .map(content => (
            <TaskContent
              key={content.id}
              content={content}
              onDelete={onDeleteTask}
              onComplete={onCompleteTask}
              onEdit={onEditTask}
            />
          ))}
      </ContentList>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 80px 20px 0px 20px;
`;

const ContentList = styled.ScrollView`
  flex: 1;
`;
