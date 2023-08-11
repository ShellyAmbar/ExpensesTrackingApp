import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GlobalColors} from './constants/colors';

const createStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    safeAreaViewBack: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      width: '100%',
      height: '100%',
    },
    rectBorderStatusBar: {
      borderWidth: 1,
      borderColor: GlobalColors.Border.primary,
      width: '100%',
      height: 44,
    },
  });

export {createStyles};
