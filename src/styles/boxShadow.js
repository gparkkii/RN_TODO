import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  innerShadow: {
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  outerShadow: {
    shadowColor: '#aaa',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.5,

    elevation: 5,
  },
});
