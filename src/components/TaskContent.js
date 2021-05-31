import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconButton from 'components/IconButton';
import { images } from 'styles/images';
import EditInput from './EditInput';

const TaskContent = ({ content, onDelete, onComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [EditText, setEditText] = useState(content.text);

  const onEditHandler = () => {
    setIsEditing(!isEditing);
  };

  const onEditSubmit = () => {
    if (isEditing) {
      const EditedTask = { ...content, text: EditText };
      setIsEditing(!isEditing);
      onEdit(EditedTask);
    }
  };

  const onBlurHandler = () => {
    setIsEditing(!isEditing);
    setEditText(content.text);
  };

  return (
    <TaskWrapper completed={content.completed}>
      {isEditing ? (
        <>
          <EditInput
            value={EditText}
            onChangeText={text => setEditText(text)}
            onSubmitEditing={onEditSubmit}
            onBlur={onBlurHandler}
          />
          <IconButton
            id={content.id}
            onPress={onEditHandler}
            completed={content.completed}
            iconType={images.cancel}
          />
        </>
      ) : (
        <>
          <IconButton
            id={content.id}
            onPress={onComplete}
            completed={content.completed}
            iconType={content.completed ? images.completed : images.unCompleted}
          />
          <Task completed={content.completed}>{content.text}</Task>
          {content.completed || (
            <IconButton
              id={content.id}
              onPress={onEditHandler}
              completed={content.completed}
              iconType={images.edit}
            />
          )}
          <IconButton
            id={content.id}
            onPress={onDelete}
            completed={content.completed}
            iconType={images.delete}
          />
        </>
      )}
    </TaskWrapper>
  );
};

export default TaskContent;

TaskContent.propTypes = {
  content: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

const TaskWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 56px;
  padding: 0px 4px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: ${({ theme, completed }) =>
    completed ? theme.completedBox : theme.taskColor};
`;

const Task = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${({ theme, completed }) =>
    completed ? theme.completedText : theme.textColor};
  text-decoration-line: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
`;
