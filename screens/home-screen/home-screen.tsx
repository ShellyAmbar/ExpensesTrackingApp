import React, {useEffect, useState} from 'react';

import {Box} from '../../components/controllers/box/box';
import Styles from './home-screen.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';

const HomeScreen = () => {
  return (
    <Box style={Styles.container}>
      <Box style={Styles.horizontal}>
        <TextFactory>Total Expenses:</TextFactory>
        <TextFactory>{`${1024}`}</TextFactory>
      </Box>
      <Spacer size={35} />
    </Box>
  );
};

export default HomeScreen;
