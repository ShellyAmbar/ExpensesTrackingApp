import {Expense} from '../interfaces';

export type ExpenseItemProps = {
  item: Expense;
  onPressItem: (item: Expense) => void;
};
