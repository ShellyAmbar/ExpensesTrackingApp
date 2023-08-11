import {View, Text} from 'react-native';
import React from 'react';
import {Box} from '@ExpensesTracking/components/controllers/box/box';
import {ExpensesItemProps} from './interfaces';
import styles from './expenses-item.styles';
import TextFactory from '@ExpensesTracking/components/factories/text-factory/text-factory';

const ExpensesItem = ({item, onPressItem, ...props}: ExpensesItemProps) => {
  return (
    <Box style={styles.container}>
      <Box style={[styles.horizontalStart, styles.dateView]}>
        <TextFactory style={styles.date}>{item.date}</TextFactory>
      </Box>
      <Box style={styles.listContainer}>
        <>
          {item.expenses?.map((expanse, index) => {
            return (
              <Box onPress={() => onPressItem(expanse)} style={styles.vertical}>
                <Box style={styles.horizontalSpaced} key={expanse.id}>
                  <TextFactory style={styles.title}>{expanse.name}</TextFactory>
                  <Box style={styles.number}>
                    <TextFactory
                      style={
                        styles.amount
                      }>{`${expanse.currency} ${expanse.amount}.`}</TextFactory>
                    <TextFactory style={styles.decimalNumbers}>
                      {`${0}`}
                    </TextFactory>
                  </Box>
                </Box>
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
