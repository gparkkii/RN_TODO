import React from 'react';
import { View, Pressable } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { images } from 'styles/images';

const IconButton = ({ id, completed, iconType, onPress }) => {
  const onPressTask = () => {
    onPress(id);
  };
  return (
    <Pressable onPressIn={onPressTask} hitSlop={10}>
      <View>
        <Icon completed={completed} source={iconType} />
      </View>
    </Pressable>
  );
};

export default IconButton;

IconButton.propTypes = {
  iconType: PropTypes.oneOf(Object.values(images)).isRequired,
  completed: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const Icon = styled.Image`
  width: 22px;
  height: 22px;
  margin: 10px;
  tint-color: ${({ theme, completed }) =>
    completed ? theme.completedText : theme.iconColor};
`;
