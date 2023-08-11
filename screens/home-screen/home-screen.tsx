import React, {useEffect, useState} from 'react';

import {Box} from '../../components/controllers/box/box';
import Styles from './home-screen.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import Filter from '@ExpensesTracking/assets/images/filter.svg';
import ExpensesView from './expenses-view/expenses-view';

const HomeScreen = () => {
  return (
    <Box style={Styles.container}>
      <Box style={Styles.horizontalStart}>
        <TextFactory>Total Expenses:</TextFactory>
        <TextFactory>{`${1024}`}</TextFactory>
      </Box>
      <Spacer size={35} />
      <Box style={Styles.horizontalEnd}>
        <ButtonFactory type="secondary" style={{}}>
          <Filter />
          <TextFactory style={Styles.filterText}>Filters</TextFactory>
        </ButtonFactory>
      </Box>
      <Spacer size={11} />
      {/* <Box style={[Styles.horizontalStart, Styles.dateView]}>
        <TextFactory>{'26.7.2022'}</TextFactory>
      </Box> */}
      <ExpensesView />
    </Box>
  );
};

export default HomeScreen;
