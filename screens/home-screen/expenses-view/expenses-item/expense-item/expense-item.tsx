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
        {item.amount?.length > 0 && (
          <TextFactory style={styles.amount}>
            {item.amount?.includes('.')
              ? `$${item.amount?.split('.')[0]}.`
              : `$${item.amount}`}
          </TextFactory>
        )}
        {item.amount?.includes('.') && (
          <TextFactory style={styles.decimalNumbers}>{`${
            item.amount?.split('.')[1]
          }`}</TextFactory>
        )}
      </Box>
    </Box>
  );
};

export default ExpenseItem;
