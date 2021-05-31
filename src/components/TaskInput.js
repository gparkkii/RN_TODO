import React from 'react';
import styled from 'styled-components';
import styles from 'styles/boxShadow';
import PropTypes from 'prop-types';

const TaskInput = ({
  placeholder,
  onChangeText,
  onSubmitEditing,
  onBlur,
  value,
}) => {
  return (
    <StyledInput
      returnKeyType="done"
      autoCapitalize="none"
      autoCorrect={false}
      maxLength={50}
      style={styles.innerShadow}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      value={value}
    />
  );
};

export default TaskInput;

TaskInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const StyledInput = styled.TextInput`
  width: 100%;
  height: 52px;
  margin-bottom: 10px;
  padding: 15px 20px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.contentBox};
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
`;
