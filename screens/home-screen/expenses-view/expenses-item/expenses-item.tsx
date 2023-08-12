import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import {ExpensesItemProps} from './interfaces';
import styles from './expenses-item.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';
import ExpenseItem from './expense-item/expense-item';
import moment from 'moment';

const ExpensesItem = ({item, onPressItem, ...props}: ExpensesItemProps) => {
  return (
    <Box style={styles.container}>
      <Box style={[styles.horizontalStart, styles.dateView]}>
        <TextFactory style={styles.date}>
          {moment(item.date).format('DD/MM/YYYY')}
        </TextFactory>
      </Box>
      <Box style={styles.listContainer}>
        <>
          {item.expenses?.map((expanse, index) => {
            return (
              <Box key={expanse.id} style={styles.vertical}>
                <ExpenseItem item={expanse} onPressItem={onPressItem} />
                {index !== item.expenses?.length - 1 && (
                  <Box style={styles.line} />
                )}
              </Box>
            );
          })}
        </>
      </Box>
    </Box>
  );
};

export default ExpensesItem;
