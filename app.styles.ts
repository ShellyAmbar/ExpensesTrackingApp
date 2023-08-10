import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    safeAreaViewBack: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
  });

export {createStyles};
