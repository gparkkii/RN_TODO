import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EditInput = ({ onChangeText, onSubmitEditing, onBlur, value }) => {
  return (
    <StyledInput
      returnKeyType="done"
      autoCapitalize="none"
      autoCorrect={false}
      maxLength={50}
      onBlur={onBlur}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      value={value}
    />
  );
};

export default EditInput;

EditInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const StyledInput = styled.TextInput`
  flex: 1;
  height: 56px;
  padding: 0px 14px;
  border-radius: 4px;
  color: ${({ theme }) => theme.editText};
  font-size: 16px;
`;
