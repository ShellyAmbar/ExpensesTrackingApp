import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import Styles from './profile-screen.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import {rootStore, useStore} from '@ExpensesTracking/store';

export default function ProfileScreen(props) {
  const rootStore = useStore();
  const logoutUser = () => {
    rootStore.user.setIsLoggedIn(false);
    props?.navigation.navigate('Auth');
  };
  return (
    <Box style={Styles.container}>
      <Box style={Styles.horizontalSpaced}>
        <TextFactory>Total Expenses Items</TextFactory>
        <TextFactory>{rootStore.user.totalExpenses}</TextFactory>
      </Box>
      <Spacer size={24} />
      <Box style={Styles.horizontalStart}>
        <Box onPress={() => logoutUser()}>
          <TextFactory>{'SignOut'}</TextFactory>
        </Box>
      </Box>
    </Box>
  );
}
