import React, {useEffect, useState} from 'react';

import {Box} from '../../components/controllers/box/box';
import Styles from './home-screen.styles';

import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';

import ExpensesView from './expenses-view/expenses-view';

const HomeScreen = () => {
  return (
    <Box style={Styles.container}>
      <Spacer size={24} />

      <ExpensesView />
    </Box>
  );
};

export default HomeScreen;
