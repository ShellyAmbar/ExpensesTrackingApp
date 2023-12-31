import React from 'react';
import {Box} from '../../components/controllers/box/box';
import Styles from './home-screen.styles';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';
import ExpensesView from './expenses-view/expenses-view';
import useHomeScreen from './hooks/useHomeScreen';
import ExpensesGraph from './expenses-graph/expenses-graph';

const HomeScreen = ({navigation, ...props}) => {
  const {} = useHomeScreen({navigation});
  return (
    <Box style={Styles.container}>
      <Spacer size={6} />
      <ExpensesGraph />
      <ExpensesView />
    </Box>
  );
};

export default HomeScreen;
