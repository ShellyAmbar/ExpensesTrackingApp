import {GlobalColors} from '@ExpensesTracking/constants/colors';
import {height, width} from '@ExpensesTracking/constants/styles';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabBarStyle: {
    height: 35 + 37 + 13,
  },
  tabBarItemStyle: {
    justifyContent: 'center',
    height: '100%',

    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 35,
  },
  tabBarLabelStyle: {
    fontSize: 13,
  },
  tabBarActiveTintColor: {color: GlobalColors.TextColors.selected},
  tabBarInactiveTintColor: {color: GlobalColors.TextColors.unSelected},
});
