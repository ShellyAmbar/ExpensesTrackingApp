import {useStore} from '@ExpensesTracking/store';
import {useLayoutEffect} from 'react';
import styles from '../home-screen.styles';

const useHomeScreen = ({navigation}) => {
  const rootStore = useStore();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: rootStore.user.fullName ? rootStore.user.fullName : '',
      headerTitleStyle: styles.headerTitle,
      headerTitleAlign: 'center',
    });
  }, []);
  return {};
};

export default useHomeScreen;
