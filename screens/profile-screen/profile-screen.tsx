import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import Styles from './profile-screen.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import Spacer from '@ExpensesTracking/components/controllers/spacer/spacer';

export default function ProfileScreen() {
  return (
    <Box style={Styles.container}>
      <Box style={Styles.horizontalSpaced}>
        <TextFactory>Total Expenses Items</TextFactory>
        <TextFactory>3</TextFactory>
      </Box>
      <Spacer size={24} />
      <Box style={Styles.horizontalStart}>
        <TextFactory>SignOut</TextFactory>
      </Box>
    </Box>
  );
}
