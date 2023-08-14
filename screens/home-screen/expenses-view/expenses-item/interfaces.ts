enum Currency {
  Dolar = '$',
  Shekel = '₪',
}
type Expense = {
  id?: number;
  name?: string;
  amount?: string;
  currency?: Currency;
  date?: Date;
};
type ExpenseItem = {
  id: number;
  date: Date;
  expenses: Expense[];
};
type ExpensesItemProps = {
  onPressItem: (expense: Expense) => void;
  item: ExpenseItem;
};

export {Currency, ExpenseItem, ExpensesItemProps, Expense};
