import React, {useEffect, useState} from 'react';

import {Box} from '../../components/controllers/box/box';
import Styles from './home-screen.styles';

import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';

import ExpensesView from './expenses-view/expenses-view';
import useHomeScreen from './hooks/useHomeScreen';

const HomeScreen = ({navigation, ...props}) => {
  const {} = useHomeScreen({navigation});
  return (
    <Box style={Styles.container}>
      <Spacer size={6} />

      <ExpensesView />
    </Box>
  );
};

export default HomeScreen;
