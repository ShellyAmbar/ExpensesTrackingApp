import Styles from '@ExpensesTracking/constants/styles';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',

    flexDirection: 'column',
    alignItems: 'center',
  },

  titel: {
    ...Styles.H4,
    textAlign: 'center',
  },
});
