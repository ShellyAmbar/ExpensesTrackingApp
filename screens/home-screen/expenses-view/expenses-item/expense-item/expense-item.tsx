import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import {ExpenseItemProps} from './interfaces';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import styles from './expense-item.styles';
const ExpenseItem = ({onPressItem, item, ...props}: ExpenseItemProps) => {
  return (
    <Box onPress={() => onPressItem(item)} style={styles.horizontalSpaced}>
      {item.name && <TextFactory style={styles.title}>{item.name}</TextFactory>}
      <Box style={styles.number}>
        {item.amount && item.currency && (
          <TextFactory
            style={
              styles.amount
            }>{`${item.currency} ${item.amount}.`}</TextFactory>
        )}
        <TextFactory style={styles.decimalNumbers}>{`${0}`}</TextFactory>
      </Box>
    </Box>
  );
};

export default ExpenseItem;
